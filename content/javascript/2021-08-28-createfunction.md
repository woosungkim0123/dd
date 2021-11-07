---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: 생성자함수
date: 2021-09-23 17:58
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascript.html %}

<br>

<strong class="subtitle_fontAwesome">생성자함수</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

리터럴표기법은 변수를 선언하면서 동시에 값을 지정해주는 표기법을 말한다

~~~javascript
var a = 10;
~~~

리터럴표기법을 사용해 객체를 만드는 방법은 정해진 값을 가진 객체를 한번만 만들어낸다

여러개의 객체를 만들려면 똑같은 속성과 함수를 입력하고 값만 다르게 넣어서 새롭게 객체를 만들어 내야한다.

공통되는 속성과 함수를 틀처럼 미리 만들어두고 값만 집어넣어서 찍어내는 방식으로 만들면 굉장히 빨라지고 편리해진다

이러한 틀을 바로 생성자함수라고 한다

<strong>예시</strong>

~~~javascript
var superMan = {
	name: "슈퍼맨",
	age: 30,
	gender: "남성",
	skills: ["레이저빔", "공중부양", "파워"]
}

var spiderMan = {
	name: "스파이더맨"
	age: 18,
	gender: "남성",
	skills: ["거미줄", "벽타기", "스파이더센서"]
}

var blackWidow = {
	name: "블랙위도우"
	age: 34,
	gender: "여성",
	skills: ["격투", "암살", "잠입"]
}
~~~

이렇게 비효율적인 방식을 생성자함수를 사용하는 방식으로 바꾸어보자

<br>

<strong class="subtitle2_fontAwesome">생성자함수 생성</strong>

함수를 만들 때 사용하는 function 키워드를 가지고 생성자 함수를 만들수 있다

기능을 만들 때 사용되는 일반함수와 생성자함수를 구분짓기 위해서 생성자함수는 첫글자를 대문자로 작성함

매개변수로 name, age 나머지는 너무 길어져서 생략

~~~javascript
function Heroes(name, age) {
	this.name = name;
	this.age = age;
}
~~~

Heroes라는 틀이 만들어졌습니다. (생성자함수)

여기서 this가 가리키는 것은 선언하고 있는 객체 자체를 말합니다.&#160; 즉,&#160; Heroese 객체를 가르킨다

각각 생성한 변수 안에다가 new라는 키워드사용

인수로는 name과 age 순서대로 작성

생성자함수를 호출할때 전달한 값이 각각 age, name에 할당이됨

~~~javascript
var superMan = new Heroes('슈퍼맨', 30);
var blackWidow = new Heroes('블랙위도우', 34);

console.log(superMan);
console.log(blackWidow);
~~~

![createfunction](assets/built/images/js/createfunction-1.jpg)


<br>

<strong class="subtitle2_fontAwesome">인스턴스</strong>

만들어놓은 틀(Heroes)을 가지고 new키워드를 사용해 호출된 결과물을 인스턴스라고 한다.

여기서는 superMan과 blackWidow가 인스턴스이다.

<br>

<strong class="subtitle2_fontAwesome">붕어빵 예시</strong>

붕어빵 장수가 붕어빵을 만들어서 팔려고한다

빵을 붕어모양으로 만들기 위해 손으로 이리저리 빚어서 만들면 시간이 오래 걸려서 붕어빵을 많이 만들 수 없다.

그러나 붕어빵틀을 사용하면 틀에다가 반죽을 넣기만 하면 모양이 완성되기 때문에 붕어빵을 많이 만들 수 있다.

여기서 붕어빵틀이 바로 생성자함수이다. 그리고 틀을 이용해 찍어낸 붕어빵이 인스턴스이다.

<br>

<strong class="subtitle2_fontAwesome">좀더 쉽게 정리</strong>

~~~javascript
function Heroes(name, age) {

	console.log(name);

	this.이름 = name;
	this.나이 = age;
}

var superMan = new Heroes('슈퍼맨', 30);
var blackWidow = new Heroes('블랙위도우', 34);

console.log(superMan);
console.log(blackWidow);
~~~

![createfunction](assets/built/images/js/woosung1.jpg)

