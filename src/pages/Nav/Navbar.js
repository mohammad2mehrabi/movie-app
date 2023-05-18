import React from "react";
import "../../css/style.css";
import { FaAlignRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Nav() {
    let navigate = useNavigate()

    return (
        <div>
            <nav className="Nav">
                <div class="menu">
                    <div class="logo">
                        <img src="" />
                    </div>

                    <input type="checkbox" id="check" />
                    <label for="check" class="checkbtn">
                        <FaAlignRight />
                    </label>
                    <ul className="ull">
                        <li>
                            <div class="MobNavBtns">
                                <button onClick={()=> { navigate("/profile")}}>My profile</button>
                            </div>
                        </li>
                        <li onClick={()=> { navigate("/home")}}><a href="" >Home</a></li>
                        <li onClick={()=> { navigate("/addmoviemainpage")}}><a href="">Add Movie</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li onClick={()=> { navigate("/")}}><a href="">Logaut</a></li>
                    </ul>

                    <div class="NavBtns">
                        <button onClick={()=> { navigate("/profile")}}>My profile</button>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Nav;