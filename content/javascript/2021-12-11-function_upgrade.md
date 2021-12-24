---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: default parameter, arguments, Rest
date: 2021-12-11 20:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include tableJs1-variable.html %}

<br>

<strong class="subtitle_fontAwesome">자바스크립트 함수</strong>

<strong class="subtitle2_fontAwesome">특징</strong>

~~~javascript
function 더하기(a, b) {
	console.log(a + b)
}
더하기(1,2); // 3출력

function 더하기(a, b) {
	console.log(a)
}
더하기(1); // 1출력
~~~

JS는 파라미터가 2개 들어가는 함수인데 1개를 사용해도 에러가 안남

장점이자 단점

<br>

<strong class="subtitle2_fontAwesome">default parameter</strong>

~~~javascript
function 더하기(a, b) {
	console.log(a + b)
}
더하기(1); 
~~~

기존에는 두번째 파라미터를 집어넣지 않으면 기본적으로 설정해줄 값을 조건문을 통해 표기할 수 있었다.

ES6에서 쉬운 새로운 방법을 제공

파라미터 안에 등호나 수식을 입력할 수 있음

~~~javascript
function 더하기(a, b = 10) {
	console.log(a + b)
}
더하기(1); // 11출력
더하기(1,2); // 3출력 
더하기() // NaN출력(숫자가 아닌것에 숫자연산하면 뜸)
~~~

b에 아무값도 들어오지 않았을때 10을 지정해주세요

~~~javascript
function 더하기(a, b = 2 * a) {
	console.log(a + b)
}
더하기(1); // 3 출력

~~~

파라미터를 이용한 수학연산도 가능, 심지어 함수도 가능

~~~javascript
function 임시함수(){
	return 10 // return : 함수를 실행하고 실행한 자리에 10을 남겨주세요
}
임시함수(); // 10이 남음

function 더하기(a, b = 임시함수()) {
	console.log(a + b)
}
더하기(1); // 11 출력
~~~

default 파라미터가 발동되어서 임시함수가 실행되서 10이라는 값을 b에 남겨줌

<br>

<strong class="subtitle2_fontAwesome">arguments</strong>

Parameter : 매개변수, 함수와 메서드 입력 변수(Variable) 명
Argument	: 인자, 함수와 메서드의 입력 값(Value)

~~~javascript
function 함수(a,b,c) { // <- Parameter
	console.log(a,b,c); 
}
함수(1,2,3); // <- Argument
~~~

~~~javascript
function 함수(a,b,c) { 
	console.log(a,b,c); // 1 2 3 출력
	console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 } 출력
	console.log(arguments[0]); // 1 출력 (첫번째 파라미터)
}
함수(1,2,3);
~~~

arguments는 함수의 파라미터를 한꺼번에 다루고 싶을때 자바스크립트 특정 키워드

Array와 비슷하지만 Array가 아니다.

arguments는 함수에 들어온 파라미터를 전부 Array로 감싸주는 변수 같은것이라고 생각하면 된다.

~~~javascript
// 파라미터 값을 전부다 콘솔창에 출력하는 함수
function 함수(a,b,c) { 

	// 확장성 없는 코드
	console.log(a) // 1 출력
	console.log(b) // 2 출력
	console.log(c) // 3 출력

	// 확장성 있는 코드
	for (let i = 0; i < arguments.length; i++){
     console.log(arguments[i]) // 1 2 3 출력
   }

}
함수(1,2,3);
~~~

<br>

<strong class="subtitle2_fontAwesome">arguments 허점</strong>

arguments는 옛날 문법, 허점이 하나있음

~~~javascript
function 함수(임시,a,b,c) { 
	for (let i = 0; i < arguments.length; i++){
     console.log(arguments[i]) // 1 2 3 출력
   }
}
~~~

새로운 파라미터를 추가하고 콘솔창 출력은 임시는 빼고 출력이 되도록 하고싶을땐 기능을 수정을 해야함

arguments는 자료를 쪼개고 이런게 귀찮음

arguments보다 조금더 간단하게 쓸 수 있는 ES6 문법 Rest파라미터

<br>

<strong class="subtitle2_fontAwesome">Rest 파라미터</strong>

~~~javascript
function 함수2(...파라미터들){
	console.log(파라미터들) // [1, 2, 3, 4, 5, 6, 7] 출력
}
함수2(1,2,3,4,5,6,7) 
~~~

spread operator를 함수 소괄호 안쪽에 파라미터로 넣으면 rest파라미터의 의미를 가짐

출력해보면 파라미터들 전부다 대갈호 안에 담은 형태로 나온다

파라미터에 ...을 붙이면 여기에 오는 모든 파라미터를 array로 싸매겠습니다 라는 의미

<br>

<strong class="subtitle2_fontAwesome">arguments 차이</strong>

~~~javascript
function 함수2(a,b, ...파라미터들){
	console.log(파라미터들) // [3, 4, 5, 6, 7] 출력
}
함수2(1,2,3,4,5,6,7) 
~~~

a,b에 담고 그 뒤에 오는 파라미터들은 array에 담아주세요 라고 쓸 수 있음

rest와 spread를 생긴게 같아서 헷갈릴 수도 있음

함수의 파라미터 자리에 ...은 무조건 rest parameter

나머지는 모두 spread operator

arguments로 만든 함수를 요즘 스타일로 만들어보자

~~~javascript
// 파라미터 값을 전부다 콘솔창에 출력하는 함수
function 함수2(...rest) { 
	for (let i = 0; i < rest.length; i++){
     console.log(rest[i]) // 1 2 3 출력
   }
}
함수2(1,2,3);
~~~

arguments는 파라미터에 몇개 들어갈건지 선언해줘야하지만 rest는 몇개 들어올지 미리 지정안해줘도 됨

<br>

<strong class="subtitle2_fontAwesome">rest 주의점</strong>

~~~javascript
// 에러발생
function 함수2(...파라미터들, a){
}
함수2(1,2,3,4,5,6,7) 
~~~

rest의 뒤에 나오는 모든 파라미터라는 의미임

rest파라미터를 가장 뒤에 써야함

당연하지만 rest파라미터를 2개 이상 사용할 수 없다.

~~~javascript
// 에러발생
function 함수2(...파라미터들, ...파라미터들2){
}
함수2(1,2,3,4,5,6,7) 
~~~

<br>

<strong class="subtitle2_fontAwesome">응용문제</strong>

~~~javascript
// 오브젝트 활용법
let 결과 = { a: 2, c: 1, b: 3 }
console.log(결과['a']) // 2 출력
console.log(결과['d']) // undefined 출력
결과['d'] = 1;
console.log(결과) // { a: 2, c: 1, b: 3, d: 1 } 출력
~~~

~~~javascript
// 알파벳들의 출현 갯수를 세어주는 함수
function 글자세기(글) {
   let 결과= {};
      [...글].forEach(function(a){
         if(결과[a] > 0 ){ 결과[a]++ } else { 결과[a] = 1 }
      });
   console.log(결과) // { a: 2, c: 1, b: 3 } 출력
}
글자세기('aacbbb')
~~~