---
layout: post
current: post
cover:  assets/built/images/js-model.png
navigation: True
title: 스크롤시 nav배경 변경
date: 2021-09-25 15:10
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascriptmodel.html %}

<br>

<strong class="subtitle_fontAwesome">스크롤시 nav배경 변경</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

스크롤을 올렸을때 상단에 고정되어있는 네비게이션의 배경색이 변경되는 기능

스크롤 내렸을때 active라는 클래스가 추가되면서 배경색이 흰색 폰트색상이 검은색으로 변경

최상위로 올라가면 active class가 삭제되고 이전 검은색배경 폰트색상 흰색으로 돌아감

클래스를 넣고 빼는 방식

<br>

<strong class="subtitle2_fontAwesome">스크롤 감지 방법</strong>

html, &#160; css 생략

함수 안에 스크롤이 발생했을때 동작되는 기능넣으면됨

1. 
    ~~~javascript
    window.addEventListener('scroll', function() {
    })
    ~~~

2. 
    ~~~javascript
    window.onscroll = function() {
    }
    ~~~

3. 
    ~~~javascript
    document.addEventListener('scroll', function() {
    })
    ~~~

<br>

<strong class="subtitle2_fontAwesome">스크롤의 값을 알려주는 property</strong>
    
||은 버티컬로 or을 의미

~~~javascript
window.addEventListener('scroll', function() {
    var top = window.scrollY 
                || window.pageXOffset 
                || document.documentElement.scrollTop 
                || document.body.scrollTop;
})
~~~

여러개의 property를 작성하는 이유는?

자바스크립트도 크로스 브라우징을 따짐, &#160;어떤 property는 익스플로러에서 작동이 안되고 어떤건 크롬에서는 안되고..

- window.scrollY : 익스플로러 제외 모든브라우저에서 지원
- pageYOffset 익스플로러9 미만버전 지원x
- documentElement.scrollTop : 익스플로러 8이하버전까지 고려할때 사용 (크롬에서는 사용x)
- body.scrollTop : 크롬,사파리,엣지,오페라 사용가능

존재하지 않으면 다음꺼 적용, &#160;or 연산자는 앞이 참이면 뒤는 따지지 않음

<br>

<strong class="subtitle2_fontAwesome">기능</strong>

~~~javascript
window.addEventListener('scroll', function() {
    var top = window.scrollY 
                || window.pageXOffset 
                || document.documentElement.scrollTop 
                || document.body.scrollTop;
                
    if(top > 50) {
        fixedNav.classList.add('active');
    } else {
        fixedNav.classList.remove('active');
    }
})
~~~

0은 스크롤 내릴시 바로발동이라 약간의 여유를 두기 위해서 50을 줌

스크롤의 값이 50 초과면 active 클래스 추가, 50 이하면 active 클래스 삭제

결과물을 보면 자연스러운 fade in,&#160; out 효과가 들어가 있다. &$160; 그 이유는 nav영역에 transition을 적용했기 때문

<strong>간단하게 표현</strong>

한줄 코드일때 가독성을 위해 삼항연산자를 사용할 수 있다.

~~~javascript
(top > 50)
        ? fixedNav.classList.add('active')
        : fixedNav.classList.remove('active');
~~~

![scroll](assets/built/images/js/scroll1.jpg)

![scroll](assets/built/images/js/scroll2.jpg)

<br>

<strong class="subtitle2_fontAwesome">추가 응용</strong>

최상위를 기준으로 조건을 만드는게 아니라 스크롤이 내려가는 상태인지 올라가는 상태인지에 따라 배경색을 바꾸고싶다

기준점이 되는 0을 만듬

~~~javascript
var oldVal = 0;

window.addEventListener('scroll', function() {
    var newVal = window.scrollY 
                || window.pageXOffset 
                || document.documentElement.scrollTop 
                || document.body.scrollTop;

   console.log(oldVal, newVal);
})
~~~

![scroll](assets/built/images/js/scroll3.jpg)

스크롤을 내리면 값이 증가할수밖에없음

if를 사용하여 분기를 나누어 준다

~~~javascript
window.addEventListener('scroll', function() {
    var newVal = window.scrollY 
                || window.pageXOffset 
                || document.documentElement.scrollTop 
                || document.body.scrollTop;

// 음수 : 스크롤을 내린상태
    if(oldVal - newVal < 0) {
        fixedNav.classList.add('active');
    }
    
    if(oldVal - newVal > 0) {
        fixedNav.classList.remove('active');
    }
    oldVal = newVal;
})
~~~

맨위면 newval의 값도 0 그러나 스크롤을 내릴수록 값이 커진다

<strong>코드정리</strong>

