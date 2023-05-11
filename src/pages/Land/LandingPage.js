import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./style-land.css"


function Loading() {
    let navigate = useNavigate()

    return (
        <div>
            <section className="home">
    <div className="headerbg ">
      <div className="home_content mtop">
        <div className="container11">
          <div className="left">
            <h1>REBUNEKA THE DOLL</h1>

            <div className="time flex">
              <label>R</label>
              <i className="fas fa-circle"></i>
              <span>1hrs 50mins</span>
              <i className="fas fa-circle"></i>
              <p>2021</p>
              <i className="fas fa-circle"></i>
              <button onClick={()=> { navigate("/LoginPage")}}>Login</button>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="button flex">
              <button className="" onClick={()=> { navigate("/signuppage")}}>PLAY NOW</button>
              <i id="palybtn" className="fas fa-play"></i>
              <p>WATCH TRAILER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}

export default Loading;