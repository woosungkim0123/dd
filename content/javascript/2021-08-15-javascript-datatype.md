---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: 데이터타입1 - 원시타입
date: 2021-12-9 9:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascript.html %}

<br>

<strong class="subtitle_fontAwesome">원시타입</strong>

<strong class="subtitle2_fontAwesome">문자열(String)</strong>

~~~javascript
const msg1 = "Hello World"
const msg2 = 'Welcome'
~~~

<strong>축약어 표기 두가지 방법</strong>

""(큰따옴표) 안에 '(작은따옴표) 사용

''(작은따옴표) 안에 특수문자(역슬래쉬) 사용후 '(작은따옴표)

~~~javascript
const msg4 = "She's girl";
const msg5 = 'She\'s girl';
~~~

<br>

<strong class="subtitle2_fontAwesome">숫자 (Number)</strong>

~~~javascript
const num1 = 10;
const num2 = -10;
const num3 = 3.14;
const num4 = -3.14;
~~~

<strong>연산자</strong>

더하기, 빼기, 곱하기, 나누기, 나머지값

<strong>문자열 연산자</strong>

문자열 안에 들어가있는 숫자는 사칙연산 일부작업이 가능(덧셈을 제외하고)

문자열에서 덧셈은 글자를 이어붙이기 때문

~~~javascript
//숫자 사칙연산

const a = 20;
const b = 10;

console.log(a + b); // 30
console.log(a - b); // 10
console.log(a * b); // 200
console.log(a / b); // 2
console.log(a % b); // 0

//문자열 사칙연산

const str1 = "20";
const str2 = "10";

console.log(str1 + str2); // '2010'
console.log(str1 - str2); // 10
console.log(str1 * str2); // 200
console.log(str1 / str2); // 2
console.log(str1 % str2); // 0
~~~

<strong>Number에서 특별한값</strong>

~~~javascript
const infinity = 1 / 0; // Infinity(무한)
const negativeInfinity = -1 / 0; // -Infinity
const nAn = 'not a number' / 2; // NaN
// 숫자가 아닌 문자열을 숫자로 나누게 되면 NaN이 출력
~~~

~~~javascript
let num10 = 10;
console.log(--num10); //9
console.log(--num10); //8

~~~javscript
let num10 = 10;
console.log(++num10); //11
console.log(++num10); //12
~~~

주의할점은 앞에 사용하나 뒤에 사용하나에 따라 결과가 달라진다

~~~javascript
let num10 = 10;
console.log(num10--); //변화없음
console.log(num10); //9
~~~

선 차감을 할지 후 차감을 할지 차이

<strong>나머지 기호</strong>

+=,&#160; -=,&#160; *=,&#160; /=,&#160; %=

~~~javascript
let num20 = 20;
num20 += 10;   // num20 = num20 + 10; 
~~~

개념 자체는 나머지 기호에도 똑같이 통용된다.

<br>

<strong class="subtitle2_fontAwesome">불리언 (Boolean)</strong>

true, false 

false : 0, null, undefined, NaN, ''

true : 그외 다른 값

<strong>비교연산자</strong>

&#160;>,&#160; <,&#160; ==,&#160; ===,&#160; <=,&#160; >=

비교연산자를 사용하게 되면 결과값은 항상 boolean이 나타난다.

~~~javascript
const a = 10;
const b = 20;

console.log(a < b); // true
console.log(a >= b); // false
~~~

==, ===는 둘다 같다의 의미를 지니고 !=, !==는 다르다의 의미를 가지고 있다.

~~~javascript
const a = 10;
const b = 20;

console.log(a == b); // false
console.log(a === b); // false

console.log(a != b); // true
console.log(a !== b); // true
~~~

등호 갯수에 대한 차이점

등호가 3개를 사용할때는 값을 비교할때 더 엄격하게 따짐, &#160;엄격함이란 비교하는 대상의 데이터타입이 같은지도 따지는걸 말한다

~~~javascript
const num10 = 10;
const str10 = "10";

console.log(num10 == str10); // true
console.log(num10 === str10); // false
~~~

<strong>비교연산자</strong>

AND(&&), OR(\|\|)

AND는 둘다 모두 true인 경우 true

OR은 둘중 하나라도 true인 경우 true

~~~javascript
const num30 =30 ,num40 = 40,num50 = 30;
console.log(num30 === num40 && num30 === num50); // false
console.log(num30 === num40 || num30 === num50); // true
~~~

<br>

<strong class="subtitle2_fontAwesome">null, &#160;undefined</strong>
 
<i class="fa fa-th-list"></i>&#160; null 

빈 값을 변수 안에 할당한 상태

데이터는 들어가있지만 데이터 자체가 비어있는 데이터임

<i class="fa fa-th-list"></i>&#160; undefined

변수를 선언만 한 상태

텅텅 비었는지 값이 들어가있는지 정해지지않은 상태

~~~javascript
const n = null; 
let u;
console.log(n); // null
console.log(u); // undefined
~~~

<strong>부정 연산자&#160; + &#160;null, &#160;undefined </strong>

!는 부정, &#160;!!는 부정의 부정 &#160;즉, 두번 부정을 의미

~~~javascript
console.log(!true); // false
console.log(!!false); // false

console.log(!null);  // true
console.log(!!null); // !true
~~~

null 부정시 true, 이것을 또 부정시 false로 출력되며 원래상태인 null로 돌아가지 않는다.

그 이유는 이미 한번 부정 했을때 true로 반환을 했고 두번부정할 때는 이 반환된 true에 대해서 부정한 것으로 인식하기 때문

undefined도 null과 동일하다

<strong>null과 undefined의 사칙연산</strong>

