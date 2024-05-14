import React, { useState } from 'react';
import '../Comp/C1.css';
function Container2() {
  const [count, setcount]= useState(0)
  function add(){
    setcount(count+1)
  }
  function sub(){
    setcount(count-1)
  }
  return (
    <div className='c1'>
        <p onClick={add} >+</p>
        <h2>{count}</h2>
        <p onClick={sub} >-</p>
    </div>
  );
}

export default Container2;
