---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: prototype
date: 2021-12-12 21:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include tableJs1-variable.html %}

<br>

<strong class="subtitle_fontAwesome">prototype</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

js에는 constructor 말고도 prototype을 이용해 상속기능을 구현할 수 있다. (자바스크립트에만 있는 문법)

prototype은 유전자라고 생각하면 된다

constructor 문법을 만들면 prototype이라는 공간이 자동으로 생김

~~~javascript
function Product(name, price) {
	this.name = name
	this.price = price
}
Product.prototype // {constructor: ƒ}
// Product의 유전자
~~~

내가 키가 큰 이유는 부모님의 유전자를 물려받았기 때문에

prototype(유전자)에 값을 추가하면 모든자식들이 물려받을 수 있다

~~~javascript
function Student(name) {
	this.name = name;
	this.age = 15;
}
Student.prototype.gender = '남';
// Product 유전자에 gender라는 key와 '남'이라는 value를 추가함

const 학생1 = new Student('park');
console.log(학생1) // Student { name: 'park', age: 15 } 출력
console.log(학생1.gender) // 남 출력
~~~

학생1 안에 gender라는 속성이 없는데 사용할 수 있음. (부모의 유전자에 있어서 사용가능) 

<br>

<strong class="subtitle2_fontAwesome">동작원리</strong>

자바스크립트는 오브젝트에서 데이터를 뽑을 때 확인하는 순서가 있습니다. 

1. 직접 가지고 있나 검사

	자바스크립트는 제일 먼저 학생1이 직접 name을 가지고있는지 검사, 가지고 있으면 출력

	~~~javascript
	function Student(name) {
	this.name = name;
	this.age = 15;
	}
	Student.prototype.gender = '남';

	const 학생1 = new Student('park');
	
	학생1.name;
	~~~

2. 부모 유전자 검사
	
	학생1이 직접 gender를 가지고 있지않으면 그다음으로 부모 유전자를 검사

	~~~javascript
	학생1.gender;
	~~~

	Student.prototype(부모 유전자)에게 gender라는 속성이 있으면 실행함

3. 부모의 부모 유전자 검사

	만약 부모에게도 없다? 그러면 부모의 부모를 검사

자바스크립트는 내가 직접 가지고 있는지 검사 -> 가지고 있지않으면 부모 유전자들을 차례로 검사 하는 알고리즘으로 작동한다

<br>

<strong class="subtitle2_fontAwesome">내장함수 동작원리</strong>

~~~javascript
const a = [1,2,3].toString(); // toString : Object와 Array에 붙일 수 있는 내장함수
console.log(a); // '1,2,3' 출력, 안에 있는 값을 글자로 바꿔줌

[1,2,3].sort();
[1,2,3].push(); // 그외 많은 내장함수가 있음
~~~

내장함수들을 어떻게 사용할 수 있는 걸까?

~~~javascript
Student.prototype.gender = '남';

const 학생1 = new Student();
학생1.toString();
~~~

학생1에는 toString이 없으면 부모(Student)의 prototype을 찾아보고 거기도 없으면 부모(Student)의 부모의 prototype도 찾아봄

부모(Student)의 부모 유전자에 있음

잠깐 돌아가서 자바스크립트에서 배열을 어떻게 만드는지 알아보자

~~~javascript
// 개발자 입장
const arr = [1,2,3]

// 컴퓨터 입장
const arr = new Array(1,2,3); // 우리도 이런식으로 만들 수 있지만 보는게 위가 더 편해서 위쪽방식을 씀
~~~

Array라는 constructor에서 새로운 배열을 출력하는것

arr은 Array의 상속을 받아서 sort등을 사용할 수 있는것

~~~javascript
console.log(Array.prototype) // 안에 내장함수들이 보임
~~~

Object도 마찬가지

~~~javascript
// 개발자 입장
const obj = { name : 'kim' }

// 컴퓨터 입장
const obj = new Object();
~~~

<br>

<strong class="subtitle2_fontAwesome">prototype상속 vs constructor상속 차이</strong>

자식들이 값을 직접 소유하게 만들고 싶으면 constructor로 상속시키시면 되고

부모만 가지고 있고 그걸 참조해서 쓰게 만들고 싶으면 prototype으로 상속시키면 된다.

<br>

<strong class="subtitle2_fontAwesome">proto</strong>

prototype은 constructor 함수에만 생성된다.

여러분이 일반 object, array 이런거 만들어도 거기엔 prototype이 없습니다. 

~~~javascript
// 함수가 아니라 사용불가
console.log(학생1.prototype) // undefined 

// 내 부모가 궁금할때(유전자검사), 모든자식들에 있는 키워드
console.log(학생1.__proto__) // { gender: '남' } constructor: ƒ Student(name) 출력
console.log(Student.prototype) // { gender: '남' } constructor: ƒ Student(name) 출력 
~~~

학생1의 부모 유전자를 출력해주세요 라는 의미

<br>

<strong class="subtitle2_fontAwesome">proto편법</strong>

~~~javascript
// 부모의 이름 속성을 물려받고 싶을때
// 기계 만들어서 상속시켜도되는데
const 부모 = { name : 'kim' }
const 자식 = {};

// 편법
// __proto__를 이용하여 부모님 강제 등록하기
자식.__proto__ = 부모;

console.log(자식.name); // kim 출력
~~~

실제로 이렇게 쓰지는 않고 이런 역할을 한다고 이해만 하면된다

이거보다 더 좋은 ES5문법이 있음

<br>

<strong class="subtitle2_fontAwesome">protochain</strong>

~~~javascript
console.log(학생1)
~~~

![prototype](assets/built/images/js/prototype1.JPG)

색칠된 Prototype은 __proto__임

학생1의 부모유전자 : Student.prototype

Student의 부모유전자 : Object.prototype

function Object라는 기계로부터 생성이 되었습니다 라고 알려줌

왜냐하면 모든 자바스크립트 object, function, array들은 모두 new Object로 형성이 된다

만물의 어머니 = new Object();

![prototype](assets/built/images/js/prototype2.JPG)

<br>

<strong class="subtitle2_fontAwesome">예제</strong>

배열 내에 파라미터로 들어간 값을 제거해주는 모든 배열에 붙일 수 있는 함수를 만들어보자

~~~javascript
Array.prototype.remove = function(a){
	console.log(this) // [1,2,3,4]
   for (let i = 0; i < this.length; i++) { // 4번반복
     if ( this[i] === a ) {
       this.splice(i,1);
     }
   }
};
 
const arr = [1,2,3,4];
arr.remove(1);
 
console.log(arr); //[2,3,4]
~~~