import React from "react";
import "../../styles/dropple.scss";
import PlayComp from "../play";
const DroppleComp = () => {
  return (
    <div className="body1">
      <div className="page">
        <div
          className="image"
          style={{ backgroundImage: "url(./images/truck.jpg)" }}
        >
          <div className="writing"></div>
          <div className="work">
            <h2>One App That Makes</h2>
            <h2>Deliveries, Easier</h2>
            <h2>And Faster.</h2>
            <div className="button-flex">
              <PlayComp
                logo img src="./pictures/play.png" alt="/" />
                name="GET IT ON"
                store="Play Store"
              
              <PlayComp
                logo= {<i class="fa-brands fa-apple" />}
                name="GET IT ON"
                store="Apple Store"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="part">
          <div>
            <p>
              With the Dropple App, you get to enjoy
              <br />
              the convenience of sending packages <br />
              and receiving food all in <b>one App</b>
            </p>
            <br />
            <h2>Just Dropple</h2>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <img src="images/cart.jpg" alt="van" />
          </div>
          <div className="grid-item">
            <img src="images/skyy.jpg" alt="loads" />
          </div>
          <div className="grid-item">
            <img src="images/park.jpg" alt="truck" />
          </div>
          <div className="grid-item">
            <img className="phone" src="images/skyy.jpg" alt="ph" />
          </div>
          <div className="grid-item ">
            <img src="images/delivery.jpg" alt="deli" />
          </div>
        </div>
        {/* <div className="pics">
          <img src="images/van.jpg" alt="van" />
          <img src="images/sky.jpg" alt="loads" />
          <img src="images/truck.jpg" alt="truck" />
        </div>

        <div className="pics2">
          <img className="phone" src="images/phone.jpg" alt="ph" />
          <img src="images/delivery.jpg" alt="deli" />
        </div> */}
        <div className="load">
          <h2>Download Dropple App</h2>
          <br></br>
          <h5>Available for iOS and Android</h5>
          <div className="button-flex">
            <PlayComp
              logo= {<img src="./pictures/play.png" alt="/" />}
              name="GET IT ON"
              store="Play Store"
            />
            <PlayComp
              logo= {<i class="fa-brands fa-apple" />}
              name="GET IT ON"
              store="Apple Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroppleComp;