superMan이라는 인스턴스를 만들기위해 Heroes 생성자함수에 슈퍼맨, 30이라는 값을 인수로 전달

이 값을 Heroes 생성자함수는 매개변수를 통해 받게 된다

여기서 콘솔로그로 name을 찍어보면 

![createfunction](assets/built/images/js/woosung2.jpg)

this.이름과 this.나이의 의미는 name을 객체(Heroes)의 이름 항목으로 넣어주겠다. &#160; age를 객체(Heroes)의 나이 항목으로 넣어주겠다

여기서 이름, 나이는 공통적인 요소로 보면 된다.

그리고 그 값을 superMan이라는 변수에 넣은 것이고 이 변수를 생성자함수를 통해 만들어졌다고해서 인스턴스라는 이름으로 부르기로 한 것이다.

그래서 콘솔로그로 superMan을 찍어보면 객체형태로 나타남

![createfunction](assets/built/images/js/woosung1.jpg)

<br>

<strong class="subtitle2_fontAwesome">예시 2</strong>

Person 생성자 함수에 fullName 함수를 만듬

firstName과 lastName을 더하는 일종의 메서드를 하나 만든 것

~~~javascript
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	this.fullName = function() {
		console.log(this.firstName + " " + this.lastName);
	}
}
~~~

kim과 park에 Person 붕어빵틀 사용

~~~javascript
var kim = new Person("Woosung", "Kim");
var park = new Person("David", "Park");

console.log(kim);
console.log(park);
~~~

![createfunction](assets/built/images/js/createfunction-3.jpg)

이렇게 만들어진 객체 안에 fullName 메서드가 들어가있는 상태

kim, park 안에있는 풀네임을 호출해보자

~~~javascript
kim.fullName();
park.fullName();
~~~

![createfunction](assets/built/images/js/createfunction-4.jpg)

우리가 this.firstName, this.lastName에 할당해놓은 woosung kim, david park을 fullName에서 더했기 때문에 kim안에 fullName이라고 하는 메서드를 호출하게 되면은 kim 인스턴스로 전달된 인수값들이(woosung, kim) 더해진 형태로 화면에 출력된다

생성자함수는 안에 인수를 담을 공간을 부여할수도 있지만(this.firstName, this.lastName) 안에다가 인스턴스가 활용할 메서드 자체를 정리할수도 있다(fullName)

<br>

<strong class="subtitle2_fontAwesome">prototype</strong>

지금 객체값을 보면 kim, park 인스턴스에 두개의 키값은 서로 다른값이 들어가있지만 fullName에 대해서는 서로 같은 값을 가지고 있음

![createfunction](assets/built/images/js/createfunction-5.jpg)

정리하면 함수 자체(fullname = function() { console....}가 kim과 park안에 각각 들어가있음

안에 결과물이 달라지는 이유는 우리가 전달해놓은 인수를 덧셈해준것 뿐이지 함수 자체는 kim이든 park이든 똑같은 상태이다

여기서 문제점이 코드 전체 분량으로 봤을때 같은 코드가 계속 반복적으로 노출되고 있는 것이다

이것은 불필요한 메모리를 잡게되고 쓸데없는 용량을 잡아먹게된다

kim, park 모두 동일하기 때문에 모든 인스턴스에 공통적으로 적용되는 메서드를 만들면된다.

생성자함수 안쪽에다가 작성하는게 아니라 prototype 개념을 활용해서 메서드를 부여해줘야한다.

~~~javascript
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.fullName = function() {
	console.log(this.firstName + " " + this.lastName);
}

var kim = new Person("Woosung", "Kim");
var park = new Person("David", "Park");

kim.fullName();
park.fullName();
~~~

![createfunction](assets/built/images/js/createfunction-4.jpg)

같은 결과가 출력된다

console.log로 kim과 park을 찍어보면 kim과 park 안에는 fullName 메서드가 없다, 그런데 fullname을 가져다가 사용하고있음

이 현상이 발생하는 이유는 Person 생성자 함수를 만들 때 자바스크립트는 Person.prototype 객체를 같이 생성한다

person.prototype 객체라는 요소안에다가 fullname이라고 하는 메서드를 새롭게 추가해준 것이다