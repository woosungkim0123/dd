---
layout: post
current: post
cover:  assets/built/images/jquery.png
navigation: True
title: 제이쿼리 실습
date: 2021-09-27 23:58
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-jquery.html %}

<br>

<strong class="subtitle_fontAwesome">체크박스</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

버튼 클릭시 클래스가 추가되면서 버튼색이 바뀌는 기능

<br>

<strong class="subtitle2_fontAwesome">html,&#160; css</strong>

~~~html
<i class="favorites_icon"></i>
<i class="favorites_icon"></i>
<i class="favorites_icon"></i>
~~~

~~~css
.on {
  background: yellow;
}
~~~

설명에 필요없는 css 생략

<br>

<strong class="subtitle2_fontAwesome">기능</strong>

~~~javascript
var $favoritesIcon = $('.favorites_icon');

$favoritesIcon.click(function() {

    if($(this).hasClass('on')) {
        $(this).removeClass('on')
    } else {
        $(this).addClass('on')
    }
})
~~~

클릭시 선택한 영역(this) on 클래스가 있으면 없애고 없으면 추가해라

좀 더 간단하게 작업 가능

~~~javascript
$favoritesIcon.click(function() {
    $(this).toggleClass('on') 
})
~~~

![jqp](assets/built/images/js/jp1.jpg)

<br>
<br>

<strong class="subtitle_fontAwesome">체크박스 ++</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

다양한 메서드를 활용하여 작업

li영역 클릭시 중간에 아이콘 등장. &#160; 그리고 다른 li영역 클릭시 기존의 아이콘은 사라지고 클릭한 영역에만 아이콘이 생김

<br>

<strong class="subtitle2_fontAwesome">html,&#160; css</strong>

~~~html
<ul>
    <li class="select one">
        <i class="check_icon"></i>
    </li>
    <li class="select two">
        <i class="check_icon"></i>
    </li>
    <li class="select three">
        <i class="check_icon"></i>
    </li>
</ul>
~~~

~~~css
.check_icon {
  display: none;
  width: 20px;
  height: 20px;
  background: yellow;
  margin-top: 15px;
}
.select.on .check_icon {
  display: inline-block;
}
~~~

select에 on클래스가 추가되면 display가 변경되도록 만들것임

<br>

<strong class="subtitle2_fontAwesome">기능</strong>

~~~javascript
var $select = $('.select');

$select.click(function() {
    $select.removeClass('on');
    $(this).addClass('on');
})
~~~

이 방식은 전체영역에 on클래스를 다 삭제시키고 클릭한 영역에 on클래스 적용

이 방법은 코드의 순서가 굉장히 중요.

이러한 단점을 보완해서 만들어보자

~~~javascript
$select.click(function() {
    $(this).addClass('on').siblings().removeClass('on');
})
~~~

this 영역에 on을 추가

siblings을 사용하면 내가 클릭한 영역을 제외하고 나머지 형제관계들을 모두 가져옴

two를 클릭하게되면 형제관계로있는 one three를 가져오고 one을 클릭하면 two와 three를 가져옴

나머지 형제들에 대해서 on 클래스를 제거하면 된다.

![jqp](assets/built/images/js/jp2.jpg)

<br>
<br>

<strong class="subtitle_fontAwesome">popUp</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

프로필사진있고 마우스를 오버했을떄 프로필사용자의 상세정보를 팝업보여주는 기능

노란색영역에 마우스를 올릴시 핑크색영역이 보이게할거고 마우스를 떼면 핑크색영역이 없어지는기능

<br>

<strong class="subtitle2_fontAwesome">html,&#160; css</strong>

~~~html
<div class="porfile-wrap">
    <div class="profile"></div>
    <div class="profile-popup">
        <h2>기발자</h2>
        <p>010-3333-1111</p>
        <p>test@gmail.com</p>
    </div>
</div>
~~~

~~~css
.profile-popup {
  display: none;
}
~~~

필요한 css 이외 생략

<br>

<strong class="subtitle2_fontAwesome">기능</strong>

~~~javascript
var $profile = $('.profile');
var $profilePopup = $('.profiel-popup');
~~~

마우스 올렸을 때 display를 block으로 바꾸고 떼었을 때 display를 none처리하면 된다.

그러나 학습을 위해 부모를 경유해서 display를 바꿔보자

~~~javascript
$profile.on({
    
    mouseenter: function () {
        $profile.parent().find('.profile-popup').css('display', 'block');    
    },
    mouseleave: function () {
        $profile.parent().find('.profile-popup').css('display', 'none');
    }
})
~~~

find를 사용해서 찾고싶어하는 class,&#160; id를 찾고 css 적용

이렇게 사용시 단점이 있는데 만약 프로필이 여러개면 마우스를 올렸을때 전체가 나타나고 때면 전체가 사라짐

내가올린영역에만 하고싶을땐 this로 변경해주면됨, &#160;

show, &#160; hide로 대체도 가능

~~~javascript
$profile.on({

    mouseenter: function () {
        $(this).parent().find('.profile-popup').show();    
    },
    mouseleave: function () {
        $(this).parent().find('.profile-popup').hide();
    }
})
~~~

profile 클릭시 다음에 나오는 형제를 선택하는 방법으로도 구현가능

~~~javascript
$profile.on({

    mouseenter: function () {
        $(this).next().show();    
    },
    mouseleave: function () {
        $(this).next().hide();
    }
})
~~~

