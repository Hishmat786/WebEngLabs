import React, { useState } from 'react';

function Counts() {
    const [counts, setcounts]= useState([])
    const [count, setcount]= useState(0)

    function add(){
        const coun=`
        <p> +</>
        <p>${count} </>
        <p> +</>
        `
        setcounts([...counts, coun])
        
    }
  return (
    <div>

        <div className="click">
            <button onClick={add}>Add Counter</button>
        </div>

        <div className="counters">


        </div>
      
    </div>
  );
}

export default Counts;
