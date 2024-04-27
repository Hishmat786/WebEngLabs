import "./Chameleon.css"
import { Circle } from "./Shapes";
import React, { useState } from 'react'
const Chameleon = () => {

    

    const [color, setColor] = useState("red");

    return (
        <>
            <div className="btnarea">
                <button 
                style={{
                    backgroundColor:"red"
                }} onClick={() => {
                    setColor("red")
                }} 
                >
                    Red
                
                </button>
                <button style={{backgroundColor:color.blue}}>Blue</button>
                <button style={{backgroundColor:"green"}} >Green</button>
                <button style={{backgroundColor:"purple"}}>Purple</button>
            </div>
            <div className="circle">

            </div>
        </>
    );
};
export default Chameleon