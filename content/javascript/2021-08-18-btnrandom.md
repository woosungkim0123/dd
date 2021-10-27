---
layout: post
current: post
cover:  assets/built/images/js-model.png
navigation: True
title: 클릭시 배경색 랜덤 변경 1
date: 2021-09-17 17:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascriptmodel.html %}

<br>

<strong class="subtitle_fontAwesome">버튼 클릭시 배경색 랜덤으로 변경</strong>

<strong class="subtitle2_fontAwesome">html, &#160;css 작업</strong>

~~~html
<div id="color_bg">
	<button id="btn" type="button">클릭</button>
</div>
~~~

~~~css
#color_bg {
	width: 500px;
	height: 500px;
	background-color: black;
}

#btn {
	width: 100px;
	height: 50px;
	line-height: 50px;
	
	background-color: purple;
	color: #ffffff;

	font-size: 20px;
}
~~~

![js-6](assets/built/images/js-6-1.jpg)

<br>

<strong class="subtitle2_fontAwesome">색상 배열</strong>

랜덤으로 바뀔 5가지 색상 배열 만들기

~~~javascript
var colors = [
	'yellow', 
	'green', 
	'pink', 
	'#dc143c', 
	'rgba(123, 123, 123, 0.5)'
];
~~~

<br>

<strong class="subtitle2_fontAwesome">id 접근</strong>

자바스크립트로 id에 접근하는 방법은 document.getElementById 사용하는 것이다.

소괄호 안에 접근할 id값을 넣으면 된다

~~~javascript
var bg = document.getElementById('color_bg');
console.log(bg);
~~~

![js-6](assets/built/images/js-6-2.jpg)

~~~javascript
var btn = document.getElementById('btn');
console.log(btn);
~~~

이 구조도 잘보면 student.sum(10, 20) 구조랑 비슷함

정리하면 document도 객체이고 getElementById는 객체 안에 들어있는 함수 즉, 메서드이다

document라는 객체는 html 문서에 영향력을 발휘하는 객체이다

초반부에 말한 자바스크립트 3가지 영역 중에 지금까지 배운 이론적인 내용은 자바스크립트 코어이고 document 객체가 들어가는 내용은 클라이언트 측 자바스크립트이다.

document는 html문서를 제어하고 브라우저를 제어하는 역할을 담당

그러한 역할을 담당하는 자바스크립트 영역이 바로 클라이언트측 자바스크립트다

<br>

<strong class="subtitle2_fontAwesome">클릭</strong>

클릭했을때 라는 행동을 버튼 태그 안에 적용시키려면 addEventListener 메서드를 활용하는 방법이 있다

addEventListener는 크게 두가지 인수를 전달받게 된다

1. 문자열로 이벤트의 종류 : 첫번째에 들어가는 인수는 정해져있다. (click, mouseover...)

2. 함수 : 이름이 없는 함수를 익명함수라 한다

~~~javascript
btn.addEventListener('click', function(){
	console.log("Hello");
})
~~~

![js-6](assets/built/images/js-6-3.jpg)

메서드는 객체 안에 있는 함수를 말하는 것, &#160; addEventListener라는 메서드를 사용했으니 btn도 객체라고 할 수 있다

즉, getElementById로 가져오면 가져온 영역도 자바스크립트는 객체로 인식한다.

다시 내용으로 돌아와서 함수를 호출해야지만 실행이 된다 라고 이전 글에서 말했다. 그러나 이상하게 여기서는 호출을 하지 않았는데 결과가 도출 되었다.

그 이유는 클릭했을 때 '두번째에 있는 함수를 호출해라!' 라고 addEventListenenr에서 정의를 해둔 것이다. 그래서 호출하지 않아도 된다 (불필요하다)

클릭을 할때 addEventListener로 인해서 2번째 인수로 전달된 함수가 호출이 되면서 중갈호 안에 있는 코드가 실행되는것

<strong><span style="color:red">중요!</span>&#160;</strong> 특정조건하에서 호출기호 없이 호출이 되는 함수를 콜백함수 라고 한다.

html문서에 접근해서 id를 가져온 후 id를 클릭시 함수가 실행되는 단계까지 만든 상태이다

<br>

<strong class="subtitle2_fontAwesome">랜덤 숫자</strong>

1 ~ 6 숫자를 랜덤하게 가져오는 방법을 알아보자

어디에 사용할려고?&#160; 아까 만들어둔 색깔 배열들의 좌표값을 랜덤으로 뽑는 용도로 사용할 것이다

Math는 숫자를 제어할 때 사용되는 객체

Math 객체 안에 있는 random 메서드를 사용 <br> 
0 이상 1미만 안에 실수 중에서 랜덤으로 뽑아냄 (0은 되지만 1은 절대 될 수 없다) <br>
거기에 6을 곱하면 0 ~ 5.99999.. 안에서 랜덤으로 가져오게 된다

~~~javascript
console.log(Math.random());
console.log(Math.random() * 6);
~~~

![js-6](assets/built/images/js-6-4.jpg)

여기서 Math 객체 안에 있는 floor을 사용<br>
floor은 소수점 이하 숫자는 다 버릴 때 사용한다

~~~javascript
console.log(Math.floor(Math.random() * 6));
console.log(Math.floor(Math.random() * 6) + 1);
~~~

![js-6](assets/built/images/js-6-5.jpg)

<strong>정리</strong>

~~~javascript
// Math.random() : 0 이상 1 미만 실수형태  : 0 ~ 0.999999~~
// Math.random() * 6                      : 0 ~ 5.999999~~~
// Math.floor(Math.random() * 6)          : 0 ~ 5
// Math.floor(Math.random() * 6) + 1      : 1 ~ 6
~~~

이 공식을 활용하여 배열 안의 데이터를 랜덤으로 가져올 수 있다

0이상 4까지의 숫자 중에 랜덤으로 나온다 

~~~javascript
btn.addEventListener('click', function(){

	var random = Math.floor(Math.random() * 5)
	console.log(random);
})
~~~

![js-6](assets/built/images/js-6-6.jpg)

<br>

<strong class="subtitle2_fontAwesome">결합</strong>

아까 만든 콜백함수 안에 배열 랜덤 데이터를 출력하는 공식을 삽입 <br>
그리고 그 공식(random)과 배열 데이터에 접근하는 방법을 결합

~~~javascript
btn.addEventListener('click', function(){
	
	var random = Math.floor(Math.random() * 5)
	console.log(random);
	console.log(colors[random]);
})
~~~

![js-6](assets/built/images/js-6-7.jpg)

<br>

<strong class="subtitle2_fontAwesome">css 적용</strong>

배경색을 적용할 영역(처음에 불러온 id를 넣어둔 변수 : bg)을 지정

bg 객체 안에 있는 style property에 접근해야 한다.

style에 접근해서 안에 있는 background에 color[random]을 적용

~~~javascript
btn.addEventListener('click', function(){
	
	var random = Math.floor(Math.random() * 5)
    
	bg.style.backgroundColor = colors[random];
})
~~~

![js-6](assets/built/images/js-6-8.jpg)

<strong>표기</strong>

css에서 background-color 표현되면 여기서는 backgroundColor로 표현

하이픈을 사용할 수 있지만 하이픈이 빼기로 처리되기때문에 그 문제를 해결하기위해 Camel케이스로 사용

~~~javascript
element.style.getPropertyValue("background-color");
element.style.setProperty("background-color", "red");
element.style.setPropertyValue("background-color", "red");

//Camel케이스
element.style.backgroundColor = "red";
element.style["backgroundColor"] = "red";
~~~