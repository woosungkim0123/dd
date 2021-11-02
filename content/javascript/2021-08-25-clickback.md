---
layout: post
current: post
cover:  assets/built/images/js-model.png
navigation: True
title: 클릭시 헥사코드 랜덤 생성
date: 2021-09-22 10:58
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascriptmodel.html %}

<br>

<strong class="subtitle_fontAwesome">클릭시 배경화면 변경</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

흰색 -> 다른색,&#160; 바뀐 색의 hexcode의 값이 같이 노출

<strong>헥사코드의 구조</strong>

예시 : #000fff;

숫자 : 0 ~ 9,&#160; 알파벳 : a ~ f, &#160;#을 제외하고 6글자 조합(숫자와 알파벳 조합)

<strong>코드구상</strong>

#을 기준으로해서 배열에서 데이터를 뽑음 (만약 0이면 # + 0 = #0)

#0을 기준으로 만약 f를 뽑았으면 #0 + f = #0f

이런 방식으로 계속 글자를 완성시킴,&#160; 총7개 이후로 더이상 데이터를 가져오면 안됨

~~~html
# + 0 = #0;
#0 + f = #0f;
#0f + a = #0fa;
#0fa + b = #0fab;
#0fab + c = #0fabc;
#0fabc + d = #0fabcd;
~~~

<br>

<strong class="subtitle2_fontAwesome">html 작업</strong>

~~~html
<body>
	<h1>HEX Color : <span id="hex"></span></h1>
	<button id="btn" type="button">클릭</button>
</body>
~~~

<br>

<strong class="subtitle2_fontAwesome">css id 불러오기</strong>

자바스크립트에서 사용할 수 있도록 css id를 불러와서 변수에 넣기

~~~javascript
var hex = document.getElementById("hex");
var btn = document.getElementById("btn");
~~~

<br>

<strong class="subtitle2_fontAwesome">버튼 클릭시 이벤트 발생</strong>

변수 btn을 클릭시 함수실행

함수 안에다 코드를 클릭시 배경화면이 바뀌는 코드를 짜면된다

~~~javascript
btn.addEventListener('click', function() {

});
~~~

<br>

<strong class="subtitle2_fontAwesome">배열 만들기</strong>

헥사코드의 기본이 될 배열을 하나 만든다 (0 ~ 9, &#160; a ~ f)

color라는 변수를 만들어서 기본값으로 #을 넣어줌

~~~javascript
btn.addEventListener('click', function() {

	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	var color = '#';

});
~~~

<br>

<strong class="subtitle2_fontAwesome">반복문을 이용한 랜덤뽑기</strong>

~~~javascript
btn.addEventListener('click', function() {
	
	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	var color = '#';

	for(var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * arr.length);
		color += arr[random];
	}

});
~~~

변수 i에 0을 전달,&#160; 6미만까지 반복(총 6회),&#160; i는 1씩 증가

Math.random은 0 ~ 1 미만 숫자 중 랜덤으로 뽑아낸다

arr.length를 곱했으니 그 값은 16 미만 실수값들 중 하나가 될 것이다.

floor로 소수점 이하를 버려주면 그 값은 0 ~ 15 값 중 하나가 될 것이다.

이 랜덤 값을 arr 배열의 데이터 좌표로 사용하면 arr 배열에 있는 데이터 중 좌표에 맞는 값이 나온다.

반복문에 의해 이 과정을 6번 반복하게 되고 반복될때마다 += 에 의해 color값 더해지고 들어가게된다

결과적으로 # + arr 배열 중 6개의 랜덤 데이터

<strong>참고</strong>

for문 안쪽에서 console.log를 하면 반복문이 돌때마다 콘솔로그로 찍어내고 밖에서 console.log하면 완성본만 나타나게 된다

~~~javascript
btn.addEventListener('click', function() {

	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	var color = '#';

	for(var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * arr.length);
		color += arr[random];

		// 안 : console.log(color);
	}

	// 밖 : console.log(color);
    
});
~~~

<br>

<strong class="subtitle2_fontAwesome">배경바꾸기, 글자 표시</strong>

body태그에 style을 사용하여 배경화면에 color변수를 적용(반복문으로 뽑아낸 헥사코드)

자바스크립트에서는 textContent를 사용하여 글자를 삽입할 수 있다

아까 불러온 hex변수(span))에 textContent를 사용하여 글자 삽입하기

~~~javascript
btn.addEventListener('click', function() {

	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	var color = '#';

	for(var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * arr.length);
		color += arr[random];        
        
	}

	document.body.style.backgroundColor = color;
	hex.textContent = color;

});
~~~

![clickback](assets/built/images/js/clickback.jpg)

<br>

<strong class="subtitle2_fontAwesome">추가 응용</strong>

두번째 인수에 익명함수 대신 만들어둔 함수를 넣을 수 있다

클릭했을 때 두번째 인수로 전달된 createColor라는 함수를 호출해라

여기서 함수명만 들어가있고 호출기호는 없다( 호출기호 : 함수명() )

~~~javascript
btn.addEventListener('click', createColor);
	
function createColor() {

	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	var color = '#';

	for(var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * arr.length);
		color += arr[random];
        
	}
    
	document.body.style.backgroundColor = color;
	hex.textContent = color;
}
~~~

두번째 인수로 익명함수를 전달하여 다이렉트로 기능을 만들 수도 있고,&#160; 기능 자체를 함수이름으로 작성해서 지금과 같이 두번째 인수로 함수이름을 전달하는 방식으로도 기능을 만들 수 있다.

createColor도 호출기호도 없고 클릭시 함수를 호출하기 때문에 콜백함수이다