---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: 데이터타입2 - 참조타입
date: 2021-09-16 20:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascript.html %}

<br>

<strong class="subtitle_fontAwesome">참조타입</strong>

<strong class="subtitle2_fontAwesome">dynamically typed language</strong>

c나 자바는 statically typed language로 변수를 선언할때 어떤 타입인지 결정해서 타입을 같이 선언한다.

자바스크립트는 dynamically typed language로 변수 선언시 어떤 타입인지 선언하지않고 프로그램이 동작할때(Runtime) 할당된 값에 따라서 타입이 변경될 수 있다

dynamically typed language는 유연하게 쓸 수 있는 장점이 있지만 다수의 엔지니어나 큰 프로젝트에서는 이런 dynamically typed language 때문에 문제를 겪는 경우가 많음

~~~javascript
let text = 'hello'
console.log(`value: ${text}, type : ${typeof text}`) // value: hello, type : string

text = 1
console.log(`value: ${text}, type : ${typeof text}`) // value: 1, type : number

// dynamically typed language가 겪는 문제

// 문자열에 숫자를 더하면?
// 문자열에 더하기가 있으니 뒤에 숫자를 문자열로 변환해서 연산한다
text = '7' + 5; 
console.log(`value: ${text}, type : ${typeof text}`) // value: 75, type : string

// 문자열과 문자열을 나누면?
// 숫자들을 나눌 수 있는 연산자에 string 안에 값이 숫자니까 숫자로 변환시켜버림
text = '8' / '2'; 
console.log(`value: ${text}, type : ${typeof text}`) // value: 4, type : number

// text가 첫번째로 정의한 hello(string)로 생각한 개발자가 첫번째 문자열을 사용할려고 할때
console.log(text.charAt(0)) // 에러발생
~~~

자바스크립트는 런타임에서 타입이 정해지기때문에 에러가 런타임으로 발생하는 경우가 굉장히 많음

이러한 단점 극복을 위해 TypeScript 등장

TS는 자바스크립트 위에 타입이 올려진 언어
 
<br>

<strong class="subtitle2_fontAwesome">함수(Function)</strong>

function 키워드 사용, &#160;sum이 우리가 만든 기능의 이름(함수명)

중갈호{} 안에는 자바스크립트 코드가 들어간다.

이러한 단계를 '함수를 선언했다' 라고 한다. (함수선언)

~~~javascript
function sum() {
	console.log("Hello")
	console.log(10 + 10);
}
~~~

결과를 보면 아무것도 출력되지 않음

![js-4](assets/built/images/js-4-1.jpg)

기능을 만들긴 했지만 동작시키지는 않았음. 즉 스위치버튼을 on으로 하지않은 상태

~~~javascript
sum();
~~~

![js-4](assets/built/images/js-4-2.jpg)

함수명 + 소괄호() &#160;=&#160; 함수를 키는행위

만들어 놓은 함수의 기능을 키는 행위를 '함수를 호출했다' 라고 한다. (함수호출)

기능을 만든상태를 함수선언,&#160; 함수의 스위치를 키는 행위를 함수호출

선언해놓은 함수는 얼마든지 함수호출이 가능하다.

<strong>매개변수(parameter), 인수(argument)</strong>

~~~javascript
function sum(num1, num2) {
	console.log(num1 + num2);
}
 
sum(10, 20);
sum(100, 50);
~~~

![js-4](assets/built/images/js-4-3.jpg)

전달하는 두개의 숫자(10,&#160; 20)을 함수가 받아주어야 하는데 이때 함수에 숫자가 들어갈 자리가 있어야한다.&#160; 함수명 소괄호 안쪽에다가 자리를 마련해줘야함. &#160;10은 num1, 20은 num2로 들어가게 된다.

여기서 num1과 num2를 '매개변수' 라고 한다.

전달하는 숫자 10, 20을 '인수' 라고 한다.

인수 : 호출시 전달되는 값들 (옛날식 표기법으로 '인자' 라고도 함)

<strong>만약 인수를 매개변수보다 적게 넣는다면 어떻게 될까?</strong>

~~~javascript
function area(width, height) {
	console.log(width);
	console.log(height);
}

area(10);
~~~

![js-4](assets/built/images/js-4-5.jpg)

width는 우리가 전달한 인수가 출력이 되고 height는 undefined가 출력이 된다.

매개변수를 만들고 인수를 전달할 때 누락된 매개변수가 있으면 그 매개변수는 undefined가 할당되어 있는 상태라 볼 수 있다.

우리가 변수를 선언만 한 상태에서는 undefined가 기본값(default)로 들어간다고 했는데 매개변수도 마찬가지로 undefined가 기본값(default)으로 들어가 있다.

~~~javascript
function area(width, height) {
	var result = width * height;
	console.log(result);
}

area(10);
~~~

![js-4](assets/built/images/js-4-4.jpg)

NaN값이 출력된 이유도 결국 10과 undefined를 곱한 것이기 때문에,&#160; '어떠한 값이 있긴하지만 그게 숫자는 아니다' 라는 오류를 출력시킨 것이다.

함수를 가지고 기능을 만들 때는 만들어놓은 매개변수와 인수가 쌍을 이루고 있어야한다. &#160;(매개변수가 5개면 인수도 5개)

자바스크립트의 모든 데이터타입은 매개변수로 전달할 수 있다.

<strong>return</strong>

함수와 결합되서 사용되는 키워드

콘솔로그처럼 출력시키고 끝이 아니라 함수가 호출되었을때 호출된 시점에 내부적으로 어떠한 값을 가지고 있는 상태

~~~javascript
function sum(num1, num2) {
	return num1 + num2;
}

sum(10,20);
~~~

아무런 값이 출력되지 않음

함수호출 자체를 특정변수에 넣어보면 값이 나옴

~~~javascript
var Result = sum(10,20);
console.log(Result);
~~~

![js-4](assets/built/images/js-4-6.jpg)

함수에 return 사용하게되면 함수가 호출된 시점에 return 안에 들어가있는 값(30)을 함수호출이 가지게 된다

여기에선 이 호출값을 Result 안에다가 넣어서 출력시킨 것이다

<strong>return 활용</strong>

다른 변수에 값을 전달할 때 or return으로 전달받은 값을 가지고 어떠한 새로운 공식에 대입을 할때 활용

예제1) area 넓이를 구하는 함수를 만들어보자

