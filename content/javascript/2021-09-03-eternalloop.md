---
layout: post
current: post
cover:  assets/built/images/js-model.png
navigation: True
title: 글자가 완성되고 삭제되는 무한루프
date: 2021-09-24 12:10
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascriptmodel.html %}

<br>

<strong class="subtitle_fontAwesome">글자가 완성되고 삭제되는 무한루프</strong>

<strong class="subtitle2_fontAwesome">기획</strong>

배열 안에 어떤 글자 데이터가 있고 글자들이 하나하나 하나씩 완성이되고 삭제가 되고 다 삭제가 완료되면 배열에 다음 글자를 다시 하나하나 완성시키고 삭제되는 기능을 만들어보자

~~~javascript
var words = ["엔드게임", "인피니티 워", "에이지 오브 울트론"];

// 기능 예시

// 엔
// 엔드
// 엔드게
// 엔드게임
// 엔드게
// 엔드
// 엔
// 
// 인
// 인피
// ... 진행
// 다 실행시키면 엔드게임으로 다시넘어가는 무한루프 만들것임
~~~

<br>

<strong class="subtitle2_fontAwesome">무한루프 원리</strong>

만들기 전에 어떻게 하면 배열을 알아서 자동으로 무한루프에 빠지게끔 만드는지 알아보자

어떤 배열이 있고 안에 10, 20, 30 데이터가 있다

기준점은 0

~~~javascript
var arr = [10, 20, 30];
var index = 0;
~~~

10 -> 20 -> 30 -> 10 -> 20 -> 30 ... 무한루프 기능 만들려면 나머지에 대한 개념을 숙지해야한다

~~~javascript
// 나머지

// 0 % 3 = 0;
// 1 % 3 = 1;
// 2 % 3 = 2;
// 3 % 3 = 0;
// 4 % 3 = 1;
// 5 % 3 = 2;
// 6 % 3 = 0;
// 7 % 3 = 1;

// 고정값 % 3
// 가변값 : 0, 1, 2, 3, 4, 5, 6  
~~~

가변값이 일정한 규칙으로(1씩증가) 업데이트가 된다

여기서 나머지가 무한으로 반복되는걸 알 수 있다

loop라는 함수를 만들고 그 안에 current라는 변수를 만듬

current에 index(0) % arr.length(3)을 하면 0이 나옴

console.log로 arr의 데이터위치를 찍고 함수를 호출하면 10의 값이 나온다 그리고 index는 ++을 통해 1이 된다.

~~~javascript
function loop() {

    var current = index % arr.length;
    console.log(arr[current]);
    index++
}

loop();
~~~

무한루프가되려면 loop가 계속 호출이 되어야하는데 밑에 방식으로 매번 호출시킬 수가 없다

~~~javascript
loop();
loop();
loop();
loop();
loop();
~~~

![loop](assets/built/images/js/loop1.jpg)

자기 자신이 일정한 주기를 가지고 호출이 되게끔 만들어 줘야함

setTimeout함수를 활용해서 만들 수 있다

2초마다 첫번째인수로 전달한 함수가 실행이 됨. &#160;최초 한번 loop를 호출해야함

2초마다 계속 10, 20 ,30 이 찍히는걸 볼 수 있다

index++로 인해서 index의 값은 매번 증가가됨

~~~javascript
function loop() {

    var current = index % arr.length;
    console.log(arr[current]);
    index++

    setTimeout(function() {
        loop();
    }, 2000);
}

loop();
~~~

![loop](assets/built/images/js/loop2.jpg)

<br>

<strong class="subtitle2_fontAwesome">사전준비</strong>

글자가 하나씩 생성되고 완성되면 하나씩 사라지고 다 없어지면 다음 글자로 대체되는 반복기능

배열을 만들고 h1영역을 불러옴

~~~html
<h1 id="txt"></h1>
~~~

~~~javascript
var txtElement = document.getElementById('txt');
var words = ["엔드게임", "인피니티 워", "에이지 오브 울트론"];
~~~

생성자함수를 만들고 매개변수로 txtElement와 words를 넣어줌

new에 생성자함수를 활용할 때 인스턴스가 반드시 필요한건 아님.

~~~javascript
function TypeWriter (txtElement, words) {
    this.txtElement = txtElement;
    this.words = words;

	console.log(words);
}

new TypeWriter(txtElement, words);
~~~

