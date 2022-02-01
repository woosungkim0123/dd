---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: 타입스크립트 사용하기
date: 2022-01-03 12:57
tags: [ts]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<br>

<strong class="subtitle_fontAwesome">타입스크립트</strong>

<strong class="subtitle2_fontAwesome">자바스크립트 문제</strong>

~~~javascript
5 - '3' // 숫자만 가능하지만 JS가 알아서 숫자로 바꿔줌
~~~

자바스크립트는 Dynamic Typing을 제공하는 언어

프로젝트 사이즈가 커질수록 오히려 단점

<br>

<strong class="subtitle2_fontAwesome">개념</strong>

타입스크립트는 자바스크립트의 타입부분을 업그레이드해서 사용하고싶을 때 사용하는 일종의 자바스크립트의 대용품

~~~javascript
5 - '3' // 타입 에러 출력
~~~

에러메세지도 훨씬 정확함

Typescript를 언어보다는 코드 에디터 부가기능 역할로 봐도 무방

<br>

<strong class="subtitle2_fontAwesome">html,css,js만 쓸때 Typescript 설치</strong>

터미널에 npm install -g typescript

.ts로 끝나는 파일 만들고 타입스크립트 사용 시작(ts 파일은 js랑 똑같이 사용가능함)

tsconfig.json을 만들고 내용작성

~~~javascript
{
   "compilerOptions" : {
      "target": "es5", // 타입스크립트파일을 어떤 버전의 자바스크립트로 바꿔줄지 정하는 부분
      // 신버전을 원하면 esnext
      "module": "commonjs",
      // 'module'은 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳입니다. 
      // commonjs는 require 문법 
      // es2015, esnext는 import 문법을 사용합니다. 
   }
}
//  IE 호환성을 원하시면 es5, commonjs가 국룰
~~~

~~~javascript
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "noImplicitAny": true,
         // noImplicitAny는 any라는 타입이 의도치않게 발생할 경우 에러를 띄워주는 설정
        "strictNullChecks": true
        // strictNullChecks는 null, undefined 타입에 이상한 조작하면 에러를 띄우는 설정
    }
}
~~~

~~~javascript
{
 "compilerOptions": {

  "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
  "module": "commonjs", // 무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, // 컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "outFile": "./", // 모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "outDir": "./", // js파일 아웃풋 경로바꾸기
  "rootDir": "./", // 루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, // 컴파일시 주석제거 

  "strict": true, // strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  "noImplicitAny": true, // any타입 금지 여부
  "strictNullChecks": true, // null, undefined 타입에 이상한 짓 할시 에러내기 
  "strictFunctionTypes": true, // 함수파라미터 타입체크 강하게 
  "strictPropertyInitialization": true, // class constructor 작성시 타입체크 강하게
  "noImplicitThis": true, // this 키워드가 any 타입일 경우 에러내기
  "alwaysStrict": true, // 자바스크립트 "use strict" 모드 켜기

  "noUnusedLocals": true, // 쓰지않는 지역변수 있으면 에러내기
  "noUnusedParameters": true, // 쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, // 함수에서 return 빼먹으면 에러내기 
  "noFallthroughCasesInSwitch": true, // switch문 이상하면 에러내기 
 }
}
~~~

다만 웹브라우저는 ts 파일을 알아듣지 못하기 때문에 js 파일로 변환 작업을 해야함

js 파일로 변환하려면 터미널을 열고 tsc -w 입력해두면 얘가 자동으로 ts파일을 js 파일로 근처에 변환해줍니다.

켜놓기만하면 코드를 짜고 저장할때마다 갱신이됨

자바스크립트 파일로 변환하는 과정을 컴파일한다 라고 하는데 tsconfig.json은 컴파일시 옵션을 기입하는곳

HTML 파일 등에서 타입스크립트로 작성한 코드를 사용하려면 당연히 .ts가 아니라 변환된 .js 파일을 사용해야함

~~~Html
<script src="변환된파일.js"></script>
~~~

<br>

<strong class="subtitle2_fontAwesome">React에서 Typescript 사용</strong>

기존 프로젝트 적용시

~~~terminal
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
~~~

새로 만들때

~~~terminal
npx create-react-app my-app --template typescript
~~~

<br>

<strong class="subtitle2_fontAwesome">vue에서 Typescript 사용</strong>

vue add typescript -> 라이브러리 설치

~~~Javascript
// Vue 파일
// Vue 프로젝트 내에서도 tsconfig.json 파일 만들어서 설정도 자유롭게 가능합니다.
<script lang="ts">
</script>
~~~

<br>

<strong class="subtitle2_fontAwesome">타입스크립트 문법정리</strong>

변수만들때 타입 지정가능

~~~javascript
let 이름 :string = 'kim' // 문자만 들어올 수 있음(엄격하게 관리)
이름 = 123; // 에러
~~~

타입에 들어갈 수 있는 건

string, number, boolean, null, undefined, bigint, [], {}

~~~javascript
// array
let 이름 :string[] = ['kim', 'park']
// array안에 구성이 어떤 타입인지 정의해줘야함
// 이 변수에는 string이 담긴 array만 들어올 수 있습니다

// object
let 이름 :{ name : string } = { name : 'kim' }
// 이름 변수에는 name에 문자열만 담긴 object자료만 들어올 수 있음
let 이름1 :{name? : string } = { }
// object 자료는 속성(여기서는 name)이 들어오는게 불확실할때 ?를 쳐서 안들어와도 에러를 안내게 할 수 있음
~~~

다양한 타입이 들어올 수 있게 하려면(Union type)

~~~javascript
let 이름 :string | number = 'kim'
// 문자열 or 숫자가 들어올 수 있음
let 이름2 :(number | string)[] = [1,'2',3]
// ()를 안해주면? 
// number로 숫자가 들어올 수도 있고 문자배열로 들어올 수도 있다는 뜻
~~~

타입지정문법이 길면 변수에 담아서 사용도 가능

~~~javascript
// 타입명 작명시 대문자로 작명(일반 변수랑 차별)
type TypeVaries = string | number;
let 이름 :TypeVaries = 123;
~~~

함수를 만들때도 타입지정가능

~~~javascript
// 파라미터와 return 값에 타입지정이 가능
function 함수(x :number) :number {
   // 파라미터 안에 정의
   // return값 타입지정은 파라미터 옆에 정의
   return x * 2
}
함수('문자') // 에러
~~~

array 자료 안에 순서를 포함해서 어떤 자료가 들어올지 정확히 지정할 수 있다

~~~javascript
type Member = [number, boolean]; // tuple타입
let john:Member = [100, false]
// john 변수의 array의 첫번째 값은 숫자 두번째 값은 boolean이 들어와야함 
~~~

object안에 어떤 속성이 들어갈지 아직 모른다면 그냥 전부 싸잡아서 타입지정도 가능함 (index signature)

~~~javascript
// 객체의 경우 타입을 지정해야할 속성이 많으면 한번에 정의가능
type MyObject = {
  [key :string] : number,
  // 문자로 들어오는 object속성들이 숫자를 가져야한다
}
let 철수 :MyObject = { 
  age : 50,
  weight : 100,
}
~~~

class도 타입설정이 가능함

~~~Javascript
class Person {
   // 중괄호 내에 미리 name 이렇게 변수를 만들어놔야 constructor 안에서 this.name 이렇게 사용가능합니다.
   name:string;
   constructor(name :string){
      this.name = name;
   }
}
~~~
