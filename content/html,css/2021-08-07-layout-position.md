---
layout: post
current: post
cover:  assets/built/images/css.jpg
navigation: True
title: css 레이아웃, 포지션
date: 2021-09-12 18:40
tags: [html-css]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-css.html %}

<br>

<strong class="subtitle_fontAwesome">레이아웃</strong>

<strong class="subtitle2_fontAwesome">박스모델</strong>

박스모델이란? &#160; 웹사이트를 만들 때 레이아웃의 공백이나 구조를 빠르게 파악할 수 있게 도와주는 옵션

구성요소
1. margin &#160;&#160; 2. border &#160;&#160; 3. padding &#160;&#160; 4. content

![box model](assets/built/images/box.jpg)

margin과 padding은 특정 오브젝트를 옮기고자할때 사용 (좌표배치작업), margin과 padding을 구분짓는 요소를 border라고 보면됨.

주의점
크기를 지정할 때 padding을 고려하여 지정하여야 한다. 예를 들어 200x200 정사각형이 있는데 padding-right를 적용하게 되면 직사각형이 되어버린다. 그걸 방지하기 위해 기본값으로 box-sizing: border-box를 사용한다. 그러면 200x200 정사각형 안에 padding이 생성된다

left, right 각각 지정해주게 되면 코드량이 늘어나기 때문에 한줄로 작성하게 된다 (시계 방향)

~~~css
margin: 100px 0 0 100px;
padding: 100px 0 0 100px;

margin-top: 100px;
margin-right: ;
margin-bottom: ;
margin-left: 100px;
padding-top: 100px;
padding-right: ;
padding-bottom: ;
padding-left: 100px;
~~~

<br>
<br>

<strong class="subtitle_fontAwesome">포지션(position)</strong>

<strong class="subtitle2_fontAwesome">마진병합현상</strong>

마진(margin)병합현상은 인접하는 블록요소의 마진이 병합되는 현상을 말한다.


<i class="fa fa-pencil">&#160;&#160;</i>형제지간

박스1과 박스2가 있고 상하로 배치되어있다(block요소라서). 거기에 박스1에는 margin-bottom 100을 주면 박스2가 100px만큼 밑으로 밀려나게 된다. 이 때 박스2에 margin-top 100px을 주게되면 밀려나서 박스1과 박스2의 거리가 200px이 될 것 같지만 그대로 100px이 유지된다. 이떄 우리는 마진병합현상이 일어났다고 말한다.

즉, 박스1과 박스2는 사이에 공백을 공유하고 있는 것이다. 

만약 박스2가 100px이 아닌 50px을 주게되더라도 결과는 같고 150px을 주게되면 마진의 크기는 병합되는 마진 중에서 큰 값을 가진 마진의 값으로 병합되기 때문에 사이의 공간은 150px이 된다

<i class="fa fa-pencil">&#160;&#160;</i>부모자식

부모자식 관계에 있는 박스1(부모)과 박스2(자식)가 있다 박스2에 margin-top 100px을 주면 부모 안에서 자식이 밑으로 100px만큼 내려갈 줄 알았으나 부모가 같이 100px이 내려온다. 이런 마진병합현상을 해결하기 위해서는 position에 대해 알아야 한다

<br>

<strong class="subtitle2_fontAwesome">차원에 대한 이해</strong>

![postion](assets/built/images/position1.jpg)

2차원은 평면으로 서로 다른 박스가 붙어있을 때 밀게되면 같이 밀리게된다
3차원은 현실세계로서 z축이 존재하고 포토샵에 존재하는 레이어 개념으로 생각하면 이해하기 쉽다.

<br>

<strong class="subtitle2_fontAwesome">부모자식 포지션(position)</strong>

<i class="fa fa-pencil">&#160;&#160;</i>position 공부시 3가지 경우의 수

1.margin-top사용시 부모자식간에 발생하는 마진병합현상 여부
2.top,right,bottom,left 사용가능 여부
3.자식의 높이값이 부모에게 영향을 주는지 여부

<i class="fa fa-pencil">&#160;&#160;</i>poistion 4가지 속성값

