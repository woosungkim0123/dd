---
layout: post
current: post
cover: assets/built/images/js.jpg
navigation: True
title: class
date: 2022-01-12 18:57
tags: [ts]
class: post-template
subclass: "post tag-python"
author: Lome
---

<br>

<strong class="subtitle_fontAwesome">class</strong>

<strong class="subtitle2_fontAwesome">class 타입지정</strong>

```Javascript
class Person {
  // class 안에다가 변수를 만들 수 있음
  // class 필드값
  data :number = 0;
}
// 모든 자식들은 data속성을 가져다 쓸 수 있음
let 사람1 = new Person();
let 사람2 = new Person();
console.log(사람1.data) // 0 출력
```

```Javascript
class Person {

  // this.name을 사용하고 싶으면 name 필드값을 미리 지정해줘야함
  // 복제되는게 항상 object라 return 타입을 지정할 필요는 없음
  name :string;
  constructor(a :string){
    this.name = a
  }
  // 여기가 prototype 함수 집어넣는 곳
  함수(a :string){
    // return이 있으면 타입 지정해주기
    console.log('안녕' + a)
  }
}
// 모든 자식들은 함수를 사용할 수 있음
// Person.prototype.함수 = function(){}

let 사람1 = new Person('kim');
let 사람2 = new Person('park');
```

<strong class="subtitle2_fontAwesome">interface</strong>

type을 사용해도 되고 interface를 사용해도됨

```Javascript
// type Square = { color : string, width : number }
interface Square { color : string, width : number }
let 네모: Square = { color : 'red', width : 100 }
```

interface의 장점은 extends로 복사 가능

```javascript
// name부분이 같기 때문에 extends로 복사 붙여넣기 가능
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };
```

type alias도 유사한 기능이 가능

```javascript
// & 기호(intersection type)
type Animal = { name: string };
type Cat = { age: number } & Animal;
```

extends랑 조금 다른게 복사하는게 아닌 왼쪽도 만족하고 오른쪽도 만족하는 타입을 만들어주세요 라는 뜻임(interface도 교차타입 가능)

<strong>type과 interface의 중요한 차이점</strong>

inteface는 중복선언을 허용, type은 중복선언이 불가능

```javascript
// 중복선언을 해주면 두개가 합쳐짐(자동 extends)
interface Student {
  name: string;
}
interface Student {
  score: number;
}
```

외부 라이브러리 같은 경우 interface를 많이 사용(추가적인 타입 커스터마이징이 쉬워서)

type은 엄격해서 불가능
