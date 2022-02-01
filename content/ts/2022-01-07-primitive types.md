---
layout: post
current: post
cover: assets/built/images/js.jpg
navigation: True
title: any
date: 2022-01-07 18:57
tags: [ts]
class: post-template
subclass: "post tag-python"
author: Lome
---

<span></span>

{% include table-of-contents-javascript.html %}

<br>

<strong class="subtitle_fontAwesome">타입 더알아보기</strong>

<strong class="subtitle2_fontAwesome">any</strong>

any 타입은 타입을 마구 바꿔도 에러가 나지 않는다.

비상시 쓰는 변수 타입체크 해제기능 이런 용도로 씁시다.

```javascript
let 이름: any;
이름 = 123;
이름 = true;
// 아무거나 들어옴(모든 자료형 허용)
```

변수나 파라미터에 타입을 할당안하면 any가 할당됨

만약 any를 사용할 일이 있다면 unknown 사용하기

<br>

<strong class="subtitle2_fontAwesome">void 타입</strong>

함수에서만 사용가능한 void타입

함수를 리턴하고 싶지 않을때(이걸 엄격하게 체크하고싶을때)

```javascript
function 함수(x: number): void {}
```

여기서 자바스크립트와 차이점

함수에 파라미터가 정의되어있고 여기 타입지정이있으면 무조건 파라미터를 써야함

파라마터를 입력해도되고 안해도되는 선택사항으로 만들고싶으면

```javascript
function 함수(x?: number) {}
// object도 마찬가지
// ?는 undefined가 포함된 유니온 타입을 만들어주는것
// x? :number와 x :number | undefined는 같은의미
```

<br>

<strong class="subtitle2_fontAwesome">narrowing</strong>

string타입 + 1 허용

number타입 +1 허용

string | number 타입 + 1 허용x (union은 새로운 타입임)

number도 아니고 string도 아니고 number|string이라는 타입

type이 하나로 확정되지않았을때 type narrowing을 써야함 - 일종의 코딩방식(타입스크립트 꼭지켜야할 코딩방식)

```javascript
function 내함수(x :string|number){
   if(typeof x === 'string'){ // 타입을 narrowing(좁힌다)
      return x+'1'
   } else {
      return x+1
   }
```

애매한타입을 가지고 있는 변수들은 꼭 narrowing을 해야 제대로 조작가능

if문을 썻으면 else, elseif 를 써야 안전(타입이 많은경우)

narrowing 문법에는

속성명 in 오브젝트 : 어떤 속성이 오브젝트에 있는지 검사

인스턴스 instance of 부모 : 이 인스턴스가 부모인지 검사

<br>

<strong class="subtitle2_fontAwesome">assertion</strong>

narrwing 대신 쓸수 잇는 방법으로 assertion 문법이 있다

타입을 잠깐 덮어씌우는걸

```javascript
function 내함수(x :number|string){
   let array:number[] =[];
   array[0] = x as number; // 왼쪽 변수를 number로 덮어써주세요.
   // 타입스크립트 컴파일러가 x를 number로 인식함
}
내함수(123);
```

as문법의 용도

1. narrowing 할때(union 타입을 하나의 타입으로 확정하고 싶을때)

   ```javascript
   // 잘못된 예

   let 이름 :string = 'kim'
   이름 as number; // 에러
   // as문법은 여러개 복잡한 union타입을 하나로 확정하고 싶을때 사용하는것
   // 타입을 a에서 b로 변경할때 사용하는 문법이 아님
   ```

2. 무슨 타입이 들어올지 확실하게 알고 있을때 사용

3. 평소에는 쓰지말고(버그 추적 힘듬), 남의 코드 수정할때 비상용 or 디버깅용 으로 사용
