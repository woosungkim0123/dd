---
layout: post
current: post
cover:  assets/built/images/js-model.png
navigation: True
title: 생성자 함수로 배열 안에 데이터 삽입
date: 2021-09-23 23:10
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascriptmodel.html %}

<br>

<strong class="subtitle_fontAwesome">생성자 함수로 배열 안에 데이터 삽입</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

배열 안에 들어가는 데이터 자체를 생성자 함수를 가지고 삽입하는 작업

<br>

<strong class="subtitle2_fontAwesome">사전준비</strong>

데이터를 넣을 배열을 만듬

~~~javascript
var arr = [];
~~~

이전 글에서 사용한 배열을 예시로 작업을 진행

<ul><li><a href="./btnimg">버튼으로 이미지 변경</a></li></ul>

~~~javascript
var arr = [
	{
		img: "img/img-0.jpg",
		name: "사과 이름 0",
		txt: "사과 설명 0"
	},
	{
		img: "img/img-1.jpg",
		name: "사과 이름 1",
		txt: "사과 설명 1"
	},
	{
		img: "img/img-2.jpg",
		name: "사과 이름 2",
		txt: "사과 설명 2"
	},
	{
		img: "img/img-3.jpg",
		name: "사과 이름 3",
		txt: "사과 설명 3"
	}
];
~~~

이렇게 배열을 일일이 만드는 것이 아닌 생성자 함수를 통해 간단하게 만들어보자

<br>

<strong class="subtitle2_fontAwesome">함수생성</strong>

Customer라는 생성자함수를 만들어주고 3개의 매개변수를 전달

~~~javascript
function Customer(name, img, txt) {
    this.name = name;
    this.img = img;
    this.txt = txt
}
~~~

함수를 만들고 3개의 인수로 전달된 값들을 매개변수에 각각 할당시킨다

~~~javascript
function createCustomer(name, img, txt) {
 
}

// 인수
createCustomer("사과 1 이름", 0, "사과 1 설명");
createCustomer("사과 2 이름", 1, "사과 2 설명");
createCustomer("사과 3 이름", 2, "사과 3 설명");
createCustomer("사과 4 이름", 3, "사과 4 설명");
~~~

~~~javascript
function createCustomer(name, img, txt) {
	console.log(name);
}
~~~

![btnimg](assets/built/images/js/woosung3.jpg)

함수 안에 인수들이 매개변수를 통해 들어간 것을 알 수 있다.

<br>

<strong class="subtitle2_fontAwesome">데이터 삽입</strong>

함수 안에 생성자 함수를 활용해서 배열안에 데이터로 삽입시켜 줄것임(객체형태로)

0, 1, 2, 3은 이미지 이름에 들어가 있는 파일명 숫자라고 보면된다

함수 안에 fullImg라는 변수를 만들고 백틱을 활용하여 img폴더 안에있는 이미지의 경로를 만들어준다

{} 안에 들어가있는 img는 매개변수 img를 의미한다

~~~javascript
function createCustomer(name, img, txt) {
    var fullImg = `img/img-${img}.jpg`;
}
~~~

customer 변수는 우리가 바깥쪽에서 만들어 놓은 생성자함수의 인스턴스다

~~~javascript
function createCustomer(name, img, txt) {
    var fullImg = `img/img-${img}.jpg`;

    var customer = new Customer(name, fullImg, txt);
}
~~~

우리가 전달한 각각의 인수들은 함수를 통해서 전달받고 함수에 있는 매개변수 자체가 바로 Customer에 인수로 할당이 됨

인수로 다시 넣을때는 fullImg의 값은 0, 1, 2, 3이 아닌 우리가 백틱으로 조합해논 이미지의 경로로 다시 들어가게됨

결과물을 arr에 넣어주면됨(push)

push는 배열에서만 쓸 수 있음

~~~javascript
var arr = [];
var i = 0;

function Customer(name, img, txt) {
    this.name = name;
    this.img = img;
    this.txt = txt
}

function createCustomer(name, img, txt) {
    var fullImg = `img/img-${img}.jpg`;

    var customer = new Customer(name, fullImg, txt);
    arr.push(customer);
}
 
createCustomer("사과 1 이름", 0, "사과 1 설명");
createCustomer("사과 2 이름", 1, "사과 2 설명");
createCustomer("사과 3 이름", 2, "사과 3 설명");
createCustomer("사과 4 이름", 3, "사과 4 설명");

~~~

arr을 콘솔로그로 보면 객체형태로 값이 삽입된걸 알 수 있다

~~~javascript
console.log(arr);
~~~

![btnimg](assets/built/images/js/imgobject1.jpg)

<br>

<strong class="subtitle2_fontAwesome">질문</strong>

왜 함수를 거치는거야?&#160; 그냥 생성자함수를 이용해 인스턴스를 만들고 그 값을 넣으면 되는거아니야?

<strong>실험</strong>

~~~javascript
var twocustomer = new Customer(name, img, txt);

twocustomer("사과 1 이름", 0, "사과 1 설명");
twocustomer("사과 2 이름", 1, "사과 2 설명");
twocustomer("사과 3 이름", 2, "사과 3 설명");
twocustomer("사과 4 이름", 3, "사과 4 설명");

console.log(twocustomer);
~~~

결과는 twocustomer은 함수가 아니라고 뜬다. 

즉 생성자함수를 통해 만들어진 인스턴스는 함수가 아니고 그래서 값을 넣을 수가 없다.

<strong>질문2</strong>

그럼 생성자함수를 왜 이용한거야? 배열형태의 여러개 데이터를 간단하게 만들기 위해

~~~javascript
function createCustomer(name, img, txt) {
    var fullImg = `img/img-${img}.jpg`;
    var customer = new Customer(name, fullImg, txt);
   
   	console.log(customer);
}
 
createCustomer("사과 1 이름", 0, "사과 1 설명");
createCustomer("사과 2 이름", 1, "사과 2 설명");
createCustomer("사과 3 이름", 2, "사과 3 설명");
createCustomer("사과 4 이름", 3, "사과 4 설명");
~~~

중간에 콘솔로그로 찍어보면 각각 값이 들어가 있다.

![btnimg](assets/built/images/js/imgobject2.jpg)

arr에 넣지말고 그냥 활용하면 안돼? 함수밖에서 인스턴스를 찍어보면 정의되지 않았다고 뜬다

그래서 이 값을 배열형태로 된 변수에 넣어서 사용