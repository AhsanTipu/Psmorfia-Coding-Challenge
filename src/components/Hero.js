import React from "react";

const Hero=()=>{
    return(
        <>
        <section id="top_background">
        <div className="container">
          <h1 className="top-head">DAILY NEWS NETWORK</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="input-fields">
                <div className="input-group mb-3">
                  <input type="text" id="inpa" className="form-control" placeholder="TITLE" aria-label="Username" />
                 
                  <button id="inpa" type="button" className="btn btn-success">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Hero;