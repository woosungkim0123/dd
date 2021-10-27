---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: 데이터타입3 - 원시 vs 참조
date: 2021-09-17 17:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascript.html %}

<br>

<strong class="subtitle_fontAwesome">원시 vs 참조</strong>

<strong class="subtitle2_fontAwesome">차이점</strong>

두개의 차이를 가장 한눈에 살펴볼 수 있는 예제를 들어보자

<strong>원시타입 예제</strong>

str1 변수에 'Hello world' 데이터를 할당하고 str2변수에 str1을 할당하면 둘다 hello world가 찍힌다

즉, str1의 값이 그대로 str2에 할당이 된다

~~~javascript
var str1 = "Hello world";
var str2 = str1;
~~~

![js-5](assets/built/images/js-5-1.jpg)

str1변수의 데이터를 'Nice'로 수정하면 str1에만 변경되고 str2는 변경되지 않는다

str1라는 원본 데이터를 수정했을 때 복사본인 str2에 영향을 줄 수 없다.

~~~javascript
str1 = "Nice";

console.log(str1);
console.log(str2);
~~~

![js-5](assets/built/images/js-5-2.jpg)

<strong>원시타입의 특징</strong>

원시타입은 원본데이터를 수정했다고해서 복사본이 바뀌지 않는다.(반대도 마찬가지)

원본과 복사본 데이터 개념이 들어가 있는 데이터타입이 원시타입이라고 할 수 있다.

<br>

<strong>참조타입 예제</strong>

객체를 만들고 위와 똑같은 방법으로 실험을 진행

~~~javascript
var obj1 = {name: "Woosung"};
var obj2 = obj1;
~~~

![js-5](assets/built/images/js-5-3.jpg)

데이터를 변경하게되면 둘다 바뀌게 된다 (반대도 마찬가지)

~~~javascript
obj1.name = "Kim"

console.log(obj1);
console.log(obj2);
~~~

![js-5](assets/built/images/js-5-4.jpg)

<strong>참조타입의 특징</strong>

참조타입은 직접적으로 데이터를 변수 안에다가 넣어주는 것이 아니고 데이터를 메모리라는 저장소에 넣어둔다.

즉, obj1은 데이터를 가리키는 것이 아니라 데이터가 저장되어있는 주소를 말하는 것이다.

obj2도 obj1이 가리키는 있는 주소를 가리키도록 만들었기 때문에 주소를 공유하고 있는 것이다.

<br>

<strong>그림 설명</strong>

obj1을 파란색에서 빨간색으로 변경한다고 해서 주소는 변하지 않는다.&#160; 변경이 없는 주소 안에서 색상만 바뀐 것.

그래서 obj1과 obj2가 동시에 변화가 되는것이다.

![js-5](assets/built/images/js-5-5.jpg)

![js-5](assets/built/images/js-5-6.jpg)


메모리에 값이 저장되는방식에 두가지가 있늗네

primitive

값자체가 메모리에 저장됨

let name = elie


object 

너무 커서 메모리에 한번에 올라갈 수 가없어서 그래서 const elie 라고 선언하고 오브젝트르 ㄹ할당하면

elie가 가르키는 곳에는 레퍼런스가 있음

레퍼런스는 실제로 오브젝트를 가리키고있는곳

레퍼런스를 통해서 실제로 오브젝트가 담겨있는 메모리를 가르키게됨

const elie라고 하면 elie가 가르키고 있는 포인터만 잠겨서 엘리가 다른오브젝트로 불가능하지만

엘리 안에있는 name과 age는 변경이 가능한 것도 이 이유중 하나

primitive 타입은 value로 값이 저장되고 오브젝트는 object를 가르키는 레퍼런스가 메모리에 저장된다 라고 이해ㅑ하면됨



primitive 데이터타입은 값이 그대로 저장이됨

let 변수 = 'ddd'
123

let 어레이 = [1,2,3];
array나 object는 변수에 값이 저장이 안됨

변수에 reference라는게 저장이됨

reference라는건 화살표 값이 저기있습니다 라고 가리키는

object나 array는 변수에 값이 저장되는게 아니라 안에 값이 저쪽에 있습니다 라는 reference가 저장이된다

특징

let 이름1 = '김'
let 이름2 = 이름1; // 복사
console.log(이름1); // 김
console.log(이름2); // 김
이름1='박
console.log(이름1); // 박
console.log(이름2); // 김


let 이름1 = { name : 'kim' };
let 이름2 = 이름1
console.log(이름1.name) // 'kim'
이름1.name = '박'
console.log(이름1.name) // '박'
console.log(이름2.name) // '박'

이름2는 변경한적이없는데 바뀜

레퍼런스 데이터타입은 변수에 값을 저장하는게 아니라 값이 저기있어요 라는 reference를 저장하기때문

메모리상에 어딘가 저기있어요

즉 실제 데이터가아니라 화살표가 저장되어있는것

변수를 복사한게아니라 화살표를 복사한것..

레퍼런스 데이터타입은 이런현상떄문에 함부러 복사해서 쓰면 안된다

let 이름1 = { name : '김' }
let 이름2 = { name : '김' }
console.log( 이름1 == 이름2 ); // false

오브젝트를 변경

var 이름1 = { name : '김' };

function 변경(obj){
  obj.name = 'park'
}

변경(이름1);

console.log(이름1) // { name : 'park'}


오브젝트를 값을 수정하는게 아닌 새로운 오브젝트 재할당

let 이름 = { name : '김' }

function 변경(obj) {
   obj = { name : 'park' }
}

변경(이름1); 

console.log(이름1) // { name : 김 } 출력

왜 안바뀌지?

레퍼런스와 파라미터의 합작

예제에서 obj라는걸 만들어 쓰는데 이건 새로운 변수생성해서 할당

let obj랑 똑같은거

변경이라는 함수에 이름1을 넣으면 어떤일이 일어나냐하면 

let obj = 이름1

파라미터는 이거랑 같은 의미

이건 잘보면 화살표를 저장해주세요랑 같은 의미

화살표를 복사해서 obj에 넣은것이랑 똑같음

여기다 새로운 오브젝트를 할당하면 기존거는 버리고 새로운 화살표가 생긴것

이름1은 name 김

obj는 name park

화살표를 재할당했을뿐이지 집어넣은 데이터를 변경한건 아니다

