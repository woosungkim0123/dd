---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: Destructuring
date: 2021-12-14 21:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include tableJs1-variable.html %}

<br>

<strong class="subtitle_fontAwesome">Destructuring</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

~~~Javascript
const arr = [2,3,4]
let a = arr[0];
let b = arr[1];
let c = arr[2];

// 좀더 쉽게 사용하는 문법
let [a,b,c] = [2,3,4];
console.log(a,b,c) // 2 3 4 출력
~~~

a,b,c 변수에 각각 2,3,4를 넣어주세요 라는 의미

모양만 맞춰서 변수를 선언하면 변수가 생김

이런식으로 변수를 만들 수 있는 문법이 Destructuring

<br>

<strong class="subtitle2_fontAwesome">활용</strong>

~~~javascript
const arr = [2,3,4]
let [a,b,c] = arr // 이런방식도 가능
~~~

~~~javascript
let [a,b,c] = [2,3]; 
console.log(c) // undefined 출력
// default 파라미터 처럼 default 변수값을 지정할 수 있음

let [d,c,f = 10] = [2,3]
console.log(f); // 10 출력

let [g,h,i = 10] = []; 
console.log(g,h) // undefined undefined 출력
~~~

Object도 가능

~~~Javascript
const obj = { name : '김', age : 30 } 
// object 안에 있는 데이터들('김', 30) 뽑아서 변수를 만들고 싶으면?
let name = obj.name;
let age = obj.age;
// Destructuring
let { name, age } = { name : '김', age : 30 } 
console.log(name, age) // 김 30 출력
~~~

아까랑 살짝 다르게 변수명을 key명과 똑같이 만들어야한다

~~~javascript
let { name, age = 31 } ={ name : '김' } // default 변수값 지정 가능
~~~

변수명도 변경이 가능하다

~~~javascript
let { name : 이름, age = 31 } ={ name : '김' }
~~~

~~~javascript
let { name : 이름 = "김", age = 31 } ={ }
~~~

<br>

<strong class="subtitle2_fontAwesome">역발상</strong>

반대로 변수들을 object에 넣고 싶을때

~~~javascript
let name = '김'
let age = 30

const obj = { name : name, age : age }
console.log(obj) // { name: '김', age: 30 } 출력
~~~

~~~Javascript
// 축약해서 사용가능
const obj = { name, age }
console.log(obj) // { name: '김', age: 30 } 출력
~~~

파라미터에도 똑같이 사용가능 - 함수에 object를 집어넣고 싶을때

~~~javascript
const obj = { name : 'kim', age : 30 };

function 함수(파라미터) {
   console.log(파라미터) // { name: 'kim', age: 30 } 출력
}
함수(obj)
~~~

내가 object 데이터를 kim만 집어넣고 싶거나 집어넣은 object 데이터를 변수로 저장해서 쓰고싶을때

~~~javascript
const obj = { name : 'kim', age : 30 };

function 함수( {name, age} ) {
   console.log(name) // kim 출력
   console.log(age) // 30 출력
}
함수(obj)
~~~

파라미터도 변수임 -> destructuring 문법을 이용

마찬가지로 배열도 가능

<br>

<strong class="subtitle2_fontAwesome">예제</strong>

~~~javascript
// 신체정보로 부터 4개 변수 뽑기
let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

let {
  body: {
    height, 
    weight
  },
  size: [ 상의, 하의 ]
} = 신체정보;
~~~