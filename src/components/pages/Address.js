import React from "react";
import "../../styles/logistics.scss";
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
      </div>
      <div className="pay-options">
        <span className="pay-box">
          <img src="./pictures/money.png" className="pay" alt="cash" />
          <span className="Pop">Cash</span>
        </span>
        <span className="pay-box">
          <img src="./pictures/creC.png" className="pay" alt="Credit-card" />
          <span className="Pop">Card</span>
        </span>
        <span className="pay-box">
          <img src="./pictures/wallet.png" className="pay" alt="wallet" />
          <span className="Pop">Wallet</span>
        </span>
      </div>
      <button type="submit" className="btn">
        Request
      </button>

      <div
        className="map"
        style={{ backgroundImage: "url(./pictures/nija.png)" }}
      ></div>
    </section>
  );
};

export default Address;
