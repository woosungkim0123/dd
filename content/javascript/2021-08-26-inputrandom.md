---
layout: post
current: post
cover:  assets/built/images/js-model.png
navigation: True
title: 인용문구 랜덤하게 출력
date: 2021-09-22 13:00
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascriptmodel.html %}

<br>

<strong class="subtitle_fontAwesome">인용문구 랜덤하게 출력</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

어떤 개체안에 인용문구가 들어가 있고 인용문구를 화면에 랜덤하게 출력시키는 기능

<br>

<strong class="subtitle2_fontAwesome">html 작업</strong>

~~~html
<body>
	<button type="button" id="btn">클릭</button>

	<h1 id="quote">인용문구가 들어갈 자리</h1>
	<span id="author">작가가 들어갈 자리</span>
</body>
~~~

<br>

<strong class="subtitle2_fontAwesome">id 불러오기</strong>

~~~javascript
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var btn = document.getElementById('btn');
~~~

<br>

<strong class="subtitle2_fontAwesome">인용문구를 배열안에 객체형태로 넣기</strong>

~~~javascript
var arr = [
	{
		quote: "아이들은 누구나 예술가이다.",
		author: "피카소"
	},
	{
		quote: "내면의 목소리는 들리지 않게 된다.",
		author: "반 고흐"
	},
	{
		quote: "완벽을 두려워하지 말라.",
		author: "달리"
	},
	{
		quote: "영감이 오는 것을 기다리고 있을 수는 없다.",
		author: "런던"
	},
	{
		quote: "의욕만 있으면 이런 노력만으로도 얼마든지 많으 ㄴ생각을 찾을 수 있다.",
		author: "수스"
	},
];
~~~

만약 여기서 배열 0번째 데이터에 특정데이터(quote)에 접근하고 싶으면?

배열 접근공식 + 개체 접근공식 결합

console.log(arr[0].quote);

<br>

<strong class="subtitle2_fontAwesome">완성</strong>

클릭시 배경화면 출력(이전글)과 같은 방식 
<ul><li><a href="./clickback">클릭시 배경화면 변경</a></li></ul>

정리하면 random을 사용하여 0 ~ 1 사이 실수 데이터를 랜덤으로 뽑아내고 거기에 배열의 데이터 숫자를 곱해준다. 

그 값을 floor를 사용하여 모두 내림처리하면 데이터좌표로 사용할 수 있는 숫자를 랜덤으로 뽑아낼 수가 있다. 

예제에서는 5개의 데이터가 있기 때문에 5를 곱하면 0 이상 5 미만 실수 데이터를 랜덤으로 뽑아내게 되고 내림처리하면 0 이상 5 미만 정수 데이터(0, 1, 2, 3, 4)를 랜덤으로 뽑아내게 된다

이 수치를 변수에 넣은 다음 데이터 좌표로 활용할 수 있다

textContent를 이용해서 자바스크립트에 텍스트 사용

그리고 이 모든 것을 버튼을 클릭시 이벤트 발생하도록 함수 안에 넣기

~~~javascript
btn.addEventListener('click', function(){

	var random = Math.floor(Math.random() * arr.length);

	quote.textContent = arr[random].quote;
	author.textContent = arr[random].author;
});
~~~

![inputrandom](assets/built/images/js/inputrandom.jpg)