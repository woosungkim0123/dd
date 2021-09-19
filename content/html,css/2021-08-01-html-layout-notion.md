---
layout: post
current: post
cover:  assets/built/images/html.jpg
navigation: True
title: HTML 레이아웃, 기본개념
date: 2021-09-09 20:57
tags: [html-css]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-html.html %}

<br>

<strong class="subtitle_fontAwesome">웹사이트의 레이아웃</strong>

<strong class="subtitle2_fontAwesome">정적인 웹사이트(static)</strong>


공간크기의 변화가 없고 레이아웃 구조자체도 변하지 않는다.<br>
항상 원래 형태를 유지하고 있다.

<br>

<strong class="subtitle2_fontAwesome">동적인 웹사이트(Liquid) </strong>

브라우저 크기에 맞춰 공간크기가 줄어들거나 늘어나는 웹사이트. <br>
레이아웃 구조는 변하지 않음.

<br>

<strong class="subtitle2_fontAwesome">적응형 웹사이트(Adaptive) </strong>


'뚝뚝 끊어지며' 공간크기가 달라지고 최종적으로는 레이아웃 구조자체도 변함. <br>
pc뿐만 아니라 노트북, 스마트폰 등 다양한 기기에 맞춰 website를 제작해야할 필요성이 생겨서 등장.

<br>

<strong class="subtitle2_fontAwesome">반응형 웹사이트(Responsive) </strong>


공간이 '자연스럽게' 늘어나거나 줄어들고(resize) 특정지점에서 적응형과 마찬가지로 레이아웃 구조자체가 변함. 

<br>

<strong class="subtitle_fontAwesome">기본개념</strong>

html을 배운다는 것은 태그가 무엇이고 그에 대응하는 속성을 알고 속성값을 내가 커스텀 할 수 있는지 아니면 정해진 규칙대로 따라야하는지 암기하는 언어이다. </p>

![html structure](assets/built/images/tagstruct.jpg)

DOCTYPE html = html5(최신html문법)으로 작성하겠다

head는 요약정보를 담는 곳 <br>
meta는 요약, 정보, 기타 등을 담아낼때 사용하는 태그 <br>
charset = utf-8 은 문자를 세팅하는 것이다(기본적으로 들어감)

<i class="fa fa-pencil">&#160;&#160;description은 웹사이트의 간단한 한줄요약을 뜻하고 구글검색엔진에 뜰 확률UP</i>

<i class="fa fa-pencil">&#160;&#160;keyword는 웹사이트와 관련된 단어정보, 블로그 태그역활 즉, 구글검색엔진 확률UP </i>

<i class="fa fa-pencil">&#160;&#160;author은 사이트 소유자 or 만든이 </i>

meta 태그의 3가지 속성은 구글검색에 잘 걸리기 위해서 설정하는것(낚시성 사이트로 인해 최근에 바뀜)

link 태그를 이용해 홈페이지 아이콘 생성가능 - 이미지 위치입력(상대주소), 인터넷주소 입력(절대주소)

~~~html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"> 
    
	<meta name="description" content="Web Tutorial">
	<meta name="keywords" content="html, css, tutorial, web">
	<meta name="author" content="Woosung Kim">
    
	<title>HTML, CSS Tutorial</title>
	<link rel="shortcut icon" type="image/icon" sizes="32x32" href="favicon.ico">
</head>
~~~