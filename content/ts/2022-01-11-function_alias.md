---
layout: post
current: post
cover: assets/built/images/js.jpg
navigation: True
title: function alias, HTML DOM 조작
date: 2022-01-07 18:57
tags: [ts]
class: post-template
subclass: "post tag-python"
author: Lome
---

<br>

<strong class="subtitle_fontAwesome">함수, 메소드 type alias</strong>

<strong class="subtitle2_fontAwesome">함수</strong>

```javascript
// 함수 타입 지정은 화살표함수
type 함수타입 = (a: string) => number;
// 무조건 string 타입을 집어넣을 수 있고 number타입을 배출할 수 있음

let 함수: 함수타입 = function () {};
```

<br>

<strong class="subtitle2_fontAwesome">타입 스크립트 돔조작</strong>

```javascript
// tsconfig.json
// strict모드를 다 키려면 strict : true
// strictNullChecks :  Null이 들어올때 엄격하게 체크
{
   "compilerOptions" : {
      "target": "es5",
      "module": "commonjs",
      "strictNullChecks": true
   }
}
```

```javascript
let 제목 = document.querySelector("#title");
제목.innerHTML = "반가워요"; // Element | null union타입이라 오류
// 변경하려면 타입을 하나로 narrowing 해야한다
```

왜 union 타입일까?

HTML요소를 잘못 찾을 수 있는데 이때 null이 남고 제대로 찾으면 Element 타입이 남음

```javascript
// narrowing 첫번째 방법
let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반가워요";
}
```

```javascript
// narrowing 두번째 방법
// instanceof 왼쪽이 오른쪽의 자식이냐(인스턴스냐)
let 제목 = document.querySelector("#title");
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}
```

```Javascript
// narrowing 세번째 방법
// as를 사용하면 타입스크립트 쓰는 의미가 없음
let 제목 = document.querySelector("#title") as Element
제목.innerHTML = "반가워요";
```

```Javascript
// narrowing 네번째 방법
// optional chainning(새로 나온 문법)
let 제목 = document.querySelector("#title");

// 셀렉터로 뽑은 것도 일종의 object자료라서 점을 통해 뽑을 수 있는데 ?를 기입할 수도 있음
// ?는 .이랑 같은 의미인데 조건이 붙음
// 제목object가 innerHTML이 있으면 출력해주고 없으면 undefined를 남겨줌
if (제목?.innerHTML) {
  제목.innerHTML = "반가워요";
}
```

```Javascript
// narrowing 다섯번째 방법
// tsconfig.json에서 null체크를 false로 바꾸기
```

```JAVASCRIPT
// class명이 link인 a태그 href 변경
// Element에서 href를 찾을 수 없다고 에러가 남
// narrowing을 상세히 해야함
// a태그의 경우 HTMLAnchorElement
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "반가워요";
}
```

타입스크립트가 제공하는 HTML 관련 기본 타입이 있음

대표적으로 HTMLElement, HTMLElement를 복사해서 만든 상세한 타입들이 있음 (HTMLAnchorElement, HTMLHeadingElement, HTMLButtonElement 등)

태그마다 타입이 정해져있음

```javascript
let 버튼 = document.querySelector("#button");
// 버튼에 addEventListener가 가능하면 해주고 아니면 undefined로 뱉음
버튼?.addEventListener("click", function () {});
```
