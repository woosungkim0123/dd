---
title: Spring Batch 성능 최적화
author: woosungKim
date: 2023-12-17 00:00:00 +0800
categories: [Spring, Batch]
tags: [Spring, Batch, Optimization]
---

Spring Batch를 사용하면서 대용량 데이터를 일괄 처리할 때 발생하는 성능 이슈를 해결하는 방법에 대해서 이야기 해보고자 합니다.

## Batch 성능 개선이 필요한 이유

Spring Batch는 대량의 데이터를 효율적으로 처리할 수 있는 강력한 프레임워크지만 처리해야 할 데이터 양이 많을수록 성능 문제가 발생할 가능성이 커집니다.   

예를 들어, Batch 작업 시간이 25만 번에 1시간이 걸린다면, 1억 번 처리 시에는 약 400시간이 소요될 것입니다. 이러한 시간 지연은 비즈니스에 심각한 영향을 미칠 수 있습니다.

# 성능 개선

배치 작업은 주로 세 가지 주요 구성 요소인 Reader, Processor, Writer로 나눌 수 있습니다. 이에 대해 개선 방법에 대해 알아보겠습니다.

## Reader 성능 개선

복잡한 조회 조건을 통해 데이터를 가져오기 때문에 대부분 배치에서 데이터를 읽는 Reader가 Writer보다 대체적으로 늦게 처리됩니다. 따라서 배치 성능 개선의 첫걸음은 Reader 개선이라고 볼 수 있습니다.

### 1. 커버링 인덱스



### OFFSET 성능 저하 개선 방식

chunk단위로 처리할 때 보통 페이징 방식을 사용하는데 이때 MySQL은 LIMIT OFFSET을 사용합니다. 

MySQL에서는 먼저 OFFSET 값만큼의 레코드를 건너뛴 후, 그 다음에 LIMIT 값만큼의 레코드를 가져옵니다. 예를 들어, LIMIT 10 OFFSET 1000이라는 쿼리는 처음 1000개의 레코드를 건너뛴 후 다음 10개의 레코드를 선택합니다. 그러다보니 시작할 레코드의 위치까지 모든 행을 건너뛰기 위해 데이터를 읽고 버려야합니다. 

이러한 부분이 대량의 데이터가 있는 테이블에서 성능 저하의 주요 원인이 됩니다.

```SQL
SELECT * FROM product WHERE create_date = ? ORDER BY id ASC limit 0, 100 -- 빠름

SELECT * FROM product WHERE create_date = ? ORDER BY id ASC limit 5000000, 100 -- OFFSET이 커질수록 느려짐
```

이런 문제를 해결하기 위해 PK를 기준으로 데이터를 정렬하고 OFFSET을 0으로 유지하는 방법을 사용할 수 있습니다.

```SQL
SELECT * FROM product WHERE create_date = ? AND id > 0 ORDER BY id ASC limit 0, 1000

SELECT * FROM product WHERE create_date = ? AND id > 5000001 ORDER BY id ASC limit 0, 1000
```



