---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: async/await
date: 2021-12-19 18:57
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include tableJs1-variable.html %}

<br>

<strong class="subtitle_fontAwesome">async</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

Promise를 조금더 깔끔하게 키워드를 ES8부터 제공함

~~~javascript
// 더하기 실행후 특정 함수를 실행하고 싶으면
function 더하기(콜백){
  1 + 1
  콜백()
}

더하기(함수);

// 이거 하기싫어서 Promise를 사용 -> 더하기를 Promise로 만들어야함

더하기().then(function(){

})
// 근데 Promise를 또 만들어야하니 귀찮다 -> async 키워드만 붙이면됨
// 함수 앞에서만 붙일 수 있음(화살표함수도 가능)
// 이 함수가 Promise의 기능을 함
async function 더하기(){
  1 + 1;
}
더하기().then(function(){
  console.log('성공') // 성공 출력
})

~~~

async가 붙은 함수가 실행되고 나면 그 자리에 Promise가 object가 남음

남으면 then을 쓸수 있음

콜백함수 안만들어도 Promise 디자인 안해도 Promise처럼 쉽게 사용할 수 있음

~~~Javascript
async function 더하기(){
  return 1 + 1;
}
더하기().then(function(결과){
  console.log(결과) // 성공 출력
})
// return을 붙여주면 결과를 출력해줄 수 있음
~~~

단점은 성공만 가능

밑에 방식으로 실패를 출력해줄 수 있음

~~~javascript
async function 더하기(){
  return Promise.reject('실패임') // 함수가 실패함 then이 실행이 안됨
}
더하기().then(function(결과){
  console.log(결과) 
})
~~~

async와 같이 사용할 수 있는 await

함수 안에 Promise를 디자인

~~~javascript
async function 더하기(){
  let 프로미스 = new Promise(function(성공, 실패){
    let 힘든연산 = 1 + 1;
    성공();
  });

  프로미스.then(function(){
    console.log('성공했어요')
  })
}
더하기();

// 이러한 코드를 조금더 이쁘게 쓸 수 있음
// 똑같은 의미로 사용할 수 있는게 await 키워드
// async function 안에서 await은 then 대신 사용가능

async function 더하기(){
  let 프로미스 = new Promise(function(성공, 실패){
    let 힘든연산 = 1 + 1;
    성공(2);
});
  let 결과 = await 프로미스;
  console.log(결과) // 2 출력
  // 위랑 밑이랑 같은 코드
  // 프로미스.then(function(){ console.log('성공했어요') })
}
더하기();
~~~

await은 기다려주세요 의미

js는 오래걸리는 것을 비동기식으로 처리할 수 있는데 비동기식 코드 위아래에 순차적으로 실행하는 코드가 있으면 순서가 꼬임

await이라는 키워드는 기다려 라는 의미

프로미스가 해결될때까지 기다려~

자바스크립트가 위에서부터 한줄씩 실행하면 await을 발견하면 프로미스가 해결될떄까지 기다림

성공이든 실패든 판정이 나올떄까찌 기다리고 성공이면 결과를 변수에 담아줌

await은 async 함수 안에서만 쓸 수 있는 특별한 키워드

await은 then 간략화 버전 그이상 그이하도 아님

await은 실패 판정시 에러가 뜸 -> 코드가 멈춤

js에 실패를 다룰 수 있는 문법이 있음

~~~Javascript
try { 이걸해보고 에러가 나면 } catch { 이걸 실행해주세요}
~~~

이걸 응용해서

~~~javascript
try { 
  let 결과 = await 프로미스;
  console.log(결과) 
} catch { 
  console.log('프로미스가 실패했네요') 
}
~~~