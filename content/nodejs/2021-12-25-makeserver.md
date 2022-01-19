---
layout: post
current: post
cover:  assets/built/images/react/reactbg.jpg
navigation: True
title: express로 서버만들기
date: 2021-12-25 21:00
tags: [nodejs]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-react.html %}

<br>

<strong class="subtitle_fontAwesome">express</strong>

<strong class="subtitle2_fontAwesome">기본문법</strong>

~~~javascript
// server.js
// 서버를 띄우기 위한 기본 문법
// 사용법이라 이해할 필요는 없음
const express = require('express') // 아까 설치한 라이브러리를 첨부해주세요
const app = express(); // 첨부한 라이브러리를 이용해서 새로운 객체를 만들어주세요

// listen(서버띄울 포트번호, 띄운후 실행할 코드) -> 컴퓨터 서버를 열 수 있음
app.listen(8080, function(){ 
   console.log('listening on 8080')
});
~~~

8080 port에 서버를 띄워주세요

<strong>포트?</strong>

컴퓨터에는 외부랑 네트워크 통신을 하기 위한 6만개 정도의 구멍이 있음

그 중에 8080을 통해서 들어오는 사람들은 이 서버를 띄워주세요

<br>

<strong class="subtitle2_fontAwesome">서버에 get요청</strong>

naver.com/beauty/home -> 서버에게 Get요청을 한것(뷰티상품을 보여줌)
naver.com/pet/home -> 서버에게 GET요청을 한것(PET상품을 보여줌)

~~~javascript
app.get('/pet', function(요청, 응답){
   응답.send('펫쇼핑사이트입니다.')
})
~~~

<br>

<strong class="subtitle2_fontAwesome">nodemon</strong>

js수정시 서버 재실행이 귀찮음 -> 자동화
 
js 라이브러리 nodemon

<br>

<strong class="subtitle2_fontAwesome">html파일 요청</strong>

get요청시 html파일을 보내줄려면?

~~~javascript
app.get('/', function(req, res){ // 홈
   res.sendFile(__dirname + '/index.html') // __dirname은 현재파일의 경로
})
app.get('/write', (req,res)=>{ res.sendFile(__dirname + '/write.html')})
~~~

get은 함수 

함수 안에 함수를 콜백함수라고 하는데 쓰는 이유는 순차적으로 실행하고 싶을때 사용한다.

콜백함수 안에 파라미터에는 두가지 파라미터가 들어갈 수 있는데 첫번째는 요청내용, 어떤 정보를 가지고 요청하는지 담겨있음

두번째는 어떤식으로 응답할지 정해주는 부분

<br>

<strong class="subtitle2_fontAwesome">post 방식으로 form전달</strong>

~~~html
<form action="/add" method="POST"> 
<!--form을 만들때 꼭 들어가야하는 두가지 속성-->
<!--이게 없으면 폼에 적은 정보들을 전달할 수가 없음-->
<!---->
<!--action은 경로-->
<!--method는 정보를 어떤형태로 전달할건지 지정하는 부분-->
    <div class="form-group">
      <label>오늘의 할일</label>
      <input type="text" class="form-control" name="title">
    </div>
    <button type="submit" class="btn btn-outline-secondary">Submit</button>
  </form> 
~~~

~~~javascript
app.post('/add', (req,res)=>{ res.send('전송완료')})
~~~

input에 적은 정보는 어디에 저장이 되는걸까?

파라미터 req에 저장되어 있음

쉽게 꺼내쓰려면 body-parser 라이브러리가 필요함 설치하고 코드 추가

~~~javascript
// server.js
// 이해할려고 할 필요없음 (사용법임)
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 
~~~

body-parser는 input 안에 적힌 데이터들을 해석할 수 있게 도와줌

~~~html
<!-- input에 name으로 이름쓰기 -->
<!-- 안쓰면 서버는 어떤 정보가 어떤 input에 있었는지 구분을 못함 -->
<input type="text" class="form-control" name="title">
<input type="text" class="form-control" name="date">
~~~

~~~javascript
app.post('/add', (req,res)=>{ res.send('전송완료')  
console.log(req) // body: { title: 'aaaaaaaaa', date: 'aaaaaaaaaaa' }
console.log(req.body.title)    // 입력한 값들이 보임
})
~~~

