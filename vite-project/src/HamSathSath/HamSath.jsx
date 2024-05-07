import React, { useState } from 'react';

export default function HamSath() {
    const [user, setuser]= useState([]);
    const addUser = () => {
        console.log("clicked");
    };
  return (
    <div>
      <h1> HamSathSath </h1>
      <button onClick={addUser}>Add User</button>
      
    </div>
  );
}