~~~javascript
function area(hor, ver) {
	return hor * ver;
}

area(10, 20); //200
console.log(area(10, 20));
~~~

![js-4](assets/built/images/js-4-7.jpg)

출력만 안될뿐이지 200이라는 값을 가지고 있다. &#160;콘솔로그로 살펴보면 200이라는 값을 확인가능

예제2) 부피 구하기

~~~javascript
function area(hor, ver) {
	return hor * ver;
}

var volume = area(10, 20) * 100;
console.log(volume);
~~~

![js-4](assets/built/images/js-4-8.jpg)

<strong>비유로 이해하는 return 특징</strong>

![js-4](assets/built/images/js-4-9.jpg)

커피머신 자체를 '함수'로 보고 커피머신을 실행시키는 것을 '함수호출'이라 보자.

커피를 만들기 위해서 커피머신(함수)의 투입구에 원두를 넣어야 한다.

원두를 넣는 투입구를 매개변수, 원두 자체는 인수

커피머신(함수)의 투입구(매개변수)를 통해서 전달된 원두(인수)는 커피머신(함수)이 실행되었을때 갈리고 물과 섞이면서(중갈호 안) 향이 좋은 커피가 탄생하게 된다.

만들어진 커피를 return문으로 가져온다고 보면된다. 출력된 결과물 자체가 return

return 으로 반환된 커피는 다른사람에게 전달 할 수 있다.

return을 사용해서 함수를 호출했을때 다른 변수에 전달하거나 다른 값과 결합해서 새로운 결과를 만들어낼 수 있다.

<br>

<strong class="subtitle2_fontAwesome">배열 (Array)</strong>

다양한 과일정보를 담고 있는 변수가 있다. 근데 종류가 너무 많아서 따로 만들면 비효율적

~~~javascript
var banana = "바나나";
var apple = "사과";
var melon = "멜론";
~~~

배열을 사용하게 되면 유사한 성격을 지닌 데이터를 하나의 변수 안에 담아낼 수 있다. (일종의 바구니)

~~~javascript
var fruit = ["바나나", "사과", "멜론"];

console.log(fruit);
~~~

![js-4](assets/built/images/js-4-10.jpg)

0, 1, 2는 배열 안에 있는 데이터(바나나, 사과, 멜론)의 데이터 좌표값(index)이다.

length는 배열 안에 들어가있는 데이터 갯수

배열 안에는 모든 데이터타입이 들어갈 수 있다.

<strong>index</strong>

index를 활용하여 배열 안에 특정 데이터에 접근 할 수 있다.

~~~javascript
console.log(fruit[2]);
console.log(fruit[0]);
~~~

![js-4](assets/built/images/js-4-11.jpg)

<strong><span style="color:red">중요!</span>&#160;</strong> 특정 데이터에 접근 할 수 있다면 특정데이터를 변경하는 것도 가능하다

배열뿐만 아니라 자바스크립트의 변수나 객체 모든 영역에 다 해당하는 개념

멜론에 접근하여 수박으로 데이터 변경

~~~javascript
fruit[2] = "수박"
console.log(fruit);
~~~

![js-4](assets/built/images/js-4-12.jpg)

<strong>index 주의점</strong>

1. 배열 안에 있는 데이터는 가능하면 동일한 데이터 타입을 가지고 있어야한다.

~~~javascript
var num = [10, 20, 30, "Hello World"];
~~~

숫자라는 배열에 문자열이 끼여있다. &#160;나중에 배열을 재활용할때 어려울수가 있다

2. 동일한 성격을 가지고 있는 데이터로 배열안을 채워주는 것이 좋다

