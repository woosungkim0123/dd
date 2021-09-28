---
layout: post
current: post
cover:  assets/built/images/css.jpg
navigation: True
title: css 변수
date: 2021-09-13 23:40
tags: [html-css]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-css.html %}

<br>

<strong class="subtitle_fontAwesome">변수</strong>

<strong class="subtitle2_fontAwesome">기본개념</strong>

최근 css언어에서 변수라는 개념이 등장하기 시작함

어떤 박스가 있는데 박스 안에 애플을 넣었다

이때 박스가 변수, 애플이 값 or 데이터 라고 한다.

즉, 박스 안에 들어가는 내용물을 값, 데이터, value라고 표현한다.&#160;  그리고 이러한 데이터를 담아내는 박스를 변수라고한다

![value](assets/built/images/value-1.jpg)

이러한 변수는 우리가 원하는 이름으로 넣을 수 있다.

예를 들어 사과박스라는 변수를 만들면 사과박스 자체가 변수고 사과박스라는 이름을 변수명이라고 한다

이런 변수를 사용한 사이트의 코드를 예시로 보자

![value](assets/built/images/value-2.jpg)

밑줄친 빨간색부분을 변수라고 할 수 있다.

<br>

<strong class="subtitle2_fontAwesome">주의점</strong>

1. 익스플로러에서 거의 사용 안됨

2. -&#160;-을 안쓰면 변수가 만들어지지않음

<br>

<strong class="subtitle2_fontAwesome">변수 생성</strong>

변수를 만드는 방법은 간단하다.

root에 변수들을 정의해놓고 사용할 곳에 var을 사용후 변수명을 넣으면 된다

--black, --purple 같은 것들이 변수이고 뒤에 들어간 속성값은 데이터이다

~~~css
:root {
	--black: #18181a;
	--purple: #9147ff;
	--font-size-40: 40px;
	--brand-color: yellow;
}

h1 {
	background-color: var(--black);
	font-size: var(--font-size-40);
	color: var(--purple);
}

h2 {
	color: var(--brand-color);
}
~~~

![value](assets/built/images/value-3.jpg)

![value](assets/built/images/value-4.jpg)

마우스를 해당 변수에 올려두면 정확한 수치가 나온다

<br>

<strong class="subtitle2_fontAwesome">사용 이유</strong>

<i class="fa fa-pencil">&#160;&#160;</i> 일괄적 수정작업

예를 들어 브랜드컬러가 기존에는 자주색이였는데 옐로우로 바꿀려고 할 떄 변수에 있는 값을 yellow로 변경하게 되면 나머지 변수 안에 있는 값들도 한꺼번에 바뀌게 된다

즉, 일괄적으로 어떤 수정작업을 진행할 때 변수가 굉장히 편하게 사용될 수 있음

<i class="fa fa-pencil">&#160;&#160;</i> 직관적 이해

brandcolor라고 변수명을 지으면 #9147ff보다 더 직관적으로 이해하기가 쉽다

<br>

<strong class="subtitle2_fontAwesome">또다른 사용방법</strong>

변수를 root라는 방식말고 다르게 정의하는 방법이 있다

root라는 영역 안에 변수를 넣게되면 어떤 영역에서든 가져다가 사용할 수있는 변수로 된다

변수를 사용하는 범위를 제한을 두려면 css선택자를 사용해서 지정 할 수있다.

~~~html
<header id="intro">
	<p>Header P</p>
</header>

<footer id="footer">
	<p>Footer P</p>
</footer>
~~~
~~~css
#intro {
	--font-color: blue;
	--font-size: 50px;
}
~~~

이렇게 되면 이 변수는 intro에서만 사용할 수 있다

~~~css
#intro p {
	font-size: var(--font-size);
	color: var(--font-color);
}

#footer p {
	font-size: var(--font-size);
	color: var(--font-color);
}
~~~

header와 footer에 각각 변수를 적용해보면 header에는 적용되지만 footer에는 적용되지 않는 것을 알 수 있다

![value](assets/built/images/value-5.jpg)

지금처럼 내가 사용하는 변수가 영향력을 발휘하는 범위를 css선택자를 사용해서 지정할 수있음