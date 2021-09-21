---
layout: post
current: post
cover:  assets/built/images/html.jpg
navigation: True
title: inline vs block
date: 2021-09-10 19:17
tags: [html-css]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-html.html %}

<br>

<strong class="subtitle_fontAwesome">inline vs block</strong>

<strong class="subtitle2_fontAwesome">inline</strong>

text 크기만큼만 차지하고 줄바꿈을 하지 않는다, span을 예로 들 수 있다

- width/height 사용 X
- margin/padding - top/bottom 사용 X

<br>

<strong class="subtitle2_fontAwesome">inline</strong>

공간을 만들수 있으며 글자가 줄바꿈되면서 y축으로 정렬됨, div를 예로 들 수 있다

- width/height 사용 O
- margin/padding - top/bottom 사용 O

<br>

<strong class="subtitle2_fontAwesome">inline-block</strong>

inline 속성의 특징과 block 속성의 특징 둘 다 가지고 있다 (예시 : img태그)

기본적으로 inline 속성과 비슷한데(줄바꿈을 하지않음) block 요소도 가지고 있음

- width/height 사용 O
- margin/padding - top/bottom 사용 O

<i class="fa fa-glass"></i> &#160; 고려사항

inline-block 사이에 공백이 생기게 되는데, 부모 태그에 font-size: 0를 적용하면 해결된다.
inline-block 끼리 높이가 안맞을 때 상위 공백이 생기게 되는데 vertical-align: top을 적용하면 해결할 수 있다.

