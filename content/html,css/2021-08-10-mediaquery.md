---
layout: post
current: post
cover:  assets/built/images/css.jpg
navigation: True
title: 미디어쿼리
date: 2021-09-13 21:40
tags: [html-css]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-css.html %}

<br>

<strong class="subtitle_fontAwesome">미디어쿼리</strong>

<strong class="subtitle2_fontAwesome">기본개념</strong>

반응형 적응형 웹사이트를 만들때 사용

모바일, 태블릿 환경에 맞게 자연스러운 변화를 주는 css코드

<br>

<strong class="subtitle2_fontAwesome">적용방법</strong>

1. css파일 안쪽에 @media 코드를 기입하는 방식 (실무에서 많이 사용)

2. 모바일버전용 파일을 따로 만드는 것 (moblie.css), &#160; 그 안에 @media 코드를 적용시키고 index.html에서 link로 mobile.css를 적용

<br>

<strong class="subtitle2_fontAwesome">기준점</strong>

media의 기준점을 만들어줘야한다

사용자가 웹사이트에 접속했을때 pc로 접속했는지 모바일로 접속했는지 알 수 있는 직관적인 방법은 바로 사용자가 접속한 기기의 width값을 기준으로 파악

- 320px이상 768px미만 : 스마트폰
- 768px 이상 1024px 미만 : 태블릿
- 1024px 이상 : pc

브라우저 폭을 줄였을때 미디어쿼리로 만들어놓은 기준점에 도달하게 된다면 pc class의 css는 미디어쿼리 안쪽에 작성된 코드를 기반으로 적용됨

~~~css
@media (min-width: 300px) and (max-width: 767px) {
    .pc {
        color: blue;
        font-size: 20px;
        background-color: yellow;
    }
}
~~~

<br>

<strong class="subtitle2_fontAwesome">주의점</strong>

1. pc버전에서 css를 모바일버전에서는 다르게 적용해야 할 때는 미디어쿼리 바깥쪽 코드를 매번 확인해가면서 변경해줘야한다. 그렇지 않으면 미디어쿼리 바깥쪽에 있는 코드가 미디어쿼리 안쪽에도 상속된다

pc버전용 css파일과 모바일버전 css파일을 따로 만드는 방법도 있음

2. 미디어쿼리를 사용하면 반드시 넣어줘야하는 meta 태그가 있음

    - viewport : 웹사이트에 접속하는데 이용되는 기기화면을 의미
    - width=device-width : 웹사이트 width값은 device의 width값으로 적용시키겠다는 의미
    - initial-scale : 비율은 항상 1.0을 유지한다는 의미

    ~~~css
    <head>
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    ~~~

![viewport](assets/built/images/veiwport.jpg)   

<br>

<strong class="subtitle2_fontAwesome">방향</strong>

orientation : 스마트폰 가로모드(landscape),&#160; 세로모드(portrait)
    
일반적으로 세로모드로 적용하는 경우가 많고 아니면 orientation을 따로 사용하지않고 새로운 기준점을 더 추가 해주는 방식 사용

<br>

<strong class="subtitle2_fontAwesome">display 응용</strong>

pc 접속시 모바일영역 글씨는 보여주면 안됨, 반대로 모바일 접속시 pc버전의 코드는 사용자에게 노출시켜서는 안됨

이럴때는 class를 display : none 처리 해뒀다가 해당영역 작업시 바꿔주면 된다

<br>

<strong class="subtitle2_fontAwesome">효율적인 작업</strong>

모바일 버전 -> 태블릿 -> pc버전 순으로 모바일버전부터 작업하고 미디어쿼리로 다른 스크린을 작업하게되면 좀더 수월하게 작업이 가능하다

minwidth 값을 더 추가해서 이전에 작성된 minwidth 값보다 더 큰 수치를 넣었으면 768px이 작성된 미디어쿼리에 maxwidth는 작성하지 않아도 1024미만의 수치를 자연스럽게 가지게 된다.

1024는 pc버전 768은 태블릿버전 미디어쿼리 바깥쪽은 모바일버전으로 css 

~~~css
@media (min-width: 768px) {
    h1 {
        font-size: 40px;
        background-color: pink;
    }
}
@media (min-width: 1024px) {
    h1 {
        font-size: 80px;
        background-color: gray;
    }
}
~~~



![media](assets/built/images/css/media1.JPG)