~~~javascript
console.log(10 + null); // null -> 0, 10출력
console.log(10 + undefined); // NaN출력 (Not a Number)
~~~

<br>

<strong class="subtitle2_fontAwesome">Symbol</strong>

용도 : Symbol은 Object자료형에 비밀스런 key값을 부여하고싶을 때 씁니다. 

~~~javascript
const person = { name : 'kim' }
// 숨기고 싶은 정보(비밀 데이터)를 저장하고 싶을때
//person.weight = 100;  이런식으로 추가하면 다 보임

let weight = Symbol('내 시크릿 몸무게')
// 오브젝트 key 값에는 문자만 가능했는데 ES6부터 심볼을 넣을 수 있음
person[weight] = 100; // weight라는 심볼을 이용해서 자료를 저장하는 법
console.log(person) // name: "kim"  Symbol(내 시크릿 몸무게): 100
// 비밀스런 자료형이 된것(밖에 공개가 안됨)
~~~

~~~javascript
// 오브젝트를 출력해보면 
for (let key in person){
  console.log(person[key])
} // kim만 출력됨
~~~

반복문에 출력되지않는 이유는 enumerable 하지 않아서 그렇다

직접 출력은 되지만 반복문에 안뜰뿐

~~~javascript
const person = { name : 'kim', [height] : 160 }
// 이런식으로 작성가능
~~~

심볼의 고급스러운 장점 다른js파일이나 라이브러리를 쓸때 안에 들어있던 object를 수정해야하는데 기존 코드들을 망치기 싫으면 Symbol을 이용해서 저장하면 반복문에도 안뜨고 기존의 코드를 해칠 염려가 없다

심볼은 안에 들어가는 설명이 같다고해서 같은 심볼이 아님

~~~javascript
const string = String('id');
const string1 = String('id');
console.log(string === string1) // true

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) // false
// Symbol을 만들때 각각 유니크한 Symbol이 생김
~~~

~~~javascript
// 여러 오브젝트에 사용할 수 있는 공통적인 Symbol을 부여하고 싶으면 Symbol을 전역으로 만들면 된다.
const symbol1 = Symbol.for('id');
const symbol2 = Symbol.for('id');
console.log(symbol1 === symbol2) // true
// Symbol.for()은 기존에 Symbol.for로 만든 같은 설명을 가진 심볼이 존재하면 기존 심볼을 복붙해준다 
const symbol1 = Symbol.for('id');
const symbol2 = symbol1;
~~~



Symbol은 바로 출력시 에러가 나기때문에 String으로 바꿔서 출력해야한다

~~~javascript
const symbol1 = Symbol('id');
console.log(`value : ${symbol1}`); // 에러발생
console.log(`value : ${symbol1.description}`); // value : id
~~~

~~~javascript
const 어레이 = [2,3,4]
어레이[Symbol.iterator] 
// 이거랑 같은 느낌의 코드
person[weight] // 심볼을 출력할때 사용 

// 어레이 배열에 몰래 저장한 Symbol이 뜨는것
// 자바스크립트가 array나 object를 만들때 기본적으로 집어넣는 기본 내장  Symbol
~~~

반복문을 돌릴때 전혀 출력안됨 -> Symbol이라서


Map자료형

object랑 똑같이 key, value 형태로 저장할 수 있음

~~~javascript
const person = new Array() // 배열 생성

const person = new Map(); // Map자료형 생성
person.set('name', 'kim') // 자료 저장 문법
console.log(person) // {'name' => 'kim'} 출력
~~~

Map자료형은 자료의 연관성을 표현하기위해 사용하는 자료형이라 화살표가 있음

전통적인 object자료형은 key값에 텍스트 밖에 안되지만 Map자료형은 key, value값에 모든 자료를 집어넣을 수 있다(Map의 존재이유)

Map은 이 값이 저 값과 연관되어있다 라는걸 표현하기 위한 것이기때문 

~~~javascript
person.get('name') // 자료 꺼내기
person.delete('name') // 자료 삭제
person.size // person에 저장된 데이터 갯수
~~~

js로 웹UI만들때 전혀 쓸모가 없고 자료간에 의존성을 나타내고 싶을때나 수학의 맵핑연산을 할때 가끔 사용

~~~javascript
// Map자료형 한번에 만들기
let person = new Map([
  ['name','kim'],
  ['age', 20]
])

for (let key of person.keys()){
  console.log(person.keys()) // MapIterator {'name', 'age'} 출력
  // Iterator한 것을 반복문 돌릴땐 for of 사용
  console.log(key) // name age 출력 (키값 출력)
}
~~~

Set자료형



~~~javascript
let 출석부 = ['john', 'tom', 'andy', 'tom']; // tom이 실수로 들어감 (중복자료)

// 중복자료를 허용하지않는 자료형(배열과 유사)
let 출석부2 = new Set(['john', 'tom', 'andy', 'tom']); // 자료 생성
console.log(출석부2) // {'john', 'tom', 'andy'} 출력
// 중갈호 안에 있는 배열처럼 나열이 되서 저장이 됨
// tom을 두번저장했지만 중복을 허용하지않기 때문에 삭제됨
~~~

~~~javascript
출석부2.add('sally') // 값 추가
출석부2.delete('sally') // 값 삭제
출석부2.has('sally') // 값이 있나 없나 판단(boolean)
출석부2.size // 자료의 개수
~~~

set <-> Array

Array의 중복자료를 제거하고 싶으면?

~~~javascript
let 출석부 = ['john', 'tom', 'andy', 'tom'];
let 출석부2 = new Set(['john', 'tom', 'andy', 'tom']);
출석부 = [...출석부2]
// 이렇게하면 {}가 제거되고 배열안에 넣어진 상태가 된다
~~~

Set도 반복문 가능(forEach, for of)