1. static 2.fixed 3.relative 4.absolute

<i class="fa fa-pencil">&#160;&#160;</i>poistion을 공부할때 방법

1. 부모자식관계 만들기
2. 부모의 poistion 상태(4)
3. 자식의 poistion 상태(4)

4x4=16 x 3가지 경우의수(margin-top, top,right,bottom,left, height) = 48가지

48가지 경우의수를 완벽하게 이해하면 레이아웃 마스터

<strong>1.&#160;&#160; static</strong>

모든 html은 기본적으로 static 상태

1. magin-top 사용시 마진병합현상 일어남(o)
2. top,right,bottom,left 사용불가(x)
3. 부모의 높이값이 정해지지 않았을 때 자식의 높이값이 부모에게 영향(o)

이런 특징은 2차원의특징 즉, staic은 2차원 영역에 포함되는 속성값

<strong>2.&#160;&#160; fixed</strong>

fixed를 지정한 영역은 화면에 고정되게 된다

1. margin-top 사용시 마진병합 없음(x)
2. top,right,bottom,left 사용가능(o),&#160; top이 움직이는 기준점은 브라우저 왼쪽상단을 기준으로 움직인다. 즉 부모기준이 아닌 브라우저 기준
3. 부모의 높이값이 없을때 자식 높이값 영향없음(x)

이런 특징은 3차원특징, 즉 fixed는 3차원영역에 포함되는 속성값 (static과 완전반대)

<strong>3.&#160;&#160; relative</strong>

1. margin-top 사용시 마진병합있음(o)
2. top,right,bottom,left 사용가능(o),&#160; top 부모기준으로 움직임(브라우저기준 x)

3. 자식의 높이값이 부모에게 영향있음(o)

2차원 + 3차원 특징을 가지고있음 (혼합형)

<strong>4.&#160;&#160; absolute</strong>

1. margin-top 사용시 마진병합현상 없음(x)
2. top,right,bottom,left 사용가능(o)
3. 자식의 높이값이 부모에게 영향없음(x)
3차원적인 특징을 가지고있음(fixed와 동일)

absolute는 top,right,bottom,left 값이 부모가 어떤 포지션이냐에 따라 좌표기준점이 달라진다
static(2차원)은 좌표기준점이 브라우저 기준, 부모가 3차원성격(fixed,absolute)이면 좌표기준점이 그 부모를 기준으로 형성된다.&#160; relative도 2,3차원 특징을 가지고있어서 부모를 기준으로 형성

![position](assets/built/images/position2.jpg)

![position](assets/built/images/position3.jpg)


<strong>top과 margin, padding 차이점</strong>

margin과 padding은 공백에 밀려서 움직이게 되고 top,right,bottom,left은 자기가 주체가 되어서 움직인다

<br>

<strong class="subtitle2_fontAwesome">형제관계 포지션(position)</strong>

첫번째 형제에게 순수한 3차원 포지션속성값(fixed, absolute) - 레이어 겹침 O

첫번째 형제에게 2차원이 포함된 포지션속성값(static, relative) - 레이어 겹침 X

첫번째형제의 포지션이 2차원이냐&#160; 3차원이냐에 따라 레이어가 겹칠지 안겹칠지가 정해짐

![position](assets/built/images/layerdub.jpg)

부모자식간 48개 + 형제지간 16개 = 완벽

<br>

<strong class="subtitle2_fontAwesome">z-index</strong>

z축에 영향을 미치는 속성

형제관계에 absolute, fixed (3차원 성격)를 사용하게되면 레이어가 겹치는 현상이 발생하게된다. 이럴 경우 z인덱스를 통해 자유자재로 조절할 수 있다.

z인덱스를 적용하지않은 영역은 최초값 0이고, 더높은 숫자를 가진 영역이 위로 올라온다.

z-index는 z축이 필요(3차원) 즉 3차원영역에서만 사용가능하고 이러한 3차원 특징을 가지고있는 position 속성값(fixed, relative, absolute)에만 적용이 가능하다.

static은 z축이 없어서 불가