---
layout: post
current: post
cover:  assets/built/images/js-model.png
navigation: True
title: input 값이 화면에 출력
date: 2021-09-23 13:00
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascriptmodel.html %}

<br>

<strong class="subtitle_fontAwesome">input값이 화면에 출력</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

input태그를 사용해서 사용자가 입력한 텍스트 정보를 화면에 출력하는 기능

글자를 입력했을때 input창에 입력한 글자가 없어지도록 하고 입력된 글자는 지정된 노출 영역에 노출되게 할 것임

글자가 있으면 글자출력, 글자가 없으면 input값을 입력하라는 에러문구출력

분기처리방식을 사용

<br>

<strong class="subtitle2_fontAwesome">html, css 작업</strong>

~~~html
<!-- html -->
<form id="form">
	<input type="text" id="msg">
	<button type="submit" id="btn">입력</button>
</form>

<h1 class="feedback">Input 값을 입력하세요</h1>
<h2 id="txt">입력된 텍스트가 출력되는 영역</h2>
~~~

show : block 해놓고 만약에 아무런 글자를 입력하지않은 상태에 입력을 누르면 feedback이라는 영역에 show 클래스가 들어가게 해줄거임

2초정도 시간이 지나면 자동으로 show 클래스가 영역에서 삭제가 되면서 경고 문구가 사라지게 만드는 기능도 만들어 줄 것임

~~~css
.feedback {
	display: none;
	color: red;
}

.show {
	display: block;
}
~~~

<br>

<strong class="subtitle2_fontAwesome">id, class 가져오기</strong>

자바스크립트에서 css처럼 클래스를 접근할 수 있다.

queryselector 태그로 접근하면 id는 #태그명,&#160; class는 .태그명

~~~javascript
var form = document.getElementById('form');
var input = document.getElementById('msg');
var feedback = document.querySelector('.feedback');
var txt = document.getElementById('txt');
~~~

<br>

<strong class="subtitle2_fontAwesome">버튼 클릭 이벤트</strong>

이전 예제까지는 버튼 태그를 사용했으나 이번에는 form 태그를 사용해보자

매번 첫번째 인수로 click을 넣었지만 form 태그는 submit을 넣음

~~~javascript
form.addEventListener('submit', function() {
	console.log('제출');
})
~~~

form 안에 submit이라는 타입을 가지고 있으면 기능이 동작이 된다

버튼을 눌러보면 제출이 뜨지만 금방 사라진다

form&#160; -&#160; submit 이벤트를 추가하게되면 동작이됨과 동시에 브라우저가 새로고침된다.&#160; (제출이 떳지만 새로고침이 되어서 이전상태로 돌아가게된것)

새로고침이 되는 이유는 form태그 자체에서 submit이라는 이벤트가 발생이 되면 form태그가 가지고있는 고유기능 '브라우저를 새로고침 한다'가 실행되기 때문

<br>

<strong class="subtitle2_fontAwesome">태그 고유기능 막기</strong>

두번째 인수로 전달한 함수에다가 e라는 매개변수를 작성

preventDefault (기본값을 막는다) 사용

form의 고유기능이 정지가 되고 제출이 사라지지않고 뜸

~~~javascript
form.addEventListener('submit', function(e) {

	e.preventDefault();
	console.log('제출');

})
~~~

![input](assets/built/images/js/input-1.jpg)

e를 이벤트객체라고 하는데 콘솔로그로 e를 찍어보면

![input](assets/built/images/js/input-2.jpg)

이벤트객체(e 매개변수) 안에 우리가 선택한 이벤트를 붙힌 태그(form)와 submit에 해당하는 다양한 이벤트의 종류들이 있다

그 중에서 우리는 preventdefault라는 메서드를 가져다 사용한것

<strong>무조건 매개변수로 e?</strong>

꼭 e가 아니더라도 된다. 