화면을 들어갔을 때 oldVal, &#160; newVal 모두 0인 상황이지만 스크롤을 내리면 newVal 값이 증가하게 된다

예를들어 스크롤을 1만큼 내리면 0 - 1 = -1 음수가 되어서 첫번째 if조건을 만족하게 된다.&#160; 그래서 active 클래스가 추가되어 nav영역의 색이 검게 변한다

그리고 oldVal = newVal 공식에 의해 oldVal의 값도 1이 된다

여기서 스크롤을 2만큼 더내리면 1 - 3 = -2 음수, &#160; 첫번째 if조건을 만족. 계속 nav 영역은 검은색

oldVal = newVal로 인해 oldVal 값은 3

만약 여기서 스크롤을 2만큼 올리게 되면?&#160; newVal의 값은 3 - 2 = 1 이 된다.

3 - 1 = 2 양수, &#160; 두번째 if조건을 만족. &#160; active 영역이 삭제되면서 nav영역이 흰색으로 변경된다.

<br>

<strong class="subtitle2_fontAwesome">다른 방법</strong>

<strong>권장하지 않는 방법</strong>

계산적인 사고 말고 브라우저가 알아서 내려가고있는 상태인지 올라가고있는상태인지 알려줬으면좋겠다.

~~~javascript
var fixedNav = document.querySelector('nav');

window.addEventListener('wheel', function(e) {
    
    var index = e.wheelDelta

    (index < 0)
        ? fixedNav.classList.add('active')
        : fixedNav.classList.remove('active');
})
~~~
whellDelta는 마우스휠을 내리면 -120, 올리면 120 을 나타냄

마우스휠을 내리면 index 값이 음수가 되니까 active 클래스를 추가, &#160; 올리면 index 값이 양수가 되니까 active 클래스 제거

한가지 문제점은 파이어폭스에서 동작되지않는 부분이다.

파이어폭스에선 wheel이 아닌 DOMMouseScroll, &#160; wheelDelta값이 아닌 e.detail이다.

재밌게도 파이어폭스는 반대로 휠을 내리면 양수, 올리면 음수로 표현된다.
 
~~~javascript
// 파이어폭스 동작
window.addEventListener('DOMMouseScroll', function(e) {
    
    var index = -e.detail;

    // console.log(index);

    (index < 0)
        ? fixedNav.classList.add('active')
        : fixedNav.classList.remove('active');
})
~~~

휠을 내리면 -가 붙어서 음수가 되어 active 클래스를 추가, &#160; 올리면 index 값이 양수가 되니까 active 클래스 제거

<strong>하나의 함수로 만들어서 변경 (간소화)</strong>

~~~javascript
window.addEventListener('wheel', mouseWheelEvt);
window.addEventListener('DOMMouseScroll', mouseWheelEvt);

function mouseWheelEvt(e) {
    var index = e.wheelDelta ? e.wheelDelta : -e.detail;

    (index < 0)
        ? fixedNav.classList.add('active')
        : fixedNav.classList.remove('active');
}
~~~

index부분만 해석해보자면 e.wheelDelta가 존재하면 이걸 사용(크롬), &#160; 존재하지않으면 e.detail을 사용하는데 크롬과 반대이니 -를 적용한 것

<strong>더 간소화</strong>

브라우저가 크롬인지 파이어폭스인지 구분을 지어서 첫번째인수의 값을 적절하게 전달만 해주면 불필요한 코드가 없어진다.

~~~javascript
var fixedNav = document.querySelector('nav');
var isFirebox = navigator.userAgent.indexOf('Firefox') !== -1;
var wheelEvt = isFirebox ? "DOMMouseScroll" : 'wheel'

window.addEventListener(wheelEvt, mouseWheelEvt);

function mouseWheelEvt(e) {
    var index = e.wheelDelta ? e.wheelDelta : -e.detail;

    (index < 0)
        ? fixedNav.classList.add('active')
        : fixedNav.classList.remove('active');
}
~~~

![scroll](assets/built/images/js/scroll4.jpg)

navigator.userAgent를 통해 브라우저를 확인할 수 있는데 이것을 indexOf를 이용해 Firefox 글자가 있나 없나를 판별

파이어폭스 글자가 있을경우 글자가 위치한 좌표값을 알려주고 존재하지 않으면 -1로 나온다.

isFirebox라는 변수에 !== -1을 사용하면 좌표값이 나오면 true, &#160; -1이 나오면 false가 나온다

이걸 활용해서 wheelEvt 변수에 isFirebox가 true면 DOMMouse를 사용하고 아니면 wheel을 사용하게 만들면 크롬과 파이어폭스를 알아서 구분해준다.

즉, wheelEvt는 wheel이 될수도 있고 DOMMouseScroll이 될수도 있다