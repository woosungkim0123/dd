---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: Web Components
date: 2021-12-21 18:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include tableJs1-variable.html %}

<br>

<strong class="subtitle_fontAwesome">Web Components</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

HTML을 길게 짜면 코드가 더러워지는데 자주 출몰하는 HTML덩어리들을 한단어로 축약가능

Web Components 문법을 사용하면 됨 -> 자바스크립트 문법X, 브라우저 기본기능

이걸 자바스크립트 문법으로 구현할 수 있는 것뿐

웹개발을 잘하고 싶으면 브라우저 기능을 알아야함(문법은 도구)

~~~javascript
// 이건 브라우저에서 이렇게 쓰라고 정해져있음
class 클래스 extends HTMLElement {
   connetctedCallback(){ // 이것도 정해져있는 함수
   // 축약할 HTML
      this.innerHTML = `<label>하하</label><input>`
      // this는 인스턴스, class로부터 새로생성될 object
      // 근데 여기서는 새로생성될 custom-input 

      // 위에 방식이 아니라 다른 방식으로 HTML작성가능
      let 변수 = document.createElement('label')

      // 두번째방식이 html 생성속도가 빠름 (10배가량)
   }
}
// 축약할 HTML을 정하고 어떤 단어로 축약할건지 정하면됨
customElements.define('custom-input', 클래스)
~~~

~~~html
<custom-input></custom-input>
~~~

커스텀태그의 장점은 html중복제거, 다른페이지 재활용가능

attribute를 파라미터 처럼 활용가능

~~~html
<custom-input name='비번'></custom-input>
<custom-input name='이메일'></custom-input>
~~~

~~~javascript
class 클래스 extends HTMLElement {
   connetctedCallback(){ 
      let name = this.getAttribute('name')
      this.innerHTML = `<label>${name}</label>`
   }
}
~~~

상황에 따라 각각 다른 HTML을 생성해줄 수도 있음

attribute가 변경이 될때마다 특정코드를 실행할 수 있음

react, vue에서는 props(attribute)가 변경이 되면 html이 자동으로 재랜더링됨

그거랑 똑같은 기능을 만드는 방법

~~~javascript
class 클래스 extends HTMLElement {
   connetctedCallback(){
      this.innerHTML = `<label>${name}</label>`
   }
   static get observedAttributes() {
      return ['name', 'li'] // name이라는 attribute가 바뀌는지 감시해주세요
   }
   attributeChangedCallback(){
      console.log('aaa')// 해당 속성이 바뀔때마다 여기 코드가 실행됨
   }
}
// 웹컴포넌트 만드는 문법이고 정해져있음
~~~

name attribute가 변경될때마다 콘솔창에 찍히는걸 확인할 수 있다

즉, attribute가 바뀔때마다 html변경하거나 특정코드를 실행하거나 가능

attribute가 바뀔때마다 재랜더링을 시키고 싶으면?

~~~javascript
class 클래스 extends HTMLElement {
   connetctedCallback(){
      this.innerHTML = `<label>${name}</label>`
   }
   static get observedAttributes() {
      return ['name'] 
   }
   attributeChangedCallback(){
      this.innerHTML = `<label>${name}</label>` 
   }
}
// attribute가 바뀔때마다 HTML을 재생성해주세요
// react, vue랑 비슷한 재랜더링 기능구현 방법
~~~

Web Components 기능을 사용하면 긴 HTML도 함수처럼 재사용이 가능해짐

