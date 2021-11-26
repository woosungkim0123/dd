---
layout: post
current: post
cover:  assets/built/images/js-model.png
navigation: True
title: 아코디언 메뉴
date: 2021-09-27 12:10
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascriptmodel.html %}

<br>

<strong class="subtitle_fontAwesome">아코디언 메뉴</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

아코디언 메뉴는 클릭시 펼쳐지고 다시 클릭시 접혀지는 메뉴를 말함

악기 아코디언처럼 접혔다 펴졌다 하는 모양에서 유래

<br>

<strong class="subtitle2_fontAwesome">html,&#160; css 작업</strong>

~~~html
<div class="wrapper">
	<h1>Accordion</h1>

	<button class="accordion" type="button">Section 1</button>
	<div class="panel">
		<p>Nice to meet you Nice to meet youNice to meet you Nice to meet youNice to meet you
				Nice to meet youNice to meet youNice to meet youNice to meet youNice to meet you
		</p>
	</div>

	<button class="accordion" type="button">Section 2</button>
	<div class="panel">
		<p>Nice to meet you Nice to meet youNice to meet you Nice to meet youNice to meet you
				Nice to meet youNice to meet youNice to meet youNice to meet youNice to meet you
		</p>
	</div>
...
</div>
~~~

css에서 설명에 불필요한 부분 제거

~~~css
button.accordion {
    background-color: red;
    transition: all 0.4s;
}

button.accordion.active,
button.accordion:hover {
    background-color: #9b0a07;
}

.panel {
    overflow: hidden;
    color: #000000;

    max-height: 0;
    transition: max-height 0.2s linear;
}
~~~

버튼 영역에 마우스가 올라가거나 active클래스가 추가되면 배경색이 변함. &#160; transition으로 색깔이 부드럽게 변함

글자부분에 max-height를 0을 주고 overflow-hidden을 적용하면 안보이게됨

js로 max-height부분을 조정할 것임

max-height가 변하는 부분에 transition을 줘서 부드럽게 변하도록 설정

<br>

<strong class="subtitle2_fontAwesome">기능 작업</strong>

~~~javascript
var btns = document.querySelectorAll('.accordion')

console.log(btns);
~~~

![aco](assets/built/images/js/aco1.jpg)

버튼영역을 js로 가져옴

~~~javascript
btns.forEach(function(aa) {
    console.log(aa);
})  
~~~

![aco](assets/built/images/js/aco2.jpg)

반복문을 사용했기 때문에 각각의 버튼들이 하나 하나씩 출력이 됨

aa영역 안에다가 addEventListener을 각각 추가해줄것임 (반복문이니까)

내가 클릭한 버튼이 어떤 버튼인지 알기위해서 this를 알아보자

~~~javascript
btns.forEach(function(aa) {

    aa.addEventListener('click', function() {

        console.log(this);
    })
}) 
~~~

![aco](assets/built/images/js/aco3.jpg)

여기서 this는 내가 클릭한 영역을 가르킴

toggle을 사용. &#160; active가 존재하면 추가해주고 없으면 삭제함

~~~javascript
btn.addEventListener('click', function() {

        this.classList.toggle('active');

    })
~~~

클릭하면 active가 적용되서 색깔이 변경되고 다시 클릭하면 색이 원래대로 돌아옴

이제 밑에 숨겨놓은 글이 보이는 기능을 만들어보자


~~~javascript
btn.addEventListener('click', function() {

    this.classList.toggle('active');

    var panel = this.nextElementSibling;
    console.log(panel.scrollHeight);
~~~

![aco](assets/built/images/js/aco4.jpg)

this.nextElementSibling의 의미는 현재 내가 클릭한 지점의 바로 다음에 나오는 형제&#160; 즉,&#160; 내가 클릭한 영역의 바로 다음 형제인 panel을 선택

다음 다음 형제를 선택하고 싶으면 nextElementSibling.nextElementSibling  이어서 작성

scrollHeight property는 스크롤바를 움직이지않고 현재 눈에 보이는 요소의 높이값을 가져올떄 사용

max-height를 무시하고 가져오고 있음

~~~javascript
btns.forEach(function(btn) {

    btn.addEventListener('click', function() {

        this.classList.toggle('active');

        var panel = this.nextElementSibling;

        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})  
~~~

if문과 숫자 0이 만나면 false로 인식한다

만약 maxheight가 0이면 panel부분에 maxheight의 값을 scrollheight의 값으로 바꾸어라

만약 maxheight에 값이 존재한다면 maxheight의 값을 0으로 바꾸어라 (null을 전달해도 됨)

![aco](assets/built/images/js/accordion.jpg)