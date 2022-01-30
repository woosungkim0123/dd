---
layout: post
current: post
cover:  assets/built/images/react/reactbg.jpg
navigation: True
title: web Socket
date: 2022-01-06 23:00
tags: [nodejs]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

<br>

<strong class="subtitle_fontAwesome">Web Socket</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

SSE말고도 실시간으로 소통할 수 있는 방법이 있음

웹소켓을 뚤어놓으면 됨

차이점 : SSE는 서버가 유저에게 일방적으로 통신이 가능했으나 Web Socket은 유저도 서버에게 실시간으로 메세지를 전송할 수 있다(양방향 통신)

Web Socket은 쌩자바스크립트 문법으로 개발할 수도 있지만

대부분의 상황에선 브라우저간 호환성이 좋은 socket.io 라이브러리를 설치해서 사용

접속한 모든 사람이 메세지를 주고 받을 수 있는 단체 채팅방을 만들어보자

<br>

<strong class="subtitle2_fontAwesome">셋팅</strong>

~~~terminal
npm install socket.io
~~~

~~~javascript
// (server.js)
// const app = express(); 이거 밑에만 쓰면됨
const http = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

// (이랬던걸)
app.listen(8080, function () {
  console.log('listening on 8080')
});

// (이렇게 변경)
http.listen(8080, function () {
  console.log('listening on 8080')
}); 
// express를 이용해서 서버를 띄우던걸 http라는 nodejs 기본 라이브러리 + socket.io를 이용해서 띄운것
// app.listen이나 http.listen이나 어차피 똑같은 기능을 함
~~~

실은 우리는 현재 http라는걸 이용해서 서버를 띄우고 있습니다. express라는 라이브러리는 http라는 라이브러리를 쉽게 사용하기 위한 도구 (소켓을 뚫을 수 있는 서버로 업그레이드 한거지 과거에 만들었던 서버와 동작방식은 차이가 없다.)

이렇게 하면 서버에서 Web Socket(실시간 소통채널)을 열 수 있는데 유저가 보는 html파일에도 Web Socket에 참여할 수 있는 셋팅을 해야한다.

<strong>html파일에 web Socket 셋팅</strong>

socket.ejs파일을 만들고 연결

~~~javascript
// (server.js)
app.get('/socket', function(요청,응답){
   응답.render('socket.ejs')
});
~~~

socket.ejs파일에도 socket.io를 설치해야 유저가 이용가능

socket.io.js 파일을 다운받거나 링크복사(cdn)

대신 설치한 socket.io 라이브러리와 동일한 버전을 가지고 와야한다(package.json에서 확인)

~~~html
// 예시
<script src="https://cdn.socket.io/4.4.1/socket.io.min.js" integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H" crossorigin="anonymous"></script>

<div>채팅방</div>

<script>
   const socket = io();
   // 웹소켓 접속
</script>
~~~

web Socket에 접속시 서버가 뭔가 실행하고 싶으면

~~~javascript
// (server.js)
app.get('/socket', function(요청,응답){
   응답.render('socket.ejs')
});

// 웹소켓에 접속하면 실행해주세요 라는 이벤트 리스너
io.on('connection', function(){
   console.log('웹소켓에 접속됨')
})
~~~

정리하면 어떤 유저가 socket.ejs파일에 접속하면 script 안에 있는 코드가 실행됨

script 태그안에 있는 코드는 페이지 로드시 한번 쭉 실행되기때문

그 안에 웹소켓에 접속해주세요 라는 문법이 있어서 웹소켓에 접속이됨

유저가 웹소켓에 접속을 하면 웹소켓에 접속됨 이라는 코드가 실행됨

<br>

<strong class="subtitle2_fontAwesome">유저가 메세지 보내기</strong>

~~~html
<!--버튼 클릭시 서버에 메세지 보내기-->
<input id="input1">
<button id="send">서버로 데이터 보내기</button>
<script>
const socket = io();
$('#send').click(function(){
   // 서버에 메세지 보내기(user-send라는 이름으로 input데이터(안녕하쇼)를 전송)
   socket.emit('socketSend', $('#input1').val())
});
</script>
~~~

