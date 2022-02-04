---
layout: post
current: post
cover: assets/built/images/js.jpg
navigation: True
title: protected, static
date: 2022-01-23 21:00
tags: [ts]
class: post-template
subclass: "post tag-python"
author: Lome
---

<br>

<strong class="subtitle_fontAwesome">객체 지향 언어 문법</strong>

<strong class="subtitle2_fontAwesome">protected</strong>

```javascript
class User {
  protected x = 10;
}
class NewUser extends User {
  doThis(){
    this.x = 20; // 자식은 못가져다 씀
  }
}
```

private랑 유사한데 조금더 확장성이 있음

extends를 사용했을때 private는 x를 가져오지 못하지만 protected에서는 가져옴

즉 extends된 class에서는 사용가능, 자식 사용불가능

<br>

<strong class="subtitle2_fontAwesome">static</strong>

```javascript
class User {
  // 여기 선언한 필드 값은 자식object만 쓸 수 있음
  static x = 10; // static을 붙이면 부모class만 사용할 수 있음
  y = 20;
}

let 자식 = new User(); // 자식 출력시 x가 안보임 (자식에게 안 물려줌)
console.log(User.x); // 10 출력
console.log(User.y); // 사용불가(필드 값은 자식object만 쓸 수 있음)
// extends시 static도 다 딸려옴
```

private, protected, public 이랑 static 동시에 사용가능

```javascript
class User {
  private static x = 10;
  y = 20;
}
```

<br>

<strong class="subtitle2_fontAwesome">활용예시</strong>

```javascript
// 파라미터를 사용하려면 constructor를 사용해야하는데 static을 이용해 간략하게 구현가능
// static을 붙이면 부모만 쓸 수 있어서 this.skill을 User.skill로 변경해야함
class User {
  static skill = "js"; // 자식들도 물려받아서 제한해야함
  // intro = this.skill + " 전문가 입니다";
  intro = User.skill + " 전문가 입니다";
}

let 철수 = new User();
console.log(철수); // {intro : js 전문가입니다}

// js를 변경하고 싶으면 constructor를 사용하거나 static 키워드를 수정

User.skill = "ts";

let 철수1 = new User();
console.log(철수1); // {intro : ts 전문가입니다}
```

밖에서 변경하는건 위험성이 있기 때문에 private, protected가 낫다

```javascript
// 랜덤으로 지정된 크기 네모가 생성
class Square {
  constructor (public width :number, public height :number, public color :string){
  }
  draw(){
    let a = Math.random();
    let square = `<div style="position:relative;
    top:${a * 400}px;
    left:${a * 400}px;
    width:${this.width}px;
    height : ${this.height}px;
    background:${this.color}"></div>`;
    document.body.insertAdjacentHTML( 'beforeend', square );
  }
}

let 네모 = new Square(30, 30, 'red');

네모.draw()
네모.draw()
네모.draw()
네모.draw()
```
