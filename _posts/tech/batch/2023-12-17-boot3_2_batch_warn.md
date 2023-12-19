---
title: Spring Boot 3.2에서의 Batch 처리 시 BeanPostProcessorChecker 경고
author: woosungKim
date: 2023-12-17 00:00:00 +0800
categories: [Spring, Batch]
tags: [Spring, Batch, Bug]
---

2023년 12월 19일 `JobRegistryBeanPostProcessor` Bean이 자동으로 등록되는 것을 방지함으로써 문제를 해결하실 수 있습니다.

기존 해결방법을 모두 제거하고 해당 내용으로 수정하였습니다.

----

2023년 12월 17일 현재, Spring Boot 3.2에서 Batch를 사용할 때 발생하는 BeanPostProcessorChecker 경고와 관련된 명확한 해결책이나 패치는 아직 제공되지 않았습니다. 이 문제에 대한 추가 정보가 나오는 대로 본 글을 업데이트할 예정입니다.

<a href="https://github.com/spring-projects/spring-batch/issues/4519" target="_blank"><strong>Spring Batch Issue#4519</strong></a>



## 문제 파악

### 로그

Spring Boot 3.2.0 버전에서 Batch를 사용할 때, 다음과 같은 경고 로그가 다수 발생하는 것을 확인했습니다. 전체 로그는 로그 요약 섹션에서 확인하실 수 있습니다.

```vbnet
trationDelegate$BeanPostProcessorChecker : Bean 'org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Hikari' of type [org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Hikari] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying). Is this bean getting eagerly injected into a currently created BeanPostProcessor [jobRegistryBeanPostProcessor]? Check the corresponding BeanPostProcessor declaration and its 
```

![BeanPostProcessorChecker Warn](/posts/batch/boot_3_2_warn_1.png)

### 발생 환경

- `Spring Boot 3.2.0 (JDK 17, 21)`

- `Spring Batch 5.1`

## 해결책

Spring Boot 3.2와 Spring Batch 5.0 이상에서 발생하는 문제의 근본 원인은 `JobRegistryBeanPostProcessor`가 자동으로 설정되기 때문입니다. 이 문제는 <a href="https://github.com/spring-projects/spring-batch/issues/4245" target="_blank"><strong>Spring Batch Issue#4245</strong></a>에서 소개된 변경 사항에 기인합니다.

이 변경으로 인해 `JobRegistryBeanPostProcessor`가 자동으로 등록되면서, 일부 빈들이 BeanPostProcessor의 처리를 완전히 받기 전에 초기화를 시도하는 문제가 발생하며, 이로 인해 경고 메시지가 발생합니다.

> JobRegistryBeanPostProcessor는 Spring Batch에서 JobRegistry와 관련된 빈들을 자동으로 등록하는 역할을 합니다.

### JobRegistryBeanPostProcessor 빈의 자동 등록 방지

```java
@Configuration
public class BatchWarningConfig {

    @Bean
    public static BeanDefinitionRegistryPostProcessor jobRegistryBeanPostProcessorRemover() {
        return registry -> registry.removeBeanDefinition("jobRegistryBeanPostProcessor");
    }
}
```

Spring Boot 3.2.0 버전을 사용해야 하는 필수적인 이유가 없다면, 3.1.x 버전대를 사용하는 것이 더 적절할 것입니다. 3.1.x 버전에서는 이러한 경고가 발생하지 않습니다.

참고로, 현재 Spring Boot의 `Batch`뿐만 아니라 `web-services`에서도 비슷한 문제가 발생하고 있습니다 - <a href="https://github.com/spring-projects/spring-ws/issues/1391" target="_blank"><strong>spring-ws Issues#1391</strong></a>

## 버전 비교를 통한 관찰

경고가 뜨지않는 Spring Boot 3.1.6와 경고가 뜨는 Spring Boot 3.2.0에서 문제가 되는 클래스를 비교 해보았습니다.

보통 BeanPostProcessorChecker 경고는 특정 빈이 BeanPostProcessors의 모든 처리를 받기 전에 다른 빈에 의해 사용되거나 참조될 때 발생하게 됩니다.

> BeanPostProcessors는 빈의 초기화 과정 중 특정 시점에서 호출되어 추가적인 처리를 수행합니다. (postProcessBeforeInitialization, postProcessAfterInitialization)

그래서 postProcessAfterInitialization 메서드에서 빈들의 후처리 과정을 관찰하다보니, 특정 빈들이 다른 빈들보다 먼저 처리되는 이상한 패턴이 발견되었습니다.

메인 클래스 빈이 들어오기도 전에 배치, 데이터 소스, 트랜잭션과 관련된 빈들이 들어와 경고문구를 출력한 후 메인 클래스 초기화 이후에 또 다시 해당 빈들이 들어왔습니다.

아마 이 문제는 Spring Boot 3.2.0에서 변경된 내부 빈 초기화 메커니즘이 원인일 것 같습니다. 배치, 데이터 소스, 트랜잭션 관련 빈들이 메인 클래스보다 먼저 초기화되고 있으며, 이로 인해 이들 빈들 간의 의존성 관리와 초기화 순서에 문제가 발생하고 있는 것 같습니다.

## 로그 요약

<details>
    <summary>내용보기</summary>

<br>

<strong>Common Warning</strong>

<p>The following beans are not eligible for being processed by all BeanPostProcessors (e.g., not eligible for auto-proxying). Please check if these beans are being eagerly injected into the currently created BeanPostProcessor [jobRegistryBeanPostProcessor] and review the corresponding BeanPostProcessor declaration and its dependencies:</p>

- org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Hikari  <br>
- spring.datasource-org.springframework.boot.autoconfigure.jdbc.DataSourceProperties <br>
- org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration$PooledDataSourceConfiguration <br>
- jdbcConnectionDetail`<br>
- dataSourc` (com.zaxxer.hikari.HikariDataSource) <br>
- org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration$ JdbcTransactionManagerConfiguration <br>
- org.springframework.boot.autoconfigure.transaction.TransactionManagerCustomizationAutoConfiguration` <br>
- transactionExecutionListeners <br>
- spring.transaction-org.springframework.boot.autoconfigure.transaction.TransactionProperties <br>
- platformTransactionManagerCustomizers <br>
- transactionManager (org.springframework.jdbc.support.JdbcTransactionManager) <br>
- spring.batch-org.springframework.boot.autoconfigure.batch.BatchProperties <br>

<br>

<strong>Another Warning</strong>  

<p>Bean 'org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration\$SpringBootBatchConfiguration' of type [org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration$SpringBootBatchConfiguration] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying). The currently created BeanPostProcessor [jobRegistryBeanPostProcessor] is declared through a non-static factory method on that class; consider declaring it as static instead.</p>
</details>

