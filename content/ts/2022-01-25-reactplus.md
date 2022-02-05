---
layout: post
current: post
cover: assets/built/images/js.jpg
navigation: True
title: ts와 react
date: 2022-01-25 21:00
tags: [ts]
class: post-template
subclass: "post tag-python"
author: Lome
---

<br>

<strong class="subtitle_fontAwesome">react + typescript</strong>

<strong class="subtitle2_fontAwesome">합치기</strong>

타입스크립트 셋팅이 완료된 프로젝트

```terminal
npx create-react-app 프로젝트명 --template typescript
```

기존 프로젝트에 더하고 싶을때

```terminal
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

<br>

<strong class="subtitle2_fontAwesome">JSX 표현 타입</strong>

```javascript
let 박스: JSX.Element = <div></div>;
// 좀더 정확하게 지정할려면
let 박스: JSX.IntrinsicElements["div"] = <div></div>;

function App() {
  return <div>{박스}</div>;
}
```

<br>

<strong class="subtitle2_fontAwesome">컴포넌트 타입</strong>

```Javascript
function App() {
  return (
    // 함수의 파라미터 쓸때 props
    <Profile name="철수" age="20"></Profile>
  )
}

function Proifle(props :{name :string, age :string}) :JSX.Element{ // 컴포넌트 타입지정
  return (
    <div>{props.name}프로필입니다</div>
  )
}
```

<br>

<strong class="subtitle2_fontAwesome">state</strong>

```javascript
// 타입 지정 자동으로 됨
let [user, setUser] = useState("kim");

// string | number가 들어올 수 있는 state를 만들고 싶으면?(매우 드뭄) -> Generic 문법을 이용해서 타입 지정
let [user, setUser] = (useState < string) | (number > "kim");
```

<br>
<br>

<strong class="subtitle_fontAwesome">redux</strong>

<strong class="subtitle2_fontAwesome">redux 쓰는 이유</strong>

1. 모든 컴포넌트 props 없이 state 공유 가능

2. state 수정 방법을 미리 한 파일에 정의 해놓고 그걸 불러서 수정시킴(버그 수정이 쉬움)

<br>

<strong class="subtitle2_fontAwesome">redux 타입지정</strong>

```Javascript
const 초기값 :{count :number} = { count : 0} // 모든 컴포넌트가 공유할 state

function reducer(state = 초기값, action :{type : string}){ // 미리 정의한 state 수정 방법
// 첫번째 파라미터는 타입지정필요 없음(default 파라미터 문법, 오른쪽 변수의 타입을 자동으로 가짐)
  if(action.type == '증가'){
    return {...state, count : state.count + 1}
  } else {
    return 초기값
  }
}
```

```Javascript
// 가져와 쓰는곳
function App(){
  const 꺼내온거 = useSelector( (state:{count : number}) => state ); // redux에 있던 state가 남음(이 부분에 타입지정)
  return(
    <div>{꺼내온거.count}</div>
  )
}
// state 부분이 바뀔때마다 수정해야하는 단점이 존재
```

```Javascript
// 지속 수정의 단점을 없애기 위해
// state를 수정하는 방법을 정의한 곳에서 export

const store = createStore(reducer);
export type RootState = ReturnType<typeof store.getState>;

// RootState에 store의 타입이 저장되어있음
// 사용할 곳에 import해서 사용하면됨
import { RootState } from "./index";

function App() {
  const 꺼내온거 = useSelector((state: RootState) => state); // redux에 있던 state가 남음(이 부분에 타입지정)
  return <div>{꺼내온거.count}</div>;
}
```

```Javascript
import {Dispatch} from 'redux'

function App() {
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch :Dispatch = useDispatch();
  return
  <div>{꺼내온거.count}</div>
  // state 수정요청 날릴때 dispatch 사용
  // 타입지정하고 싶으면 redux에서 Dispatch를 import하고 정의하면 뭔가가 빠지거나 type 키워드를 빼먹거나 하면 에러가남
  <button onClick={()=>{dispatch({type :'증가'})}}></button>
}
```

<br>

<strong class="subtitle2_fontAwesome">reduxjs/toolkit</strong>

라이브러리를 추가로 설치하고 조금더 깔끔하게 코드 작성 가능

```Javascript
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const 초기값:{count : number, user : string} = { count: 0, user : 'kim' };

const counterSlice = createSlice({
  // slice는 state와 reducer를 합쳐놓은 새로운 뭉텅이
  name: 'counter', // 3개의 이름 작명 불가
  initialState : 초기값,
  reducers: {
    increment (state){
      state.count += 1
    },
    decrement (state){
      state.count -= 1
    },
    incrementByAmount (state, action :PayloadAction<number>){
      // dispatch에서 이 함수를 가져다 쓸때 숫자를 넣을 것 같아서 number
      state.count += action.payload
    }
  }
})

let store = configureStore({
  reducer: {
    counter1 : counterSlice.reducer
    // counter1이라고 등록해서 다른 곳에서 사용할때 꺼내온거(지정한 변수).counter1.count 라고 해야 정보들이 딸려옴
  }
})

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState = ReturnType<typeof store.getState>

//수정방법 만든거 export
export let {increment, decrement, incrementByAmount} = counterSlice.actions

// 초기값 타입 설정해주고 두번째 파라미터에 action 타입 설정

// app.tsx
improt {RootState, increment} from './index'
...

<div>{꺼내온거.counter1.count}</div>
// 안에 객체대신 reduxjs toolkit 방식으로 변경
<button onClick={()=>{dispatch(increment())}}></button>

```
