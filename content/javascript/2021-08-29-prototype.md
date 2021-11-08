---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: 프로토타입
date: 2021-09-23 21:58
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascript.html %}

<br>

<strong class="subtitle_fontAwesome">Prototype 객체</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

~~~javascript
// Person.prototype : 조상
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.fullName = function() {
	console.log(this.firstName + " " + this.lastName);
}

// 인스턴스 : 후손
var kim = new Person("Woosung", "Kim");
var park = new Person("David", "Park");
~~~

만약 Peroson 생성자함수를 만들면 Person.protype 객체가 같이 만들어진다. (눈에 보이지 않는 개념이라 주의)

kim, park 같은 인스턴스(후손) : 지금을 살고 있는 대한민국인

person.prototype 같은 prototype 객체(조상) : 단군

조상님(prototype)에다가 직접적으로 fullName이라는 스킬을 부여한것

후손이 그 스킬을 가지고 있지 않더라도 조상님의 DNA에다가 fullName이라는 스킬을 주입했기 때문에 후손은 가져다가 쓸 수 있다

직접적으로 후손이 fullName이라는 스킬을 가지고있지 않아서 불필요한 메모리를 잡아먹지않음

<br>

<strong class="subtitle2_fontAwesome">배열을 만드는 2가지 방법</strong>

1. 직접적으로 배열을 주입하는 방법

~~~javascript
var arr1 = [];
~~~

2. new키워드로 자바스크립트에서 만들어 놓은 Array 생성자함수를 호출하는 방법
콘솔로그로 보면 배열은 이미 만들어져있는 상태

~~~javascript
var arr2 = new Array();
console.log(arr2);
~~~

![proto](assets/built/images/js/proto1.jpg)

Array라는 생성자함수에 숫자를 부여하면 비어있는 데이터가 들어가게된다(empty라고 표기가되는것)

대신에 데이터의 길이는 10으로 나타남, &#160;데이터가 들어갈 자리를 미리 만들어둔다라고 생각하기

여기서 확인할점은 Array라는 생성자함수가 자바스크립트에 이미 존재하고있구나 라는 부분

~~~javascript
var arr2 = new Array(10);
console.log(arr2);
~~~

![proto](assets/built/images/js/proto2.jpg)

<br>

<strong class="subtitle2_fontAwesome">문자열을 만드는 2가지 방법</strong>

1. 문자열을 만들때 ""안에 글자를 넣기 

~~~javascript
var str1 = "Hello";
~~~

2. new키워드를 사용해서 String이라는 생성자함수를 호출해서 만들 수도 있다. &#160;두번째 방식으로 만들어진 Nice는 데이터타입이 객체임.

0, 1, 2, 3 에 n, i, c, e 각각의 글자가 삽입이 되어있는 상태

~~~javascript
var str2 = new String("Nice");
console.log(str2);
~~~

![proto](assets/built/images/js/proto3.jpg)

<br>

<strong class="subtitle2_fontAwesome">함수를 만드는 2가지 방법</strong>

1. 기존 함수 만드는 방법

~~~javascript
var func1 = function() {
}
~~~

2. 이미 자바스크립트에서 만들어놓은 생성자함수 Function을 호출한것. &#160;매개변수와 return값이 적용되어있는 함수를 확인할 수 있음

~~~javascript
var func2 = new Function("x, y", "return x * y")
console.log(func2);
~~~

![proto](assets/built/images/js/proto4.jpg)

지금까지 사용한 생성자함수는 개념을 설명하기위해 사용한것(실무에선 잘 사용 안함)

위에서 사용된 arr2, str2, fun2는 모두 인스턴스

<br>

<strong class="subtitle2_fontAwesome">dir</strong>

변수의 내부구조를 디테일하게 확인하고자 할 때 사용되는 메서드

~~~javascript
console.dir(arr2);
console.dir(str2);
console.dir(func2);
~~~

<br>

<strong class="subtitle2_fontAwesome">\_\_proto__ ([[Prototype]])</strong>

proto는 크롬 브라우저에서 사용하는 프로퍼티명이고, ECMA 명세서에는 [[Prototype]]이라는 이름으로 사용한다

후손(인스턴스)이 어떠한 조상님(prototype)으로 부터 영향을 받고 있는지 알고싶을 때 사용

![proto](assets/built/images/js/proto1.jpg)

![proto](assets/built/images/js/proto5.jpg)

![proto](assets/built/images/js/proto6.jpg)

arr2의 조상은 Array prototype 객체,&#160; str2의 조상은 String prototype 객체,&#160; func2의 조상은 Function prototype 객체 라는걸 확인할 수 있다.

<br>

<strong class="subtitle2_fontAwesome">객체 만드는 2가지 방법</strong>

1. 기존방식

~~~javascript
var obj = {}
~~~

2. 이미 자바스크립트에서 만들어놓은 생성자함수 Object를 호출한것.

~~~javascript
var person = new Object();
console.log(person);
~~~

새로운 property, method를 추가할 수 있다

name이라는 property, sayhi라는 메서드가 person 객체안에 추가된걸 확인할 수 있다

~~~javascript
var person = new Object();

person.name = "Woosung";
person.sayHi = function() {
	console.log("hi");
}
console.log(person);
~~~

Object.prototype 객체가 person 인스턴스의 조상인지를 한번 비교연산자를 통해 확인해보자

