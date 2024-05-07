import React, { useState } from 'react';

export default function HamSath() {
    const [users, setuser]= useState([]);
    const addUser = () => {
        console.log("clicked");
    };
  return (
    <div>
      <h1> HamSathSath </h1>
      <button onClick={addUser}>Add User</button>
      <div>
        users.map((item) => (
            <div>
            <span>User 1</span>
        <button>Step1</button>
        <button>Step2</button>
        <button>Step3</button>
        <button>Step4</button>
            </div>
        ))
        
      </div>
    </div>
  );
}
