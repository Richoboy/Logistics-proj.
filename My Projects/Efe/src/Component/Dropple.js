import React from "react";

function Dropple() {
  return (
    <div className="body1">
      <div className="page">
        <div className="image">
          <div className="writing"></div>
          <div className="work">
            <h2>One App That Makes</h2>
            <h2>Deliveries, Easier</h2>
            <h2>And Faster.</h2>
          </div>
        </div>
        <br/><br/>
        <div className="part">
            <p>With the Dropple App, you get to enjoy 
            <br/>the convenience of sending packages <br/>and receiving food all in <b>one App</b></p>
            <br/>
            <h2>Just Dropple</h2>
        </div>
        <div className="pics">
         
            <img src="images/van.jpg" alt="van"/>
            <img src="images/sky.jpg" alt="loads"/>
            <img src="images/truck.jpg" alt="truck"/>
      
        </div>

        <div className="pics2">
          <img className="phone" src="images/phone.jpg" alt="ph"/>
          <img src="images/delivery.jpg" alt="deli"/>
        </div>
        <div className="load">
            <h2>Download Dropple App</h2>
            <br></br>
            <h5>Available for iOS and Android</h5>
        </div>
        
        <footer></footer>    
        
      </div>
    </div>
  );
}

export default Dropple;
