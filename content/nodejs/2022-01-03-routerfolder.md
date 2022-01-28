---
layout: post
current: post
cover:  assets/built/images/react/reactbg.jpg
navigation: True
title: 라우터 관리
date: 2022-01-03 22:00
tags: [nodejs]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

<br>

<strong class="subtitle_fontAwesome">라우터 관리</strong>

<strong class="subtitle2_fontAwesome">유사한 라우터 관리</strong>

~~~javascript
// (server.js)
app.get('/shop/shirts', function(요청, 응답){
   응답.send('셔츠 파는 페이지입니다.');
});
app.get('/shop/pants', function(요청, 응답){
   응답.send('바지 파는 페이지입니다.');
}); 
~~~

관습적으로 routes라는 폴더를 만들어서 보관함

안에 shop.js 파일을 만들고 위에 코드를 옮겨보자

~~~javascript
// (shop.js)
var router = require('express').Router();
// express 라이브러리를 쓰는데 안에 Router함수를 사용하겠습니다.

// app대신 router
router.get('/shop/shirts', function(요청, 응답){
   응답.send('셔츠 파는 페이지입니다.');
});

router.get('/shop/pants', function(요청, 응답){
   응답.send('바지 파는 페이지입니다.');
}); 

module.exports = router;
// 다른 곳에서 shop.js를 가져다 쓸때 router 변수를 배출하겠습니다.
// require 반대로 파일이나 라이브러리를 쓰겠습니다
~~~

<strong>참고</strong>

~~~javascript
// 전역 미들웨어 (모든 요청과 응답사이 실행)
app.use(passport.initialize());

// 내가 특정한때만 미들웨어를 실행하고 싶으면?
app.get('/mypage', 로그인했니, function (요청, 응답) {
   응답.render('mypage.ejs', { 사용자: 요청.user })
})
~~~

~~~javascript
// (server.js)
app.use('/', require('./routes/shop.js'))
// ./는 현재경로를 의미
// /경로로 요청했을때 미들웨어(방금만든 라우터)를 적용
~~~

~~~javascript
// 중복된 부분을 이런식으로 깔끔하게 작성가능
// (shop.js)
router.get('/shirts'...)
router.get('/pants'...)

// (server.js)
app.use('/shop', require('./routes/shop.js'))
~~~

<br>

<strong class="subtitle2_fontAwesome">장점</strong>

/shop에 관련된 route들인걸 알게됨(분류가 쉬움 -> 유지보수가 쉬움)

/shop과 관련된 router들에만 미들웨어를 적용하기 편리해짐

<br>

<strong class="subtitle2_fontAwesome">특정 라우터파일에 미들웨어 적용</strong>

~~~Javascript
function 로그인했니(){
   if()...
}
router.get('/shirts', 로그인했니, function(요청, 응답){
   // 개별 URL에 미들웨어 적용
   응답.send('셔츠 파는 페이지입니다.');
});
~~~

여기에 있는 모든 라우터들에 미들웨어를 적용하고 싶으면 

~~~Javascript
// (shop.js)
// 여기있는 모든 URL에 적용할 미들웨어
router.use(로그인했니); 
// 이 안에서도 이런식으로 특정url에 적용가능
router.use('/shirts', 로그인했니)

rotuer.get('/shirts', ...)
~~~