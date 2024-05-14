import React, { useState } from "react";

function Hamsath() {
  const [user, setuser] = useState([]);
  function adduser() {
    setuser([...user, user]);
  }

  function next() {}
  return (
    <div>
      <div className="users">
        <button onClick={adduser}>Add User</button>
      </div>
      <div className="user-list">
        <ul className="user">
          {user.map((task, index) => (
            <li key={index}>
              {task}
              <div style={{ display: "flex", gap: "10px" }}>
                <h2>User</h2>
                <p>step1</p>
                <p>step2</p>
                <p>step3</p>
                <button onClick={() => next(index)}>Next</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hamsath;
