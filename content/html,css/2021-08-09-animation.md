---
layout: post
current: post
cover:  assets/built/images/css.jpg
navigation: True
title: Animation
date: 2021-09-13 20:40
tags: [html-css]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-css.html %}

<br>

<strong class="subtitle_fontAwesome">Animation</strong>

<strong class="subtitle2_fontAwesome">transform</strong>

간단한 애니메이션은 css로도 구현 가능함

선택한 오브젝트 크기를 확대,&#160; 축소,&#160; 회전,&#160; 위치변경&#160; 하는데 사용

- rotate : 2차원 회전효과, &#160; 값은 양수(오른쪽회전), 음수(왼쪽회전) 모두 가능 

~~~css
.transform {
	transform: rotate(45deg);
}    
~~~

- scale : 크기를 비율로 키울 때 사용. &#160;값은 차례대로 x축,&#160; y축 

    줄이고 싶으면 소수점 단위로 주면됨 (0.5, 0.5 = 0.5배, 0.5배)
    
    scale은 적용한 영역의 자식에게까지 영향을 미침

~~~css
.transform {
    transform: scale(2, 3);
}  
~~~

- skew : 각도에 영향을 미치며 3차원적인 회전효과를 구현할때 사용. 

    값은 차례대로 x축 회전, y축 회전 (양수, 음수 둘다가능)

~~~css
.transform {
    transform: skew(10deg, 20deg);
}
~~~

- translate : 선택한 영역의 위치를 변경할 때 사용. &#160;값은 차례대로 x축, y축

~~~css
.transform {
	transform: translate(100px, 300px);
}
~~~

<br>

<strong class="subtitle2_fontAwesome">Prefix</strong>

예를 들어 transform를 (익스플로러 10.0 이상 사용가능) 9.0에서도 사용하고싶다. 

이때 속성앞에 prefix를 달아두면됨(그 이하는 불가), &#160;하위버전까지 고려하는것

webkit (크롬,사파리) moz(파폭) ms(익스플로러) o(오페라)

prefix가 없는 transform을 default(기본값)으로 넣어주면됨

~~~css
.transform {
	-webkit-transform: rotate(10deg);
	-moz-transform: rotate(10deg);
	-ms-transform: rotate(10deg);
	-o-transform: rotate(10deg);
    transform: rotate(10deg);
}
~~~

<br>

<strong class="subtitle2_fontAwesome">transition</strong>

css 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공한다. &#160; 자연스러운 효과적용을 위해 자주 사용

- property - 변화하고자 하는 영역

- duration - 애니메이션이 진행되는 시간(s:초)

- timing - 애니메이션이 움직이는 속도의 성격

    linear : 시작부터 끝까지 일정한 속도 유지

- delay - 바로 시작되는 것이 아니라 약간의 딜레이 이후 효과를 발동

~~~css
.transition {
	transition-property: width;
	transition-duration: 2s;
	transition-timing-function: linear;
	transition-delay: 1s;
}
~~~

한줄로 정리가능. &#160;  순서는 상관없고 먼저 나오는 숫자가 duration, 나중이 delay

즉, 하나만 적으면 duration만 적용됨

~~~css
.transition {
	transition: width 2s linear 1s
}
~~~

변화를 주고자하는 속성을 , 를 통해 계속 늘려갈 수 있음

~~~css
.transition {
	transition: width 2s linear 1s, height 2s linear;
}
~~~

transition에 all 속성값을 넣으면 모든 속성이 transition 효과를 받게된다

~~~css
nav {
    transition: all 0.5s;
}
~~~

<br>

<strong class="subtitle2_fontAwesome">animation</strong>

- animation-name : 애니메이션 이름

- duration, timing, delay는 transition과 동일

- animation-iteration-count : 실행 횟수 (infinite : 무한반복)

- animation-direction : 진행방향 (normal,&#160; alternate : 왕복)

- 주의사항 : 왕복은 돌아올 때도 iteration-count 소모,&#160; 실행횟수가 6번이면 왕복을 3번만 한다.

~~~css
.animation {
    width: 300px;
    height: 300px;
    background-color: tomato;

    animation-name: changeWidth;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
~~~

<br>

<strong class="subtitle2_fontAwesome">keyframe</strong>

애니메이션 효과 구현을 위해 필연적으로 따라와야한다

뒤에 animation 이름을 적어서 서로 연동시켜준다

keyframe 안쪽에는 실제 애니메이션이 발동하는 형태값을 입력

from : 시작,&#160;  to : 끝

from ~ to 뿐만아니라 0%,&#160; 50%,&#160; 100% &#160;자세하게 특정지점을 지정할 수 있다

~~~css
@keyframes changeWidth {
    0% {
        width: 300px;
        height: 300px;
        background-color: tomato;
        border: solid 0px blue;
    }
    50% {
        background-color: brown;
    }
    100% {
        width: 600px;
        height: 600px;
        background-color: yellowgreen;
        border: solid 10px blue;
    }
}
~~~

<br>

<strong class="subtitle2_fontAwesome">animation prefix</strong>

animation은 keyframes와 같이 사용하게 되는데, 애니메이션에 prefix를 붙였다면 prefix를 붙인 keyframes를 또 만들어줘야한다.

표준을 지원하는 브라우저(기본값)이 들어가 있어야함

keyframes 앞에 prefix를 달았다고해서 안에 내용물을 대표하지않는다. &#160; 하나 하나 다 달아줘야한다.

~~~css
.spin-lion {
    -webkit-animation: spinLion 1500ms linear infinite alternate;
    animation: spinLion 1500ms linear infinite alternate;
}
@-webkit-keyframes spinLion {
    from { -webkit-transform: rotate(-10deg); }
    to { -webkit-transform: rotate(10deg); }
}
@keyframes spinLion {
    from { transform: rotate(-10deg); }
    to { transform: rotate(10deg); }
}
~~~

<br>

<strong class="subtitle2_fontAwesome">추천 사이트</strong>

복잡한 애니메이션을 만들때 유용한 사이트

<a href= "https://jeremyckahn.github.io/stylie/" target="_blank">stylie</a>

<a href= "https://animate.style/" target="_blank">animate.css</a>

<a href= "https://codepen.io/" target="_blank">codepen</a>

<br>

<strong class="subtitle2_fontAwesome">animation 추가 속성</strong>

- play-state : running(브라우저에 접속하자마자 동작), &#160;paused(움직이지않음)
- fill mode : backwards

    예를들어 최초 박스의 색깔은 red인데 애니메이션 색상은 green이면 애니메이션이 부자연스러워짐 - 빨간색이였다가 갑자기 초록색으로 바뀜

    박스색깔과 애니메이션 색상이 동일하게 하는게 대부분인데 그게 아닐경우 최초 사용자가 접속했을 때 green으로 보였으면 할때 backwards 사용

    backwards 사용하면 animation 0%에서 입력된 상태를 기준으로 해서 최초화면을 보여주는것
    ~~~css
    .mover-box {
	animation-play-state: paused;
	animation-fill-mode: backwards;
    ~~~

