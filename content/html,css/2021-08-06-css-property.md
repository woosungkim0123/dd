---
layout: post
current: post
cover:  assets/built/images/css.jpg
navigation: True
title: css 속성(property)
date: 2021-09-11 23:40
tags: [html-css]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-css.html %}

<br>

<strong class="subtitle_fontAwesome">css 속성(property)</strong>

<strong class="subtitle2_fontAwesome">background</strong>

공간에 대한 속성

이미지를 넣을때 img태그를 사용하면 잘리는 현상이 없지만 background는 잘림. 거기다 이미지가 공간보다 작으면 반복적인 현상이 일어나게 된다
반복효과제어 - repeat속성 x축으로만 반복 효과를 주고싶으면 repeat-x, 반대는 -y

min width와 max width는 %를 적용한 width 안에서 사용된다. 
상한선,하한선 개념. &#160; height에서도 적용되는 개념
~~~css
/* 예시 */

#bg {
	width: 256px;
	height:	256px;
	background-color: yellow;
	background-image: url(icon.png);
	background-repeat: no-repeat;
	background-position: right top;
}
~~~

<br>

<strong class="subtitle2_fontAwesome">border</strong>

테두리에 대한 속성

border-radius : 테두리를 둥글게 가능

투명한 border
~~~css
border-bottom: solid 2px transparent;
~~~

<br>

<strong class="subtitle2_fontAwesome">font에 영향을 미치는 속성</strong>

- color : 글자색에 영향. &#160; 헥사코드, RGB도 가능
- font-style : italic - 글자 기울이기, initial - 최초상태
- font-family : 복수서체가능 (3개 서체 적용시 앞에서부터 적용가능한 폰트로 적용된다 , &#160; 설정하는 이유는 브라우저마다 사용할 수 있는 폰트가 정해져있어서, 항상 마지막은 sans-serif로 끝냄. 그 이유는 모든 브라우저에서 사용가능한 서체
- text-decoration : underline 밑줄, line-through 중앙선
- text-align : 정렬 
- line-height : 글자간 간격
- letter-spacing : 글자간 좌우간격 조절
- opacity :  투명도에 영향, &#160;1 - 100% 완벽하게,&#160; 0 - 0% 안보임

	- opacity 단점 : 배경뿐만아니라 글자까지도 투명도에 영향을 받음. &#160; 글자에는 영향을 주지않고 배경색만 바뀌길 원할 때 색깔을 rgba로 변경
	- rgba(0,0,0,1) : 앞에 3개숫자가 색상이고 네번째 숫자는 투명도를 말함. 1은 완벽하게 보이는 것, 0은 안보이는 것

<br>

<strong class="subtitle2_fontAwesome">display</strong>

화면에 어떻게 드러나게 할지를 결정하는 속성 

none을 사용해 나타나지 않게 할 수도 있고 block, inline, inline-block 요소로 변경할 수도 있다

<br>

<strong class="subtitle2_fontAwesome">overflow</strong>

내용이 많아져서 박스 영역을 벗어나면서까지 화면에 표기되는 모든 오브젝트를 감추고 싶을 때 사용된다.

hidden 적용하게되면 박스를 벗어나는 모든 오브젝트 감춰지게 된다

벗어난 영역에 무슨 내용물이 있는지 알고싶을 경우는 overflow-y: scroll(x도 가능) 사용. &#160; 사용하게 되면 스크롤이 발생하면서 내용물을 모두 볼 수 있다

<br>

<strong class="subtitle2_fontAwesome">말줄임표시</strong>

보통 글자는 감싸고 있는 영역 크기를 넘어가면 자동줄바꿈이 일어남

- white-space: nowrap; -> 공간을 벗어나는 글자를 줄바꿈 주지않음
- overflow: hidden; -> 범위를 넘어가는 것을 감춤
- text-overflow: ellipsis; -> 벗어나는 글자에 대해 ...표시

<br>

<strong class="subtitle2_fontAwesome">calc</strong>

이 속성을 이용하면 유연하게 배치작업 가능

예시로 검색창에 input과 버튼을 만들때 크기 지정에 많이쓰임

전체 100% 크기안에서 버튼크기를 뺀 width값

~~~css
#main-header .search_wrap input {
	width: calc(100% - 52px);
	height: 100%;
~~~

<br>

<strong class="subtitle2_fontAwesome">button</strong>

클릭에 사용되는 버튼을 만들때 사용되는 속성

서버에 어떤 데이터를 보낼려면 form태그 사용해야하고 type을 button에서 submit으로 변경해야한다.

위에서 말한 calc과 같이 쓰이면 inline-block 요소 두개를 연달아 기입하는 것이기 때문에 미세한 공백이 생기면서 줄바꿈 현상이 일어난다.

줄바꿈현상을 해결하기위해선 부모에 font-size: 0 or flex 사용

<br>

<strong class="subtitle2_fontAwesome">cursor</strong>

해당 영역에 커서시 모양 변경

예시로 a태그에 커서를 가져가면 모양이 바뀌지만 속성값으로 pointer을 적용하면 손가락모양으로 바뀌지 않는다

<br>

<strong class="subtitle2_fontAwesome">box shadow</strong>

공간에 그림자효과 여부

~~~css
#main-header #navbar {
	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
}
~~~

참고사이트 : <a href="https://www.cssmatic.com/box-shadow" target="_blank">boxshadow</a>

<br>

<strong class="subtitle2_fontAwesome">i</strong>

아이콘 넣을때 사용

인라인요소이기 때문에 background image 로 삽입할 떄는 display block or inline-block으로 공간을 만들 수 있는 html 성격으로 변경해주어야함

- 저작권 마크

![copyright](assets/built/images/copyright.jpg)

<br>

<strong class="subtitle2_fontAwesome">min-width</strong>

특정지점이 되었을 때 더이상 줄어들지 않게함.

<br>

<strong class="subtitle2_fontAwesome">스크롤</strong>

영역이 구분되어 있을 때 왼쪽 스크롤과 오른쪽 스크롤은 별개

브라우저에서 지원하는 스크롤 <- 다른 스크롤은 자바스크립트로 만든것

- scroll 은 항상 스크롤이 발생됨

- auto 는 컨텐츠 영역이 넘어가면 그때서야 스크롤이 발생되게 하는것 (선택적으로 스크롤이 나타남)

~~~css
.left-area {
    position: fixed;
    width: 240px;
    background-color: #202024;
    top: 50px;
    bottom: 0;
    left: 0;
    overflow-y: auto;
}
~~~

<br>

<strong class="subtitle2_fontAwesome">-webkit- box</strong>

line-clamp는 몇줄까지 나타나게 할 것인지를 정함.&#160; 밑에 코드 결과는 두줄을 넘어가는 문장에 대해서 두줄 이후 부터 ...으로 보이게 함

~~~css
.box {
	display: -webkit-box;
	overflow: hidden;
	max-height: 38px;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
}
~~~

