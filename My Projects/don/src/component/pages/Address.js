import React from "react";

//import { NavLink } from 'react-router-dom'
//import { icons } from 'react-icons';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faCcMastercard} from "@fortawesome/free-brands-svg-icons";

const Address = () => {
  return (
    <section>
      <div className="add-input">
        <h5>Pickup</h5>
        <p>
          <input
            type="text"
            className="input"
            placeholder="example@gmail.com"
          />
        </p>
        <p>
          <input
            type="text"
            className="input"
            placeholder="example@gmail.com"
          />
        </p>
        <p>
          <input
            type="text"
            className="input"
            placeholder="example@gmail.com"
          />
        </p>
        <p>
          <input
            type="text"
            className="input"
            placeholder="example@gmail.com"
          />
        </p>
        <p>
          <input
            type="text"
            className="input"
            placeholder="example@gmail.com"
          />
        </p>
        <p>
          <input
            type="text"
            className="input"
            placeholder="example@gmail.com"
          />
        </p>
        <div className="scrollbar"></div>
<hr></hr>
      </div>
      <div className="pay-options">
        <span className="pay-box">
          <img src="money.png" className="pay" alt="cash" />
          <span className="Pop">Cash</span>
        </span>
        <span className="pay-box">
          <img src="creC.png" className="pay" alt="Credit-card" />
          <span className="Pop">Card</span>
        </span>
        <span className="pay-box">
          <img src="wallet.png" className="pay" alt="wallet" />
          <span className="Pop">Wallet</span>
        </span>
      </div>
    <button type="submit" className="btn">Request</button>
      <div className="map"></div>
    </section>
  );
};

export default Address;
