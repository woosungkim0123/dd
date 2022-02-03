---
layout: post
current: post
cover: assets/built/images/js.jpg
navigation: True
title: rest parameter
date: 2022-01-14 12:57
tags: [ts]
class: post-template
subclass: "post tag-python"
author: Lome
---

<br>

<strong class="subtitle_fontAwesome">타입지정</strong>

<strong class="subtitle2_fontAwesome">rest parameter</strong>

```javascript
// 배열로 들어오기 때문에 배열로 타입지정해야함
function 함수(...a: number[]) {
  console.log(a);
}
함수(1, 2, 3, 4, 5);

// 다양한 파라미터 받기
function 함수(...a: (number | string | boolean)[]) {
  console.log(a);
}
함수(1, 2, 3, "1", true);
```

<br>

<strong class="subtitle2_fontAwesome">destructuring 타입지정</strong>

```javascript
// destructuring : 쉽게 변수에 담는 문법
let { student: student1, age: age1 } = { student: true, age: 20 };
// 똑같은 이름은 생략가능
let { student, age } = { student: true, age: 20 };
```

함수 파라미터에도 destructuring 가능

```javascript
let objectEx = { student: true, age: 20 };

function 함수(a, b) {
  console.log(a, b);
}
함수(objectEx.student, objectEx.age);

// destructuring 문법을 사용하면 (함수를 만들때 파라미터에 작명에 주의)
function 함수({ student, age }) {
  console.log(student, age);
}
함수({ student: true, age: 20 });
// 파라미터 만들기 == 변수만들기
// let { student, age } = { student: true, age: 20 }; 이거랑 같음
```

<br>

<strong class="subtitle2_fontAwesome">narrowing시 스킬</strong>

&& 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면 && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨줍니다.

```javascript
1 && null && 3; // null이 남음
undefined && "안녕" && 100; // undefined 남음
```

falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미합니다.

```javascript
function 함수(a: string | undefined) {
  if (typeof a === "string") {
    console.log(a);
  } else {
    console.log(a);
  }
}

//  변수가 undefined라면 undefined가 남아서 if문이 실행되지 않고(if문 조건식 안에 falsy 값이 남으면 if문 실행되지 않는다)
// 변수가 string 타입이면 if문이 실행
// 변수가 null, undefined인 경우를 쉽게 거를 수 있는 문법
function 함수(a: string | undefined) {
  if (a && typeof a === "string") {
    console.log(a);
  }
}
// if (변수 != null) 이렇게 조건식을 써도 null, undefined 이거 두 개를 동시에 거를 수 있다.
```

익숙하지않으면 if문 하나더 쓰는게 나음

<br>

<strong class="subtitle2_fontAwesome">typeof로 불가능한 narrowing</strong>

```javascript
type Fish = { swim: string };
type Bird = { fly: string };

function 함수(animal: Fish | Bird) {
  // 여기서 animal은 swim이나 fly를 사용할 수 없음(애매하기때문에 -> narrowing)
  // typeof 사용불가능(둘다 object라서)
  // Fish는 swim속성을 가지고 있고 Bird는 fly속성 가지고있다(각기 다른 속성)
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}
```

다른방법으로 object 두개가 비슷하면 부모 class가 누군지 물어봄으로써 narrowing 가능(instance of)

```javascript
// 속성이 같아서 in 사용불가
// 부모class가 없어서 instance of 사용불가
// 애초에 타입을 두개로 만든건 실수
// 굳이 구분하려면 literal type을 강제로 만들어두면 됨(wheel)
type Car = {
  wheel: "4개",
  color: string,
};
type Bike = {
  wheel: "2개",
  color: string,
};

function 함수(x: Car | Bike) {
  if (x.wheel == "4개") {
    console.log("이 차는 " + x.color);
  } else {
    console.log("이 바이크는 " + x.color);
  }
}
```
