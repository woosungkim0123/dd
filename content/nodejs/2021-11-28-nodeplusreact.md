---
layout: post
current: post
cover:  assets/built/images/react/reactbg.jpg
navigation: True
title: Node+Express 서버와 React 연동하기
date: 2021-11-07 09:00
tags: [nodejs]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-react.html %}

<br>

<strong class="subtitle_fontAwesome">Node+Express 서버와 React 연동하기</strong>

<strong class="subtitle2_fontAwesome">시작전 개념</strong>

두개 합치는건 별거 아니고 서버는 유저가 메인페이지로 접속하면 리액트로 만든 html 파일을 보내주면 끝입니다. 

서버만들 때 Express + MongoDB를 사용하면 JavaScript 만으로도 풀스택 개발을 체험해볼 수 있는 시대입니다. 

Nodejs : 서버 만드는 툴

서버가 하는일? 누가 naver.com으로 접속하면 index.html을 보내주세요 

즉, html 전송하는 기계

react는 html 파일 이쁘게 웹앱/SPA로 만들어주는 툴

<br>

<strong class="subtitle2_fontAwesome">서버 기본 셋팅</strong>

~~~javascript
npm init  // package.json 생성
npm install express
~~~

~~~javascript 
//server.js만든후 안에 작성

const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 
~~~

서버를 띄우기 위한 필수 요소만 적음

~~~javascript
node server.js 
~~~

이렇게 터미널에 입력하면 서버가 뜸

nodemon을 설치해뒀으면 nodemon server.js  

nodemon을 사용하면 저장하고 새로고침을 안해도 서버변경사항이 바로바로 적용이됨

로컬로 들어가보면 서버가 잘 동작하는걸 알 수 있다

![localstorage](assets/built/images/nodejs/server1.JPG)

<br>

<strong class="subtitle2_fontAwesome">nodejs 예시</strong>

~~~javascript
app.use( express.static( path.join(__dirname, 'public')))
~~~

__dirname 디렉토리네임은 현재경로라는 의미

현재경로에 있는 public폴더 안에 있는 static 파일들을 쓰겠습니다 라는 의미

이런식으로 기록을 해주면 css, js, img 등 잘보내줌

~~~javascript
app.get('/' function(요청,응답){
  응답.sendFile( path.join(__dirname, 'public/index.html'))
})
~~~

/ 페이지로 접속하면 옆에 파일을 잘 보내줌

<br>

<strong class="subtitle2_fontAwesome">리액트 예시</strong>

리액트 프로젝트를 다 만들고 build라는걸 할 수 있음

~~~javascript
npm run build
~~~

build 폴더가 하나 생성됨

build 폴더 안에는 발행에 필요한 모든 파일이 다 담겨있다고 생각하면됨

이걸 서버에 보내기만하면 react 프로젝트는 서버에 보내기 성공

~~~javascript
app.use( express.static( path.join(__dirname, 'react-project/build')))

app.get('/' function(요청,응답){
  응답.sendFile( path.join(__dirname, 'react-project/build/index.html'))
})
~~~

이런식으로 server.js에 작성하면 끝

<br>

<strong class="subtitle2_fontAwesome">리액트 라우터를 사용시</strong>

서버가 파일 보내기 역할을 하는데 그걸 리액트가 더 잘함

리액트도 똑같이 라우팅이라는 것이 가능

리액트를 사용하면 서버는 DB 입출력 정도의 역할..

문제점은 주소창에 직접 URL을 입력하면 없다고뜸

/about <- 이 부분이 서버에게 요청해주세요 라는 의미라서 그럼

~~~javascript
app.get('/about' function(요청,응답){
  응답.sendFile( path.join(__dirname, 'react-project/build/index.html'))
})
~~~

누군가가 /about으로 접속하면 무언가를 보내줘야하는데 없어서 가져오지 못하는것

그래서 리액트 라우팅기능을 이용하고 싶으면 이 코드 하나만 서버에 추가해주면 됨

~~~javascript
app.get('*' function(요청,응답){
  응답.sendFile( path.join(__dirname, 'react-project/build/index.html'))
})
~~~

유저가 url에 아무거나 입력하면 리액트html을 보내라 라는 의미

<br>

<strong class="subtitle2_fontAwesome">react / nodejs 개발 패턴</strong>

![localstorage](assets/built/images/nodejs/server2.JPG)

list페이지 접속시 DB에 있는 게시물정보가 보여줘야하면 리액트에서 /list 접속시 list 컴포넌트 보여줘라고 짜면됨

list 페이지를 접속하기 전에 or 리스트라는 컴포넌트가 로드되기전에(useEffect) 서버에게 Ajax요청을 하면됨

서버에게 너 DB에 있는 게시물리스트 좀 뽑아줘라고 요청하면 AJAX요청이 들어왔을때 실제로 DB에서 그걸 꺼내서 보내주는 코드를 작성하면됨

server.js에 react ajax 요청처리하는 코드를 서버문법으로 작성하면됨

게시물 발행도 마찬가지로 서버에 기능개발을 하면됨

발행버튼을 누르면 ajax요청을 해서 내 게시물 좀 DB에 추가해줘

<br>

<strong class="subtitle2_fontAwesome">특정 페이지에 들어갔을때 리액트 페이지를 보여주려면?</strong>

~~~javascript
app.use( '/', express.static( path.join(__dirname, 'public')))
app.use( '/react', express.static( path.join(__dirname, 'react-project/build')))

app.get('/' function(요청,응답){
  응답.sendFile( path.join(__dirname, 'public/index.html'))
})
app.get('/react' function(요청,응답){
  응답.sendFile( path.join(__dirname, 'react-project/build/index.html'))
})

// app.get('*'...)
~~~

app.use 라는건 미들웨어(middleware)

특정 요청과 응답 사이에 코드를 실행하고 싶을때 미들웨어라고 칭함

미들웨어는 전부 app.use에 작성하면됨

거기에 '/react' 이런식으로 잡으면 누군가가 /react가 포함된 url로 요청시 이런 미들웨어를 실행해주세요 라는 코드가 됨

여기까지만 하면 react페이지가 안뜸

리액트를 서브 디렉토리에 발행을 하고 싶으면 설정이 하나 더 필요함

react-project 안에서 package.json 열어서 hompage를 기입해줘야함

~~~Javascript
//package.json
{
  "homepage": "/react",
  "name": ...
}
~~~

이런 서브 디렉토리에 리액트를 발행할거다 라고 명시해줘야 npm빌드를 해야 제대로 이용가능

리액트를 다 작성하고 꼭 build를 해야 실제로 미리 볼 수 있는건가? 라이브 개발은 안되나? proxy 검색

