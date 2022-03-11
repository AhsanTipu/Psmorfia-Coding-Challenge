import React from "react";
import "../css/style.css"
import Logo from "../assets/Ways.png"

const Navbar=()=>{
    return(
        <>
 <section id="topbar" className="shadow-sm pb-3  bg-body rounded fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <img src={Logo} className="logo" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <ul className="ultop">
                <li className="litop"><i className="fas fa-phone-alt" id="icontop"><span className="icotext">01736789456</span> </i></li>
                <a href="Sign.html">
                  <li className="litop"><i className="fas fa-user-circle" style={{color: '#556080'}} id="icontop"><span className="icotext">Login / Sign Up</span> </i></li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>

        </>
    )
}

export default Navbar;