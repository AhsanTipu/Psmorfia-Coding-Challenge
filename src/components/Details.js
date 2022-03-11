import React from "react";
import Img1 from "../assets/Group 51.png";
import Img2 from "../assets/online-payment.png";
import Img3 from "../assets/customer-service.png";
import Img4 from "../assets/customer-review (1).png";

const Details=()=>{
    return(
        <section id="choose">
        <h2 className="heading">Why Choose Us?</h2>
        <p className="para">We gie you a legendary welcome, everytime you come back,<br /> Come stay and enjoy your day</p>
        <div className="container" id="ch-con">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="inner text-centerr">
                <img src={Img1} className="img-ch" alt="" />
                <h5 className="head-ch">Lowest Price Guarantee</h5>
                <p className="p-ch">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore voluptatum, </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="inner text-centerr">
                <img src={Img2} className="img-ch" alt="" />
                <h5 className="head-ch">Freebies &amp; Flexibility</h5>
                <p className="p-ch">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore voluptatum, </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="inner text-centerr">
                <img src={Img3} className="img-ch" alt="" />
                <h5 className="head-ch">Dedicated Customer Service</h5>
                <p className="p-ch">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore voluptatum, </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="inner text-centerr">
                <img src={Img4} className="img-ch" alt="" />
                <h5 className="head-ch">Customer Satisfaction</h5>
                <p className="p-ch">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore voluptatum, </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Details;