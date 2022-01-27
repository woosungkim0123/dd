---
layout: post
current: post
cover:  assets/built/images/react/reactbg.jpg
navigation: True
title: 이미지 업로드 (이미지 서버)
date: 2022-01-03 22:00
tags: [nodejs]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

<br>

<strong class="subtitle_fontAwesome">이미지 업로드</strong>

<strong class="subtitle2_fontAwesome">form</strong>

~~~html
<form method="POST" action="/upload" enctype="multipart/form-data">
   <!--action : 폼 전송시 어떤 경로로 전송-->
   <!--enctype : 서버로 폼 전송하는 방식-->
   <!--multipart/form-data : 인코딩 하지말고 파일 binary 형식 그대로 전송해주세요-->
   <!--application/x-www-form-urlencoded : base64 인코딩형식으로 인코딩되서 전달(1.3배 정도 파일 크기 커짐)-->
   <input type="file" name="프로필">
   <button type="submit">전송</button>
</form>
~~~

<br>

<strong class="subtitle2_fontAwesome">이미지 저장</strong>

업로드한 이미지를 보통 작업폴더 안에 저장시킨다(일반 하드에 저장하는게 쌈)

db에 저장해도 되지만 일반적으로 그렇게 하지는 않음(용량이 커서)

pulic 안에 image폴더 생성후 그곳에 저장

upload페이지에서 post요청을 했을때 파일을 저장해주세요 라고 코딩 해도되지만 조금 더 쉽게 라이브러리 사용

multer : multipart/form-data를 통해 업로드된 파일을 매우 쉽게 저장, 이름변경, 처리할 수 있게 도와주는 라이브러리

~~~javascript
// multer 라이브러리 사용법
let multer = require('multer')
let storage1 = multer.diskStorage({
   // diskStorage : 이미지를 저장할지 정의하는 함수(하드에 저장)
   // memoryStorage : RAM에 저장(휘발성있게 저장하고 싶을때)
   destination : function(req, file, cb){
      cb(null, './public/image')
   },
   filename : function(req, file, cb){
      cb(null, file.originalname)
      // 기존 오리지널 파일이름으로 저장
   }
})
let upload = multer({storage : storage1})
// upload를 post요청할때 사용하면 끝(미들웨어)

app.get('/upload', function(req,res){
   res.render('upload.ejs')
})
app.post('/upload', upload.single('프로필'), function(req, res){
   // 변수.single('input의 name속성이름')
   res.send('업로드 완료')
})
~~~

input으로 이미지를 저장해보면 폴더에 사진이 저장됨

~~~javascript
// 파일 여러개 받는법

// input을 여러개 받을 수 있도록 변경
app.post('/upload', upload.array('프로필', 10), function(req, res){
   // 10은 받을 최대갯수   
   res.send('업로드 완료')
})
~~~

~~~Javascript
// 필터도 걸 수 있음

let upload = multer({
   storage: storage1,
   // 확장자 제한
   fileFilter: function (req, file, callback) {
      var ext = path.extname(file.originalname);
      // path라는 변수 nodejs 기본 내장 라이브러리 path 라는걸 활용해 파일의 경로, 이름, 확장자 등을 알아낼 때 사용
      if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
         return callback(new Error('PNG, JPG만 업로드하세요'))
      }
      callback(null, true)
   },
   limits:{
      fileSize: 1024 * 1024
      // 파일 사이즈 제한
   }
});
~~~

<br>

<strong class="subtitle2_fontAwesome">업로드한 이미지 보여주기</strong>

~~~Javascript
app.get('/image/:imageName', function(req,res){
   res.sendFile( __dirname + '/public/image/' + req.params.imageName)
})
// 이미지를 보여줌
~~~