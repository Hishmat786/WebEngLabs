import React from "react";
import Navbar from "../Comp/Navbar";
import Aside from "../Comp/Aside";
import "../Comp/style.css";
import Container2 from "../Comp/Container2";
import Footer from "../Comp/Footer";
function Children() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <Aside />
        <div className="con">
          <Container2 />
          <Container2 />
        </div>
        <Aside/>
      </div>
      <Footer/>
    </div>
  );
}

export default Children;
