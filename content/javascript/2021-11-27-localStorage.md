---
layout: post
current: post
cover:  assets/built/images/react/reactbg.jpg
navigation: True
title: LocalStorage
date: 2021-11-07 09:00
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-react.html %}

<br>

<strong class="subtitle_fontAwesome">local storage</strong>

<strong class="subtitle2_fontAwesome">개념</strong>

껏다 키거나 새로고침하면 저장했던 상품들이 다 초기화됨

자바스크립트는 원래 그렇다 껏다키면 초기값으로 돌아감

새로고침되면 js파일을 위에서부터 쭉읽기때문에

데이터를 기억하고 싶으면 두가지 방법이있다

장바구니 데이터를 영구히 저장하려면 서버에 보내서 서버DB에 저장하면된다

두번째는 브라우저 임시저장공간을 가져다가 쓰면됨

브라우저에는 몰래 정보를 저장할 수 있는 공간이있음(텍스트)

그게 바로 local storage

개발자가 몰래 정보를 심어놓을 수 있음(반영구)

그건 바로 application 탭에 local storage가 존재한다

key(이름), value(데이터) 이런식으로 저장

Session storage도 있는데 Session은 브라우저를 끄면 없어짐(휘발성)

local storage는 브라우저 청소를 하지않는 이상 남아있음

각각 5MB정도의 정보를 저장할 수 있는데 순전히 텍스트 정보만 저장할 수 있다

<br>

<strong class="subtitle2_fontAwesome">사용방법</strong>

예시로 사용자가 최근 본 상품을 저장해두고 사이트 재접속시 최근에 봤던 상품을 오른쪽에 띄워서 구매를 유도하게 해보자

local storage 다루는 문법은 3개만 알면된다

console창에 localStorage라고 입력하고 setItem('자료이름','자료값')을 적은뒤 엔터를 치면 자료저장이 완료됨

![localstorage](assets/built/images/react/localstorage1.JPG)

![localstorage](assets/built/images/react/localstorage2.JPG)

자료를 출력하려면 javascript파일 아무대서나 

~~~Javascript
localStorage.getItem('자료이름')
~~~

그러면 자료값이 나옴

자료를 삭제하고 싶으면 localStorage.removeItem('name')

sessionStorage를 다루고 싶으면 localStorage 대신 사용하면 된다

<br>

<strong class="subtitle2_fontAwesome">문제점</strong>

localStorage.setItem('obj', {name:'kim'})

오브젝트를 저장하면 저장은 되지만 

![localstorage](assets/built/images/react/localstorage3.JPG)

object가 제대로 저장이 된게 아니라 object가 깨져서 저장된것

object형태가 날라감

이건 object가 아니라 object를 글자로 강제로 바꾸면 이런 문자로 표시가 되는거임

배열도 똑같이 해보면 대갈호가 없어진 상태로 저장됨

분명히 배열을 저장했는데 ""가 있는 문자가로 바뀜

localStorage에 오브젝트나 어레이를 저장하면 자료가 깨진다는것만 잘 기억

문자 or 숫자만 저장가능

object나 array를 손실없이 저장하고싶으면 localStorage에다가 저장할때 글자인척 하면서 저장해주면됨

JSON으로 만들면 해결할 수 있다

~~~JAVASCRIPT
localStorage.setItem('obj', JSON.stringify({name:'kim'}) )
~~~

JSON.stringify를 활용해서 글자처럼 만들 수 있다

![localstorage](assets/built/images/react/localstorage4.JPG)

불러보면 따옴표가 쳐진상태로 불러짐

JSON으로 저장했으니 꺼내도 JSON인건 당연

변수에 담아서 JSON.parse를 이용해서 따옴표를 다 제거해주면 object가 나오게 된다

![localstorage](assets/built/images/react/localstorage5.JPG)

<br>

<strong class="subtitle2_fontAwesome">최근 본 상품</strong>

상품상세 페이지 방문시 localStorage에 정보를 저장하는 것부터 구현해야함

그리고 정보를 보여주는 UI를 만들면 됨

해당 컴포넌트 안에다가 작성

~~~javascript
function Detail(props) {

  let { id } = useParams(); 

  useEffect( ()=>{
    var arr = localStorage.getItem('watched');
  })

  return (
    ...
  )
}
~~~

첫방문이라서 아무것도 없지만 누군가 방문했다고 생각하고 localStorage에서 watched라는 키로 저장된 데이터를 꺼내겠습니다

아직 watched라는 키는 아직없지만 나중에 그렇게 만들거라 생각하고 만든것

id는 주소의 뒷부분을 가져온것

~~~javascript
useEffect( ()=>{
  var arr = localStorage.getItem('watched');
  if(arr==null){ arr =[]} else {arr=JSON.parse(arr)}
  arr.push(id);
})
~~~

꺼낸자료는 따옴표가있어서 parse를 해야하는데 첫방문일 수도 있기때문에 if로 분기를 나누어주었다

arr이 null값이면 배열을 만들어라 라는의미

그리고 현재 접속한 페이지의 url부분의 파라미터를 useParam로 가져와서 push

여기서 문제는 중복이 될 수도 있음

여기서 set자료형을 사용하면 된다

Set자료형은 데이터들을 저장할 수 있는 자료형

array랑 똑같은데 대신 중복된 자료를 허용하지않음. 중복된 자료는 자동으로 제거한다

~~~javascript
useEffect( ()=>{
  var arr = localStorage.getItem('watched');
  if(arr==null){ arr =[]} else {arr=JSON.parse(arr)}
  arr.push(id);
  arr = new Set(arr); // set자료형
  arr = [...arr]; // set을 다시 조작하기 쉬운 array로 변경
  localStorage.setItem('watched', JSON.stringify(arr) );
})
~~~

...은 괄호를 벗겨주세요 라는 의미

set자료형의 소괄호를 벗기고 0,1,2 이렇게 남은 것들을 다시 대괄호 안에 집어넣어서 array로 만든것

이걸 다시 localStorage에 저장하는것

if문을 안쓰면 arr이 배열이 아니라고뜨니 주의

누군가가 페이지를 방문할때마다 추가해줌

![localstorage](assets/built/images/react/localstorage7.JPG)

이걸 map반복문으로 적용시켜보니 arr이 정의되지않았다고뜸

그래서 밖에서 다시한번정의해주고 그걸가지고 반복문을 도릶

~~~javascript
function Detail(props) {
  let { id } = useParams(); 

  useEffect( ()=>{
    var arr = localStorage.getItem('watched');
    if(arr==null){ arr =[]}else {arr=JSON.parse(arr)}
    arr.push(id);
    arr = new Set(arr);
    arr = [...arr];
    localStorage.setItem('watched', JSON.stringify(arr) );
  }, [] );
  let arr1 = JSON.parse(localStorage.getItem('watched'));

  return (
    <div>
      <div className="recent-list-wrap">
        <span>최근본상품</span>
        <div className="recent-list">
        {
          arr1 ===null 
          ? <div></div>
          : arr1.map((a,i)=>{
            return(
              <div className="recently">
                <img src={ 
                  "https://codingapple1.github.io/shop/shoes"+ arr1[i] +".jpg"
                  } width="100px" height="100px" alt=""
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
~~~

![localstorage](assets/built/images/react/localstorage6.JPG)