다음 형제를 지정할떄 next, &#160;이전 형제를 지정할때 prev

효과도 적용할 수 있다

~~~javascript
$profile.on({

    mouseenter: function () {
        $(this).next().fadeIn();    
    },
    mouseleave: function () {
        $(this).next().fadeOut();
    }
})
~~~

![jqp](assets/built/images/js/jp3.jpg)

<br>
<br>

<strong class="subtitle_fontAwesome">list 접고 펴기</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

리스트 모두접기 버튼 클릭시 리스트가 모두 접히고 모두펴기시 모두 펴지게 설정

그리고 하나의 리스트 클릭시 펴져있으면 접히고 접혀있으면 펴짐

하나 하나씩 리스트를 접어서 모두 접히면 버튼이 모두 펴기로 바뀌고 반대이면 모두 접기로 변경되게 설정

<br>

<strong class="subtitle2_fontAwesome">html,&#160; css</strong>

~~~html
<div class="close_text">
    <span>모두 접기</span>
</div>

<div class="open_text">
    <span>모두 펴기</span>
</div>

<ul>
    <li class="list_wrap">
        <div class="list_title_wrap">
            <h2>리스트 타이틀</h2>
        </div>

        <div class="list_article_wrap">
            <p>리스트 본문 영역리스트 본문 영역리스트 본문 영역리스트 본문 영역리스트 본문 영역리스트 본문 영역
                    리스트 본문 영역
            </p>
        </div>
    </li>

    ...

</ul>
~~~

~~~css
.open_text, .hide {
  display: none;
}
~~~

필요한 css 이외 생략

모두열기 버튼과 hide클래스에 none을 적용하면 일단 모두열기 버튼은 안보이고 모두접기 버튼만 화면에 보임

<br>

<strong class="subtitle2_fontAwesome">기능</strong>

~~~javascript
var $close_text = $(".close_text");
var $open_text = $(".open_text");
var $list_title_wrap = $(".list_title_wrap");
var $list_article_wrap = $(".list_article_wrap");
~~~

필요한 영역을 js로 불러오기

~~~javascript
$close_text.click(function() {
    $close_text.hide();
    $open_text.show();
    $list_article_wrap.addClass('hide');
})

$open_text.click(function() {
    $open_text.hide();
    $close_text.show();
    $list_article_wrap.removeClass('hide');
})
~~~

모두접기 버튼 클릭시 모두접기 버튼이 사라지고 모두펴기 버튼이 보임

그리고 article 영역에 hide클래스 추가. &#160; 모두펴기 버튼은 반대로 작성

~~~javascript
$list_title_wrap.click(function() {

    if($(this).parent().find('.list_article_wrap').hasClass('hide')) {

        $(this).parent().find('.list_article_wrap').removeClass('hide')
    } else {

        $(this).parent().find('.list_article_wrap').addClass('hide')
    }
})
~~~

슬라이드로 적용할 수도 있다.

~~~javascript
$list_title_wrap.click(function() {  
   $(this).next().slideToggle(); 
})
~~~

title 영역 클릭시 클릭한 title 영역의 부모(li)에서 article 영역을 찾고 그 안에 hide 클래스가 있다면 hide 클래스를 제거하고 아니면 hide 클래스를 추가해라

그러나 이 코드는 버그가 있다

타이틀을 클릭해서 display:none을 생성시킨 상태에서 모두펴기를 사용하면 그 영역은 펴지지 않고 그대로 접힌상태로 있는다

그 이유는 모두접기, &#160;펴기는 hide를 추가하고 빼는 방식이고 타이틀 클릭방식은 style에 display:none을 적용하는 방식이기 때문에 서로 관계가 없다.

즉,&#160; 타이틀 클릭해서 접힌상태면 display:none이 적용되어있고 거기서 hide를 빼고 넣고 한다고해서 display:none이 변화가 있는것이 아니기 때문.

hide 클래스를 사용할 것인지 display:none을 사용할 것인지 정해야만 버그가 해결된다.

~~~javascript
$list_title_wrap.click(function() {  
   $(this).next().toggleClass('hide'); 
})
~~~

완성이 된 것 같으나 또 버그가 있다.

모두펴기를 클릭하면 모두펴지면서 모두접기로 버튼이 변경된다. 이 상태에서 클릭으로 하나하나씩 접었을 때 모두 접힌상태지만 버튼은 그대로 모두접기 상태이다. &#160; 그래서 버튼을 두번클릭해야 정상적으로 돌아온다.

이 문제를 해결해보자

~~~javascript
$list_title_wrap.click(function() {  
    $(this).next().toggleClass('hide');

    var hideLength = $('.list_article_wrap.hide').length;

    if(hideLength === 5) {
        $close_text.hide();
        $open_text.show();
    }

    if(hideLength === 0) {
        $open_text.hide();
        $close_text.show();
    }
})
~~~

article 안에 hide클래스가 몇개 있는지 따진다음 총 5개가 되면 모두접기버튼이 숨겨지고 모두펴기버튼이 보이도록 설정.

총 0개가 되면 모두펴기버튼이 숨겨지고 모두접기버튼이 보이도록 설정

![jqp](assets/built/images/js/jp4.jpg)

![jqp](assets/built/images/js/jp5.jpg)