지금처럼 생성자함수를 단독으로 호출시킬 수 있음. &#160; 생성자 함수를 호출해야 안에 내용이 실행이됨

안에 words를 콘솔로그로 보면 아까 변수로 만들어둔 words의 배열이 들어가있는걸 볼 수 있다

<br>

<strong class="subtitle2_fontAwesome">값 추가</strong>

~~~javascript
function TypeWriter (txtElement, words) {
    this.txtElement = txtElement;
    this.words = words;

    this.txt = "";
    this.wordIndex = 0;
    this.isDeleting = false;
}
~~~

txt는 처음에는 빈문자열로 시작

엔 -> 엔드 -> 엔드게 -> 엔드게임 -> 엔드게, &#160;글자가 하나하나씩 완성되는 영역이라고 보면됨 (글자들이 들어갈 공간)

wordIndex는 기준점 index=0과 같은 역할

isDeleting은 기준점을 하나더 만들어 둔것

만들어둔 이유는 글자가 생성되고 있는 지점인지 삭제되는 지점인지 구분하기 위한 분기를 나눠야하기 때문에

isDeleting 최초값을 false로 나둔 이유는 최초 빈 문자열상태에서 문자열을 하나하나 완성시키는게 먼저 해야할 일이기 때문에 false로 넣어준 것이고 완성이 다되면 true로 바꾸어줘서 true에 삭제되는 기능을 넣는 방식

<br>

<strong class="subtitle2_fontAwesome">메서드 추가</strong>

TypeWriter 조상에 type이라는 메서드를 만들어줌 (type 대신 다른 이름을 넣어도됨)

이렇게 만들어진 메서드는 생성자함수 안쪽에다가 호출시켜줌

hello를 콘솔로그로 찍어서보면 생성자함수를 호출했을때 안에있는 type메서드도 호출이되기 때문에hello가 찍힘

~~~javascript
function TypeWriter (txtElement, words) {
    this.txtElement = txtElement;
    this.words = words;

    this.txt = "";
    this.wordIndex = 0;
    this.isDeleting = false;

    this.type();
}

TypeWriter.prototype.type = function() {
    console.log("hello");
}

new TypeWriter(txtElement, words);
~~~

![loop](assets/built/images/js/loop3.jpg)

type메서드 안에 기능을 만들 것

<br>

<strong class="subtitle2_fontAwesome">나머지</strong>

wordIndex와 word배열의 길이를 나누어 준 값의 나머지를 current에 할당(0 % 3 = 0)

fulltxt에 현재 current의 값을 기준으로 배열 안에 있는 데이터를 가져온다 (current : 0, 데이터 : 엔드게임)

~~~javascript
TypeWriter.prototype.type = function() {

    var current = this.wordIndex % this.words.length;
    var fulltxt = this.words[current];
}
~~~

<br>

<strong class="subtitle2_fontAwesome">분기처리</strong>

if를 사용해서 isDeleting이 true인지 false인지에 따른 분기처리를 해줌

isDeleting의 최초값이 false기 때문에 else가 실행이 됨

else문 안에 글자를 하나하나 완성시키는 기능을 넣을것임

<br>

<strong class="subtitle2_fontAwesome">substring</strong>

방식은 엔드게임이라는 글자에서 잘라내는 방식을 사용

엔이라는 글자를 잘라내서 txt에 넣어서 화면에 노출시키고 두번째 엔드까지 잘라내서 기존의 엔에 덧붙여줄 것임

substring메서드를 사용해서 글자를 잘라낼것임. &#160;시작점이있고 끝나는점이있음

substring(1,3) 1이상 3미만

substiring(2) 2이상 끝까지

~~~javascript
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
~~~

<br>

<strong class="subtitle2_fontAwesome">데이터 자르기</strong>

fulltxt 데이터를 0번째부터 txt.length + 1 미만까지 잘라내서 txt에 넣음

txt는 빈문자열이라 0인 상태, 즉 0이상 1미만을 잘라내게됨

txt에 fulltxt의 0번째인 '엔'이 할당됨

h1(txtElement)에 textContent의 값으로 txt를 삽입해주면 화면에 엔이 출력됨