~~~javascript
console.log(person.__proto__ === Object.prototype);
~~~

![proto](assets/built/images/js/proto7.jpg)

<strong>다른 예시</strong>

~~~javascript
var arr2 = new Array();
var str2 = new String("Nice");
var func2 = new Function("x, y", "return x * y")

console.log(arr2.__proto__ === Array.prototype);
console.log(str2.__proto__ === String.prototype);
console.log(func2.__proto__ === Function.prototype);
~~~

![proto](assets/built/images/js/proto8.jpg)

String.prototype 객체를 자세히 살펴보면 proto : object를 가리키고 있음

~~~javascript
console.dir(str2);
~~~

![proto](assets/built/images/js/proto9.jpg)

그 말은 String prototype 객체의 조상은 object 프로토타입 객체다

나머지도 마찬가지

~~~javascript
console.log(String.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
~~~

![proto](assets/built/images/js/proto8.jpg)

<strong>참고</strong>

String, Array, Function prototype 객체를 각 국가의 조상으로 이해하면되고 object prototype 객체는 각국가에 있는 조상들의 기원(인류의 기원)이라 보면됨

이러한 이유 때문에 어떤 개발자는 자바스크립트는 데이터타입이 객체다 or 문자, 숫자, boolean등이 없고 자바스크립트는 객체로 구성되어있다 라고 말하는사람들도 있다

완전히 틀린 말은 아닌게 그 말의 근거가 되는게 자바스크립트의 언어의 근간은 object prototype 객체로 구성되어있기 때문에

object prototype 객체의 조상은 누구냐? 없음 (proto가 더이상 없음)

<br>
<br>

<strong class="subtitle_fontAwesome">constructor</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

생성자함수가 누구인지 탐색할 때 활용되는 property

str11이라는 인스턴스의 생성자 함수는 String 임을 알 수 있다.

~~~javascript
var str11 = new String("Nice");

console.dir(str11);
console.dir(str11.constructor);
console.dir(str11.constructor === String);
~~~

![proto](assets/built/images/js/proto10.jpg)

<strong class="subtitle2_fontAwesome">질문</strong>

생성자함수를 만들게되면 자동으로 생성자함수 이름을 담고있는 프로토타입객체가 만들어진다고 설명했다

그러면 String prototype 객체의 생성자함수는 누구냐? String

~~~javascript
console.log(String.prototype.constructor === String);
~~~

![proto](assets/built/images/js/proto7.jpg)

String 생성자함수의 prototype 객체는 누구냐?

모든 생성자함수의 prototype 객체는 전부다 Function prototype 객체다

우리가 찾은 생성자 함수의 조상 Function prototype 객체의 조상은 누구냐? Object prototype 객체(모든 조상의 끝판왕)

~~~javascript
console.log(String.__proto__ === Function.prototype);
console.log(Array.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
~~~

![proto](assets/built/images/js/proto8.jpg)

<br>
<br>

<strong class="subtitle_fontAwesome">정리</strong>

<strong class="subtitle2_fontAwesome">proto</strong>

기존에 자바스크립트에서 만들어놓은 생성자함수를 사용하지 않고 우리가 만든 생성자함수를 가지고 배운내용을 복습해보자

~~~javascript
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

var kim = new Person("Woousng", "Kim");
~~~

kim 인스턴스의 조상은 Person prototype 객체

~~~javascript
console.log(kim.__proto__ === Person.prototype);
~~~

![proto](assets/built/images/js/proto7.jpg)

<strong>주의점</strong>

Proto : object라 나오는데 object로 표기되어서는 안되고 Person이 나와야함. &#160;크롬브라우저의 일종의 실수

object랑 같은지 찍어보면 거짓뜸

~~~javascript
console.log(kim.__proto__ === Object.prototype);
~~~

Person prototype 객체의 조상은? Object prototype 객체

~~~javascript
console.log(Person.prototype.__proto__ === Object.prototype);
~~~

![proto](assets/built/images/js/proto7.jpg)

<strong>의문점</strong>

Person prototype 객체의 조상이 object prototype 객체라면 kim의 조상이 object prototype 객체가 될수있는거아님? false

중간단계의 조상을 건너뛸수는 없음

즉 우리가 단군의 후손은 맞지만 인류의 기원의 직접적인 후손은 아닌거임, 단군이 인류의 기원의 직접적인 후손임


<strong>생성자함수 조상</strong>

Person 생성자함수의 조상은 누구냐? Function prototype 객체

~~~javascript
console.log(Person.__proto__ === Function.prototype);
~~~

![proto](assets/built/images/js/proto7.jpg)

Function prototype 객체의 조상은 누구냐? Object prototype 객체

~~~javascript
console.log(Function.prototype.__proto__ === Object.prototype);
~~~

![proto](assets/built/images/js/proto7.jpg)

<br>

<strong class="subtitle2_fontAwesome">constructor</strong>

kim 인스턴트의 생성자함수는 누구냐? Person

~~~javascript
console.log(kim.constructor === Person);
~~~

![proto](assets/built/images/js/proto7.jpg)

Person prototype 객체의 생성자함수는 누구냐? person

~~~javascript
console.log(Person.prototype.constructor === Person);
~~~

![proto](assets/built/images/js/proto7.jpg)