중간에 생뚱맞은 성격을 가진 데이터가 들어가면 별도로 처리하는데 불필요한 리소스가 들게된다

~~~javascript
var fruit = ["사과", "배", "바나나", "양상추"];
~~~

<strong>배열 안에 있는 배열 데이터에 접근하는법</strong>

배열 인덱스는 0번부터 시작한다

~~~javascript
var score = [[10, 20, 30], [100, 200, 300]];

console.log(score);
console.log(score[1]);
console.log(score[1][2]);
~~~

![js-4](assets/built/images/js-4-13.jpg)

score 배열의 1번째 배열, &#160; 1번째 배열의 2번째 데이터

<br>

<strong class="subtitle2_fontAwesome">객체 (Object)</strong>

여러개의 데이터를 하나의 변수 안에 전부다 넣을 때 사용

예를 들어 학생의 구성요소가 이름, 나이, skills 이라고 볼 때 이러한 항목들을 담아내는 영역이 객체라고 할 수있다.

~~~javascript
const student = { name: "Woosung", age: 30, skills: ["JS", "HTML", "CSS"]}
student.age = 21
console.log(student.age) // 21출력
~~~

student가 가리키고 있는 메모리의 포인터는 const로 잠겨있어서 다른 object로 할당이 불가하지만 student 안에 name과 age라는 변수가 존재함

student.age 이런식으로 각각 포인트가 가리키고 있는 메모리에 다른 값으로 할당이 가능함

![js-4](assets/built/images/js/datatype1.JPG)


배열과 유사하나 위의 배열 예제가 index로 0, 1, 2가 들어가 있다면 예제의 객체는 name, skills가 들어있다. (알파벳 순으로 출력됨)

배열에 비유하자면 나이, 이름, 성별을 데이터가 들어가있는 좌표


30, Woosung을 데이터, 즉 좌표에 해당하는 데이터 라고 한다

age, name, skills를 key라고 하고 key값에 대응하는 30, Woosung을 value라고 한다.

key와 value를 합쳐서 property라고 한다

//수정필요

객체 안에 property가 뭐냐? 물으면 name, age, skills 이렇게 대답하는게 일반적



<strong>key에 접근하는 방법</strong>

두가지 방법 모두 기억(둘다 필요)

1. 변수명 뒤에 접근하고자 하는 데이터의 key값을 입력

~~~javascript
console.log(student.name);
~~~

2. [] 대갈호를 사용해서 문자열로 key값을 넣어주기

~~~javascript
console.log(student['name']);
~~~

<strong>value에 접근하는 방법</strong>

일단 key('skills')에 접근해 배열을 가지고 오기

해당 배열에 원하는 value('JS')의 좌표값을 기입

~~~javascript
console.log(student.skills[0]);
~~~

객체에 접근하는 방법과 배열 안에 접근하는 방법을 결합한 것이다.

<strong><span style="color:red">중요!</span>&#160;</strong> 
특정 데이터에 접근 할 수 있다면 특정데이터를 변경하는 것도 가능하다

배열에서도 말했지만 객체도 데이터에 접근할 수 있으면 값을 변경할 수 있다

새로운 데이터를 추가하고 싶을때 새롭게 추가할 key와 그에 대응하는 value를 다이렉트로 기입

~~~javascript
student.age = 100;
student.gender = "남자";

console.log(student);
~~~

![js-4](assets/built/images/js-4-15.jpg)

<strong>객체 안 함수</strong>

객체도 배열과 마찬가지로 모든 데이터타입을 넣을 수 있다

객체 안에 함수를 만들 때 함수명을 기입하지 않아도 된다

함수명 없이 함수를 만들었고 sum이라는 key값 자체가 함수명을 대체한다 라고 생각하기

~~~javascript
var student = {
	name: "Woosung",
	age: 30,
	skills: ["자바스크립트", "HTML", "CSS"],

	sum: function (num1, num2) {
		return num1 + num2;
	}
}
~~~

이렇게 객체 안에 만들어진 함수를 활용하는 방법은 객체를 선택하고 해당 함수를 호출하면 된다

~~~javascript
var result = student.sum(10, 20);

console.log(result);
~~~

student 객체 안에 있는 sum함수의 매개변수에 10, 20을 전달하고 함수에서 만들어진 값을 변수안에 넣어서 출력시킨것

객체 안 함수와 객체 밖 함수를 구분할 필요가 있다

객체 안에서 만들어진 함수를 '메서드' 라고 부르고 밖에 만들어진 함수를 그대로 '함수'라고 부른다

우리가 계속 사용해왔던 console.log를 예를 들 수 있다

지금까지 우리는 console 이라고 하는 객체 안에 있는 log 메서드를 사용한 것이다.

위에 예도 마찬가지로 student 객체 안에 있는 sum 메서드를 사용한 것


console이라는 것도 자바스크립트가 기본적으로 만들어놓은 객체가 있는것
콘솔 객체안에있는 메서드를 가져다 쓴것