~~~javascript
TypeWriter.prototype.type = function() {

    var current = this.wordIndex % this.words.length;
    var fulltxt = this.words[current];

    if(this.isDeleting) {
    
    } else {
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

	this.txtElement.textContent = this.txt
}
~~~

![loop](assets/built/images/js/loop4.jpg)

<br>

<strong class="subtitle2_fontAwesome">또 하나의 분기처리</strong>

여기서 또다른 분기처리를 해줄것임

글자가 전부다 완성되었을 때, 글자가 모두 삭제 되었을 때로 분기처리

글자가 전부 완성되었을 때

isDeleting이 false고(부정이니까) txt와 fulltxt의 데이터가 같으면 isDeleting을 true로 변경한다

isDeleting이 true고 this.txt가 빈 문자열이 된다면 isDeleting을 false로 변경한다.&#160; 그리고 wordIndex를 ++해줌

wordIndex를 ++해준 이유는 글자가 빈 문자열이 되었다는말은 글자가 완성되었다가 삭제되었다는 의미이고 그러면 다음 글자로 넘어가는 기능을 만들 것이기 때문에

~~~javascript
if(!this.isDeleting & this.txt === fulltxt) {

    this.isDeleting = true;

} else if(this.isDeleting && this.txt === "") {

    this.isDeleting = false;
    this.wordIndex++

}
~~~

<br>

<strong class="subtitle2_fontAwesome">지속 호출</strong>

setTimeout을 사용하여 type메서드를 1초마다 한번씩 호출하는 기능을 만들어줌 

호출 하는 기능을 만든 이유는 무한 반복되는 기능을 만드는 것이기 때문에, &#160;그러나 에러가 뜸

~~~javascript
setTimeout(function() {
    this.type();
}, 1000);
~~~

![loop](assets/built/images/js/loop5.jpg)

왜 함수가아니라고뜨지?

콘솔로그로 this가 무엇을 가르키는지 확인해보자. &#160;윈도우를 가르킴

우리가 의도한 것은 this가 TypeWriter.prototype을 가르켜서 this의 type의 메서드를 활용할건데 this가 window를 가르키기 때문에 에러가 나는것

메서드안에서 this를 찍어보면 TypeWriter 객체를 가르킴

중첩함수에 있는 this는 무조건 window를 가르킴. &#160;이럴 경우를 대비해서 that이 존재

~~~javascript
var that = this;
   
setTimeout(function() {
    that.type();
}, 1000);
~~~

![loop](assets/built/images/js/loop6.jpg)

결과: "" -> 엔 -> 엔드 -> 엔드게 -> 엔드게임

<br>

<strong class="subtitle2_fontAwesome">삭제 기능</strong>

글자가 완성되고 if가 실행되어 isDeleting 값은 true가 됨

다시 type이 호출되고 첫번째 if에 조건이 만족하게 됨

if 안에 삭제되는 기능을 만들어 주면 된다

if가 실행되고 fulltxt(엔드게임)에 0부터 txt.length(4) - 1 = 3 미만 데이터를 자름

'엔드게'가 txt에 할당

~~~javascript
if(!this.isDeleting & this.txt === fulltxt) {
        this.isDeleting = true;
}

if(this.isDeleting) {
	this.txt = fulltxt.substring(0, this.txt.length - 1);

} else {
	this.txt = fulltxt.substring(0, this.txt.length + 1);
   
}
~~~

<br>

<strong class="subtitle2_fontAwesome">완성본</strong>

~~~javascript

var txtElement = document.getElementById('txt');
var words = ["엔드게임", "인피니티 워", "에이지 오브 울트론"];


function TypeWriter (txtElement, words) {
    this.txtElement = txtElement;
    this.words = words;

    this.txt = "";
    this.wordIndex = 0;
    this.isDeleting = false;

    this.type();
}

TypeWriter.prototype.type = function() {

    var current = this.wordIndex % this.words.length;
    var fulltxt = this.words[current];
	

    if(this.isDeleting) {

        this.txt = fulltxt.substring(0, this.txt.length - 1);


    } else {

        this.txt = fulltxt.substring(0, this.txt.length + 1);
        // "" -> 엔
    }

    this.txtElement.textContent = this.txt // 글자를 화면에 출력

    // 글자가 완성되거나 빈문자열이 될 경우만 실행됨
    
    if(!this.isDeleting && this.txt === fulltxt) {
        this.isDeleting = true;

    } else if(this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++
    }

    var that = this;

    setTimeout(function() {
        that.type();
    }, 1000);


}

new TypeWriter(txtElement, words);
~~~