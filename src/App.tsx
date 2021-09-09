
import React from 'react';
import { Route } from 'react-router-dom';

function App(){
  return (
    <>
      <Route exact path="/" >
        <div>메인</div>
        <div>업데이트됨?</div>
      </Route>
      <Route path="/detail" >
        <div>123</div>
        <div>상세</div>
      </Route>
    </>
  )
}

export default App;
