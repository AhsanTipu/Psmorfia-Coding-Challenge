import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Details from "./Details";
const Main=({ posts, loading })=>{
    return(
        <>
<Navbar />
<Hero />
<div className='container' id="postz">
      <div className='row'>

        {posts.map(post => (

          <div className='col-md-4 col-sm-12 col-xs-12 mt-4'>

            <div key={post.id} className="card" style={{ width: '18rem' }}>

              <img src={post.imageUrl} className="card-img-top" alt="..." />
              
              <div className="card-body">
              
                <p className="card-text title">{post.title}</p>

                <button className="btn btn-dark">READ MORE</button>
              
              </div>
            </div>

          </div>

        ))}
      </div>
    </div>
<Details />
<Footer />
</>
    )
}

export default Main;