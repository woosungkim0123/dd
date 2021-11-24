---
layout: post
current: post
cover:  assets/built/images/js-model.png
navigation: True
title: Mouse Animation
date: 2021-09-25 13:10
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascriptmodel.html %}

<br>

<strong class="subtitle_fontAwesome">Mouse Animation</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

이미지에 마우스를 이동시켯을 때 이미지가 움직이는 효과

<br>

<strong class="subtitle2_fontAwesome">html, &#160; css 작업</strong>

~~~html
<div class="page-container">
	<div class="page-back"></div>
</div>
~~~

~~~css
.page-container {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #ffffff;
}

.page-back {
    position: absolute;
    width: 120%;
    height: 120%;

    left: -10%;
    top: -10%;

    background-image: url("bg.jpg");
    background-size: cover;
    background-position: center;
}
~~~

자식의 크기가 부모보다 20% 더 큼, &#160; 상하좌우 모든 영역에 10% 더 이미지가 있는 상태

cover로 인해서 줄였다가 늘였을 때 알아서 resize가 됨

이미지를 cover과 center로 중앙으로 맞춰놓았음, &#160;그래서 브라우저가 커져도 이미지는 중앙쪽을 조명함

<br>

<strong class="subtitle2_fontAwesome">mousemove</strong>

마우스가 움직일때마다 작동

~~~javascript
var pageContainer = document.querySelector(".page-container");
var pageBack = document.querySelector(".page-back");

pageContainer.addEventListener('mousemove', function() {
})
~~~

<br>

<strong class="subtitle2_fontAwesome">windowWidth, windowHeight</strong>

window = 브라우저

window property 안에 있는 innerWidth property를 사용

현재 브라우저의 안쪽 크기를 숫자로 가져옴, &#160; 이 값은 브라우저크기 상황에 따라 매번 값이 바뀐다

~~~javascript
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
~~~

<br>

<strong class="subtitle2_fontAwesome">pageX,&#160; pageY</strong>

두번째 인수로 전달한 함수에 e 매개변수 전달해서 이벤트객체를 사용

e를 찍어보면 안에 pageX , pageY 가 마우스 좌표값을 의미

~~~javascript
pageContainer.addEventListener('mousemove', function(e) {
    console.log('pageX', e.pageX);
    console.log('pageY', e.pageY);
})
~~~

![mouseanimation](assets/built/images/js/mouse1.jpg)

<br>

<strong class="subtitle2_fontAwesome">이동시키는법</strong>

왜 자식의 크기를 더 크게 함?

![mouseanimation](assets/built/images/js/mouse2.jpg)

흰색(보이는 영역)이 움직이는게 아니라 빨간색(그림)을 움직여서 상하좌우로 마우스 이동시 화면이 이동하는 것처럼 보이게 됨

~~~javascript
pageContainer.addEventListener('mousemove', function(e) {
  
    var moveX = ((windowWidth / 2) - e.pageX) * 0.1;
    var moveY = ((windowHeight / 2) - e.pageY) * 0.1;
})
~~~

브라우저 가로와 세로 길이를 나누어준 이유는 바로 중앙을 기준점으로 하기위해서이다

<strong>예시</strong>

브라우저의 크기가 1400일때 2로 나누게 되면 700이 중앙이다

e.pageX를 보면 중앙을 기준으로해서 중앙에서 오른쪽으로 가면 700이상의 숫자가 되고 중앙에서 왼쪽으로 가게 되면 700이하의 숫자가 된다. &#160; 왼쪽 끝으로가면 0, 오른쪽 끝으로 가면 해당 브라우저의 크기인 1400이 된다

위에 공식을 이용해보면 중앙보다 오른쪽으로 마우스를 이동하면 음수가 되고 왼쪽으로 마우스를 이동하면 양수가 된다

y축도 마찬가지로 중앙을 기준으로 위로 마우스를 이동하면 양수,&#160; 아래로 이동하면 음수가 된다

<strong>왜 이런식을 구한것인가?</strong> 

바로 그 이유는 이 수치를 이용해서 margin으로 그림을 이동시켜줄 것이기 때문이다

화면은 그대로 있고 margin으로 그림을 이동시켜준다면 화면이 이동하는 것과 같은 효과를 줄 수 있다

거기다 마진값을 마우스 좌표로 설정하게되면 마우스가 이동되면서 화면이 이동되는 결과물을 도출할 수 있다

<strong>예시 2</strong>

만약 중앙에서 마우스를 오른쪽으로 이동하게 된다면

700 - 860 = -160의 음수가 나온다. &#160; 마진값으로 쓰기엔 값이 너무 크기 때문에 0.1을 곱해주면 -16 이 된다

margin-left : - 16 = margin-right : 16

화면보다 큰 그림이 오른쪽 16만큼 이동하게 된다

<br>

<strong class="subtitle2_fontAwesome">기능</strong>

``(백틱)을 이용해도 되고 그냥 따로적어도 된다

~~~javascript
pageBack.style.marginLeft = moveX + 'px';
pageBack.style.marginTop = moveY + 'px';
pageBack.style.marginTop = `${moveY}px`;
~~~

margin left,top보다는 움직임이있는 애니메이션을 만들때는 cs3에 새롭게 등장한 tranform - translate 사용하는게 조금 더 성능 측면에 효율적

~~~javascript
pageBack.style.transform = `translate(${moveX}px, ${moveY}px)`;
~~~

![mouseanimation](assets/built/images/js/mouse3.jpg)

<br>

<strong class="subtitle2_fontAwesome">코드정리</strong>

~~~javascript
var pageContainer = document.querySelector(".page-container");
var pageBack = document.querySelector(".page-back");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

pageContainer.addEventListener('mousemove', function(e) {

    var moveX = ((windowWidth / 2) - e.pageX) * 0.1;
    var moveY = ((windowHeight / 2) - e.pageY) * 0.1;

    pageBack.style.transform = `translate(${moveX}px, ${moveY}px)`;
})
~~~