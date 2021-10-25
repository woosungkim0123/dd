---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: 자바스크립트 개념
date: 2021-09-14 20:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascript.html %}

<br>

<strong class="subtitle_fontAwesome">자바스크립트</strong>

<strong class="subtitle2_fontAwesome">기초개념</strong>

웹사이트 주요기능 and 애니메이션 효과 구현<br>
예전에는 자바스크립트가 웹사이트 영역에서만 활용되었지만 이제는 여러곳에서 활용가능

<strong> 1. 하이브리드 앱</strong><br>
java, kotlin을 사용하지않고 javascript만으로 동시에 앱을 만들 수 있다.

<strong> 2. 서버개발작업</strong><br>
javascript 언어기반인 node.js를 이용해 서버개발작업 가능

<strong> 3. 사물인터넷 (IOT, Internet of Things)</strong><br>


<br>

<strong class="subtitle2_fontAwesome">특징</strong>

인간에게 친숙한 언어라서 입문단계에서 굉장히 빠르게 습득이 가능한 언어
- high level language = 인간에게 친숙한 언어
- low level language = 컴퓨터가 이해하기 쉬운 언어

<br>

<strong class="subtitle2_fontAwesome">자바스크립트 분야</strong>

<strong> 1. javascript 코어 </strong><br>
Javascript가 가지고 있는 문법적인 특징들을 공부하는 영역

<strong> 2. 클라이언트 측 javascript </strong><br>
브라우저를 제어할때 사용되는 javascript

- 현재 마우스 위치,&#160; 브라우저 창의 크기를 가져올 때 사용되는 분야
- javascript를 가지고 html, css에 접근해서 변화를 주고 싶을 때 사용되는 분야

<strong> 3. 서버 측 javascript </strong><br>
서버 개발 부분,&#160; node.js의 영역

<br>

<strong class="subtitle2_fontAwesome">적용방법</strong>

1. html 문서에 script 태그 사용후 javascript 코드 사용 <br>

    ~~~html
    <body>
        <script>
            console.log("hello"); 
        </script>
    </body>
    ~~~

2. script로 js파일을 연동하는 방법<br>
    Javascript 코드도 html, css 와 마찬가지로 위에서부터 순차적으로 실행된다.<br>
  
    ~~~html
    <script src="js/main.js"></script>
    ~~~

<strong>연동시 주의점</strong>

- script로 연동하고 script 안에 Javascript 코드를 입력시 적용되지않음
- 둘중 하나만 선택해서 사용, 혼용X

<br>

<strong class="subtitle2_fontAwesome">여러개의 js파일</strong>

css처럼 여러개 파일 생성가능, &#160;두개의 서로 다른 파일을 연동시켜줄때도 위에서부터 순차적으로 코드를 읽는다.

main.js에서 만든 것을 custom.js에서 사용 가능.

이때 순서에 주의, 상식적으로 먼저 존재해야지만 나중에 사용가능

이후에 연동된 파일에서 이전에 작성된 변수명과 함수를 써먹을 수 있다. 먼저 존재하는 파일을 연동시켜주고 그 다음 써먹을 파일을 연동시켜야함

~~~javascript
//main.js
var mainVar = "Main Var";

function mainFunc() {
	console.log("Main Func");
}
~~~
~~~javascript
//custom.js
console.log(mainVar);

mainFunc();
~~~

![two-js](assets/built/images/js-1.jpg)

<br>

<strong class="subtitle2_fontAwesome">주석</strong>

1. css와 같은 방식 (전체주석)

    ~~~javascript
    /*
    console.log("comment");
    console.log("aaa");
    */
    ~~~

2. // 사용 (한줄주석)

    ~~~javascript
    //console.log("comment");
    ~~~

3. 전체주석 안에 전체주석은 사용불가능하지만 전체주석 안에 한줄주석은 사용가능함

    ~~~javascript
    /*
    //console.log("comment");
    console.log("aaa");
    */
    ~~~

<br>

<strong class="subtitle2_fontAwesome">콘솔로그</strong>

소괄호 안쪽의 정보를 consol 탭에 출력시킬 때 사용되는 명령어

이 명령어를 통해 그 안에 무엇이 담겨있는지 알 수 있다

