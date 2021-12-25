---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: constructor
date: 2021-12-12 20:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include tableJs1-variable.html %}

<br>

<strong class="subtitle_fontAwesome">constructor</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

비슷한 object를 여러개 만들때 사용

~~~javascript
// 이런식으로 하나하나 복사하는건 비효율
const 사람1 = { name : '철수'}
const 사람2 = { name : '영희'}
~~~

~~~javascript
// 이건 값이 복사되는게 아니라 reference가 복사됨
const 사람1 = { name : '철수'}
const 사람2 = 사람1 
~~~

여러개를 복사하려면 constructor라는 object 복사기계를 만들어서 사용하면 된다.

<br>

<strong class="subtitle2_fontAwesome">예시</strong>

학생출석부를 만들려고하는데 학생들 데이터들을 object로 정리하려고함

~~~javascript
// 관습적으로 대문자로 지음(일반함수랑 다르다 표시)
function Student() {
	console.log(this) // Student {} 출력

	this.name = '김'
	this.age = 15;
}
// constructor 문법을 하나 생성한것

const 학생1 = new Student();
const 학생2 = new Student();
console.log(학생1) // Student { name: '김', age: 15 } 출력
console.log(학생2) // Student { name: '김', age: 15 } 출력
~~~

constructor 문법안에서 사용하는 this는 새로 생성되는 object를 의미함

this.name = '김' 은 새로 생성되는 object에 name속성에는 '김'이라는 값을 대입해주세요 라는 의미

this를 사용하면 새로생성되는 object에 값 부여가능

결론 : constructor는 object를 쉽게 뽑을 수 있게 만들어준다

<br>

<strong class="subtitle2_fontAwesome">예시2</strong>

object내 함수를 추가해보자

~~~javascript
const 학생1 = {
	name : '철수',
	age : 15,
	sayHi : function(){
		console.log('안녕하세요 ' + this.name + '입니다')  // 함수 만드는 방법1
	},
	sayHello(){
		console.log(`Hello ${ this.name }입니다`) // 함수 만드는 방법2
	}
}
학생1.sayHi() // 안녕하세요 철수입니다
학생1.sayHello() // Hello 철수입니다
~~~

지금 학생1에 있는 이 기능을 Student로 생성되는 모든 object에 추가해보자

~~~javascript
function Student() {
	this.name = '김',
	this.age = 15,
	this.sayHi = function(){
		console.log('안녕하세요 ' + this.name + '입니다')
	}
}

const 학생1 = new Student();
학생1.sayHi() // 안녕하세요 김입니다
~~~

<br>

<strong class="subtitle2_fontAwesome">예시3</strong>

사실 위에 예시에는 문제점이 있다. 그것은 바로 만들어지는 object의 이름이나 나이가 동일하다는 것

~~~javascript
function 기계(이름, 나이) {
	this.name = 이름
	this.age = 나이
}
const 학생1 = new Student('박', 15);
console.log(학생1) // 기계 { name: '박', age: 15 }
~~~

<br>

<strong class="subtitle2_fontAwesome">용어정리</strong>

object를 만들어내는 기계를 constructor, 생성자라고 하고 constructor를 거쳐 만들어진 오브젝트를 인스턴스(instance)라고 한다

지금까지 한 내용을 객체지향 용어로 상속(inheritance)이라고 한다.

기계라는 constructor가 가진 name, age 속성들을 그대로 물려받아서 오브젝트를 하나 뽑아주는게 재산 물려주는 상속과 비슷하다고 해서 상속이라고 부릅니다. 

(그래서 상속해주는 것은 부모, 상속받는 오브젝트들은 자식이라고 많이 비유)

~~~javascript
function 기계(이름, 나이) {   	    //
	this.name = 이름          			// 부
	this.age = 나이          			// 모
}                           			//

const 학생1 = new Student('박', 15); // 자식(학생1)
~~~