그러나 코드는 자기 혼자만 보는 것이 아닌 다른 사람에게도 공유하기 때문에 통상적으로 쓰이는 e를 사용

<br>

<strong class="subtitle2_fontAwesome">input태그 가져오기</strong>

가져오는 방법에는 두가지가 있다

첫번째는 기존과 마찬가지로 id로 불러와서 변수에 넣는 방법

~~~javascript
var msg = document.getElementById('msg').value;
~~~

두번째는 input태그에 작성된 글자를 가져오고 싶을때 value property 사용

input에 작성된 글자를 가져와서 msg라는 변수에 담아낸것

~~~javascript
var msg = input.value;
~~~

두가지 모두 같은 결과, &#160;클릭을 할때마다 매번 msg안에 있는 값을 가져오게된다

~~~javascript
form.addEventListener('submit', function(e) {

	e.preventDefault();
	var msg = input.value;

	console.log(msg);
		
})
~~~

![input](assets/built/images/js/input-3.jpg)

<br>

<strong class="subtitle2_fontAwesome">분기처리</strong>

input 안에 값이 있는 경우와 없는 경우로 나눠줘야함 - if문 활용

msg가 값이 있으면 if문 중갈호 실행, 값이 없으면 else문이 실행

if문 중갈호안에 textcontent를 사용하면 글자가 노출된다

~~~javascript
form.addEventListener('submit', function(e) {

	e.preventDefault();
	var msg = input.value;
	
	if(msg) {
		txt.textContent = msg;
	} else {

	}
})
~~~

![input](assets/built/images/js/input-5.jpg)

input 안에 글자가 그대로 남아있음

입력버튼을 누를때 입력값을 초기화 시키려면? reset 사용

~~~javascript
form.addEventListener('submit', function(e) {

	e.preventDefault();
	var msg = input.value;
	
	if(msg) {
		txt.textContent = msg;

		form.reset();
	} else {

	}
})
~~~

입력을 누르면 입력된 값이 사라짐

reset 메서드는 여러개의 input 태그가 있을때도 작성된 글자를 한꺼번에 초기화 시켜준다 &#160;(여기서는 form 태그 안에 있는 글자를 초기화)

<br>

<strong class="subtitle2_fontAwesome">에러문구</strong>

클래스를 추가하는 방식 사용

특정영역에 클래스를 추가할 때는 classlist property를 사용

class가 feeback 하나밖에 없는데 show라는 클래스가 추가되면서 에러문구가 출력됨

~~~javascript
feedback.classList.add('show');
~~~

![input](assets/built/images/js/input-6.jpg)



<br>

<strong class="subtitle2_fontAwesome">일정시간 지나면 에러문구 사라지게하기</strong>

일정시간 후 show라는 클래스가 사라지게 하면된다

자바스크립트에서 기본적으로 제공하는 setTimeout이라는 메서드를 사용

두가지의 인수를 가지는데 첫번째는 익명함수(콜백함수), 두번째는 시간

최초상태에서는 글자가 나오지않다가 2초후에 나옴

~~~javascript
setTimeout(function() {
	console.log("2초 후에 실행")
}, 2000);
~~~

![input](assets/built/images/js/input-8.jpg)

<strong>setTimeout을 이용해 일정시간 지나면 show 클래스가 사라지게 하기</strong>

두번째 인수로 2000이라는 시간을 넣으면 2초가 되었을 때 첫번째 인수로 전달한 함수가 자동으로 호출된다

첫번째 인수의 함수 안에 remove.삭제할 클래스 전달

클릭시 show가 나타나게 되고 2초뒤 화면에서 사라짐

~~~javascript
form.addEventListener('submit', function(e) {

	e.preventDefault();
	
	var msg = input.value;

	if(msg) {
		
		txt.textContent = msg;
		form.reset();

	} else {
	
		feedback.classList.add('show');
	
   		setTimeout(function() {
			feedback.classList.remove('show');
		}, 2000);
	}
})
~~~