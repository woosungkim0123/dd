---
title: Spring Boot 3.2에서의 Batch 처리 시 BeanPostProcessorChecker 경고
author: woosungKim
date: 2023-12-17 00:00:00 +0800
categories: [Spring, Batch]
tags: [Spring, Batch, Bug]
---

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

## 임시 해결책

경고에 대한 결론을 먼저 말씀 드리겠습니다.  

DataSourceConfiguration$Hikari를 포함한 일부 빈들이 BeanPostProcessors에 의한 완전한 처리 전에 너무 일찍 사용되거나 관련 설정이 적용되고 있고 이로 인해 경고 메시지가 발생한 것으로 보입니다.

### 1. Spring Boot 3.1.x 버전 사용

Spring Boot 3.2.0 버전을 사용할 필수적인 이유가 없다면, 3.1.x 버전대를 사용하는 것이 좋습니다. 3.1.x 버전에서는 이러한 경고가 발생하지 않습니다.

참고로, 현재 Spring Boot의 `Batch`뿐만 아니라 `web-services`에서도 비슷한 문제가 발생하고 있습니다 - <a href="https://github.com/spring-projects/spring-ws/issues/1391" target="_blank"><strong>spring-ws Issues#1391</strong></a>

### 2. 경고를 무시하고 사용

실행 자체에는 문제가 되지 않고 정상 작동하지만, 빈을 새로 초기화하는 데 추가 시간이 소요됩니다. 데이터 1만개를 새 테이블에 넣는 간단한 배치 작업으로 평균 시간을 측정했습니다.

`v3.1.6`에서는 `17.231`초

`v3.2.0`에서는 `17.761`초  

약 0.5초 가량의 차이가 나타납니다.

## 버전 비교를 통한 관찰

경고가 뜨지않는 Spring Boot 3.1.6와 경고가 뜨는 Spring Boot 3.2.0에서 문제가 되는 클래스를 비교 해보았습니다.

보통 BeanPostProcessorChecker 경고는 특정 빈이 BeanPostProcessors의 모든 처리를 받기 전에 다른 빈에 의해 사용되거나 참조될 때 발생하게 됩니다.

> BeanPostProcessors는 빈의 초기화 과정 중 특정 시점에서 호출되어 추가적인 처리를 수행합니다. (postProcessBeforeInitialization, postProcessAfterInitialization)

> e.g. 빈 A가 빈 B에 의존하고 있고, 빈 B가 완전히 초기화되기 전에 빈 A가 생성되거나 사용될 경우

그래서 postProcessAfterInitialization 메서드에서 빈들의 후처리 과정을 관찰하다보니, 특정 빈들이 다른 빈들보다 먼저 처리되는 이상한 패턴이 발견되었습니다.

메인 클래스 빈이 들어오기도 전에 배치, 데이터 소스, 트랜잭션과 관련된 빈들이 들어와 경고문구를 출력한 후 메인 클래스 초기화 이후에 또 다시 해당 빈들이 들어왔습니다.

아마 이 문제는 Spring Boot 3.2.0에서 변경된 내부 빈 초기화 메커니즘이 원인일 것 같습니다. 배치, 데이터 소스, 트랜잭션 관련 빈들이 메인 클래스보다 먼저 초기화되고 있으며, 이로 인해 이들 빈들 간의 의존성 관리와 초기화 순서에 문제가 발생하고 있는 것 같습니다.

<br>

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