서버도 그냥 데이터를 수신할 수 없고 수신하는 코드를 작성해야함

~~~javascript
// (server.js)
io.on('connection', function(socket){
   console.log('웹소켓에 접속됨')
   // 파라미터를 뚫어주고 거기에 .on 그리고 작명한 이름을 달아주면됨
   socket.on('socketSend', function(data){
      // data에는 유저가 보낸 데이터
      console.log(data) // 안녕하쇼 출력
   })
})
~~~

<br>

<strong class="subtitle2_fontAwesome">서버가 유저에게 메세지 보내기</strong>

~~~javascript
io.on('connection', function(socket){
   socket.on('socketSend', function(data){
      console.log(data) 
      // 서버가 유저한테 메세지 보내는법
      io.emit('broadcast', data)
      // 누군가가 서버에 메세지를 보내면 그 메세지를 그대로 보내보자
   })
})
~~~

socket을 이용한 통신에서는 가만히 있는다고 수신을 할 수 있는게 아니라 이벤트리스너로 항상 수신을 할 수 있음

~~~html
<div id="content"></div>

<script>
   socket.on('broadcast', function(data) {
      $('#content').append('<div>' + data + '</div>')
   });
</script>
~~~

io.emit의 특징이 socket에 참여하고 있는 모든 유저에게 메세지를 보냄(원래 동작방식)

전문용어로 broadcast한다(모든 유저에게 메세지를 보낸다)

누군가가 안녕이라는 메세지를 보내면 서버는 그 메세지를 모든 유저에게 뿌림

이게 바로 단체 채팅 서비스, 이걸 만들고 싶을때 io.emit을 사용하면 됨

단체 채팅방이 아니라 서버랑 유저 1명간 단독으로 통신을 하고싶으면

~~~javascript
// to를 사용하면 목적지를 정해줄 수 있음
// io.to(소켓아이디).emit()
// 이 소켓아이디를 가진 사람한테만 메세지를 전송
io.on('connection', function(socket){
   io.to(socket.id).emit("broadcast", '서버응답임');
   // 유저가 웹소켓에 접속하면 socket 파라미터에 접속유저 정보가 들어있음
   // header정보들이 들어있는데 그 중에 socket.id가 접속한 유저의 유니크한 아이디
});
~~~

<br>

<strong class="subtitle2_fontAwesome">채팅방 여러개 만들기</strong>

여기까지는 채팅방이 한개밖에 없는데 여러개 만들어서 유저가 선택해서 들어갈 수 있게 해보자

채팅방1, 채팅방2가 있고 채팅방1에서는 채팅방1에 들어온 사람들끼리만 채팅가능

서버에서 채팅방을 만드는법을 알면됨

~~~html
<button id="room1">채팅방1 입장</button>
<input id='room1-input'>
<button id="room1-send">채팅방1에 메세지 전송</button>
<script>
   // room1 클릭시 채팅방1 입장시키는 코드
   $('#room1').click(function(){
      socket.emit('joinroom', '채팅방입장시켜줘');
      // 서버한테 요청을 할때 GET, POST요청 하면되는데 socket을 할때는 그냥 socket으로 요청하면 됨
   });
   $('#room1-send').click(function(){
      socket.emit('room1-send', $('#room1-input').val())
   });
   socket.on('broadcast', function(data) {
    $('#content').append('<div>' + data + '</div>')
  });
</script>
~~~

~~~javascript
io.on('connection', function(socket){
   // 어떤 유저가 joinroom이라는 이름으로 메세지를 보내면
   socket.on('joinroom', function(data){
      // 채팅방 생성하기 & 입장시키기 두개기능을 한번에 실행시킴
      socket.join('room1')
      // 현재 요청한 유저가 room1로 입장
   })
   // room1-send 이름으로 온 데이터를 room1에만 boradcast해주면 된다.
   socket.on('room1-send', function(data){
      io.to("room1").emit('broadcast', data);
      // to에 id가 아니라 채팅방을 넣으면 그 채팅방에 있는 사람들에게만 메세지를 보낼 수 있음
   });
})
~~~