~~~javascript
console.log(apple);
~~~


head 안에 script를 이용하면서 asyn 속성을 이용하는것

선언하는 것만으로도 true

asyn를 사용하면 브라우저가 html을 다운로드받아서 파싱하다가 asyn가 있는걸 발견하고 병렬로 js 파일을 다운받음

parsing을 하다가 다운로드가 완료되면 파싱을 멈추고 다운로드가 다 된 js 파일을 실행

다운로드 시간 절약, 하지만 html 파싱되기전에 시작되기떄문에 자바스크립트 파일에서 dom요소 조작등을 할때 html이 아직 정의 되어있지않을 수 있음

html을 파싱하는동안 언제든지 자바스크립트를 실행하기위해 멈출 수 있어서 사용자가 페이지를 보는데 시간이 걸림


head defer

파싱을 하다가 defer을 발견하다 병렬로 다운을 받으면서 파싱하게됨 파싱이 끝나고 다운로드된 자바스크립트 실행

defer이 좋음

async 옵션으로 다수의 스크립트 다운시 먼저 다운로드 된 아이들을 실행하기때문에 정의된 스크립트 순서에 상관없이 다운로드가 먼저 된 아이를 실행함

defer은 파싱하는 동안 다 다운받은 후에 파싱이 긑나고 순서대로 실행하기때문에 정의한 순서가 지켜짐


자바 스크립트 사용시 'use strict'; 쓰는게 좋음

유연하다 = 위험하다

선언되지않은 a에 값을 할당해도 문제가 안되나

use strict 사용시 에러가뜸


자바스크립트 적용방식

~~~html
<script src="app.js"></script>
~~~

ES6방식

~~~html
<!-- html에서 js내용을 불러오기 -->
<script type="module">
    import aaa from '/app.js'
    // 모든내용을 다가져오지않음. 
    // a라는 변수를 가져올것임(특정한 변수만 가져올 수 있음)
</script>
~~~

~~~javascript
const a = 10;
// 변수만 만들면 가져다 사용할 수 있는게 아니라 내보내줘야함(export)
export default a;
// 나는 a라는 변수를 기본으로 export하겠습니다
~~~

export default를 쓰면 import시 변수명을 아무렇게나 해도됨

여러개의 변수를 export default

~~~javascript
const a = 10;
const b = 20;
export default a
export default b // 에러
// export default는 딱 한번만 사용가능

// 여러개를 내보내고 싶으면 export만 사용

export {a,b}; // 같이 넣어도되고 따로 해도되고
// export라는 키워드를 변수명 옆에 적어도됨
export const c = 10;
~~~

~~~html
<!--받는법-->
<script type="module">
    import {b} from '/app.js'
// 아까랑 다르게 정확한 이름을 적어줘야함
</script>
~~~

export와 export default 같이 사용가능

~~~javascript
const a = 10;
const b = 20;
const c = 30;
export {a,b} // 정확한 이름
export default c // 작명 아무렇게나 가능
// 동시에 가능하지만 export 방법을 다르게 했을경우 가져다 쓰는 방법이 달라질뿐
~~~

export와 export default로 나온 변수를 동시에 import 하고싶으면?

~~~html
<script type="module">
    import 작명,{a,b} from '/app.js'
    // 기본적으로 가져오는건 왼쪽에 써야함
</script>
~~~

export로 나온 변수이름을 변경하고 싶으면?

~~~html
<script type="module">
    import {a as 작명} from '/app.js'
</script>
~~~

전부다 import 해올땐 보통 별명을 지음

~~~html
<script type="module">
    import * as 별명 from '/app.js'
    console.log(별명.a) // 출력됨
    console.log(별명.c) // 출력안됨

// export default 한것은 항상 이런식으로 import 해와야함
    import c, * as 별명 from '/app.js'
</script>
~~~

모든자료형을 export 할 수 있다

옛날방식
~~~javascript
// (export 하는 js파일)
module.exports.a = 10 ;

------------------------
// (import 하는 js파일)

var 가져온거 = require('/library.js'); 
~~~

IE에서 안됨

프론트엔드에서 모듈식으로 개발할려면 js파일을 src로 첨부하는게 최고

