import React from "react";
import Img1 from "../assets/152800.png";
import Img2 from "../assets/Visa_Inc._logo.svg.png";
import Img3 from "../assets/mastercard-27-711792.png";
import Img4 from "../assets/BKash-bKash-Logo.wine.png";
import Img5 from "../assets/Nagad-Logo.wine.png";


const Footer=()=>{
    var React = require('react')
var FontAwesome = require('react-fontawesome')
    return(
        
      <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h6 className="h-f">We Accept</h6>
            <ul className="ul-f">
              <li className="ft-img--li"><img className="ft-ima" src={Img1} alt="" /></li>
              <li className="ft-img--li"><img className="ft-ima" src={Img2} alt="" /></li>
              <li className="ft-img--li"><img className="ft-ima" src={Img3} alt="" /></li>
              <li className="ft-img--li"><img className="ft-ima" src={Img4} alt="" /></li>
              <li className="ft-img--li"><img className="ft-ima" src={Img5} alt="" /></li>
            </ul>
            <h6 className="h-f2">Socials</h6>
            <ul className="ul-f">
              <li className="li-sc"><FontAwesome
        className="super-crazy-colors"
        name="rocket"
        size="2x"
        spin
      /></li>
              <li className="li-sc"><i id="sc" className="fab fa-instagram" /></li>
              <li className="li-sc"><i id="sc" className="fab fa-twitter" /></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <ul className="ul-f">
              <li className="li-f"><a className="a-f" href="about.html">About</a></li>
              <li className="li-f"><a className="a-f" href="#">Blog</a></li>
              <li className="li-f"><a className="a-f" href="support.html">Support</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <ul className="ul-f">
              <li className="li-f"><a className="a-f" href="#">Terms &amp; Conditions</a></li>
              <li className="li-f"><a className="a-f" href="#">Guest Poolicies</a></li>
              <li className="li-f"><a className="a-f" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <ul className="ul-f">
              <li className="li-f">Hotels</li>
              <li className="li-f"><a className="a-f" href="#">Dhaka</a></li>
              <li className="li-f"><a className="a-f" href="#">Chittagong</a></li>
              <li className="li-f"><a className="a-f" href="#">Shylet</a></li>
              <li className="li-f"><a className="a-f" href="#">Barishal</a></li>
              <li className="li-f"><a className="a-f" href="#">Ran</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container" id="cp-m">
        <p className="ft-cp">© CopyRight 2021 All Rights Reserved By Bangladesh Hotel Brand Network Powered By <a target="-blank" style={{color: 'white', textDecoration: 'none'}} href="https://www.fiverr.com/syedahsanali00">@Fiverr/syeahsanali00</a> </p>
      </div>
    </footer>
    )
}

export default Footer;