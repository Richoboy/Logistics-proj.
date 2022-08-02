import { useState } from "react";
import React from "react";
import "../../styles/Driver.scss";
import { NavLink } from "react-router-dom";

const DriverComp = () => {
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phonenumber.email.city);
  };
  const values = {
    phonenumber: phonenumber,
    email: email,
    city: city,
  };
  console.log(values);
  return (
    <div>
      <div
        className="Drive"
        style={{ backgroundImage: "url(./pictures/driv.jpg)" }}
      >
        <div className="Drive-with">
          <h1>Drive with Dropple</h1>
          <p>
            Earn good money <span>with your vehicle</span>
          </p>
        </div>
        <div className="formm" onSubmit={handleSubmit} method="POST" action="">
          <h3>Signup as a driver below</h3>
          <p className="p">
            If you have multiple vehices and drivers,
            <br />
            <span2>signup as a fleet owner here.</span2>{" "}
          </p>
          <form className="signup">
            <p>
              <label>
                Email <span>*Required</span>
              </label>
              <br />
              <input
                type={"email"}
                placeholder="example@gmail.com"
                className="form-items"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <text>This will be your Username</text>.
            </p>
            <p>
              <label>
                Phone number <span>*Required</span>
              </label>
              <br />
              <input
                type={"tel"}
                placeholder="0803****078"
                className="form-items"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </p>
            <p>
              <label>
                City <span>*Required</span>
              </label>
              <br />
              <input
                type={"text"}
                className="form-items"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </p>
            <button>Next</button>
          </form>
        </div>
      </div>
      <div className="why">
        <div className="why-dropple">
          <h4>Why Dropple?</h4>
        </div>
        <div className="why-grid">
          <div className="lp">
            <h5>Earn money</h5>
            <p className="l">Drive with dropple and earn extra money</p>
          </div>
          <div className="lp">
            <h5>Drive anytime</h5>
            <p className="l">
              Work with your own schedule, No minimum
              <br /> hours and no boss
            </p>
          </div>
          <div className="lp">
            <h5>No monthly fees</h5>
            <p className="l">No risk, you only pay when you earn</p>
          </div>
          <div className="lp">
            <h5>Accept the request</h5>
            <p>Drive with dropple and earn extra money</p>
          </div>
          <div className="lp">
            <h5>Pick up goods</h5>
            <p>
              Work with your own schedule, No minimum
              <br /> hours and no boss
            </p>
          </div>
          <div className="lp">
            <h5>Deliver at destination</h5>
            <p>No risk, you only pay when you earn</p>
          </div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
        </div>
        <fieldset>
          <div className="QA-t">
            <p>
              Q: I don't drive full-time. Can I use Bolt for just a few hours a
              week?{" "}
              <p>
                A: Of course, some of our drivers are only active a few hours
                during weekends and make solid part-time income.
              </p>
            </p>
            <p>
              Q: How do I get paid?{" "}
              <p>
                A: Clients pay you in cash or via Bolt. We pay out to your bank
                account every week.
              </p>
            </p>
            <p>
              Q: How much do I pay Bolt?{" "}
              <p>
                A: We do not have any monthly fees, so you only pay for finished
                trips. We usually ask for 10% to 20% of the ride fee, depending
                on your city. You can get more information by contacting us.
              </p>
            </p>
            <p>
              Q: How long does it take to sign up?{" "}
              <p>
                A: Submitting your information takes just 5 minutes. After that
                you will get a 30 minute training in our office. In some cities,
                we will accept your application remotely once you provide us
                with all the necessary documents.
              </p>
            </p>
            <p>
              Q: What if I don't have a smartphone?{" "}
              <p>
                A: Our city teams suggest you a budget Android smartphone that
                you can buy or finance.
              </p>
            </p>
            <p>
              Q: What if I don't have a vehicle?{" "}
              <p>
                A: Our city teams can help you match with our partner fleets or
                rental companies who offer competitive rates on vehicles that
                are accepted on our platform. In some cities, longer term
                drivers can get financing deals from our partners.
              </p>
            </p>
            <h6>Check our Knowledgebase for more info.</h6>
          </div>
        </fieldset>

        <NavLink to="/address">
          <button>Let's help you deliver</button>
        </NavLink>
        <div className="footer">
          <p>
            Got questions or concerns? <span>Contact us.</span>
          </p>
          <h6>Got questions or concerns? Contact us.</h6>

          <select>
            <option value="English, Nigeria">
              <a href="#" language="english">
                English, Nigeria
              </a>
            </option>
            <option value="Italian, Italy">
              <a href="#" language="italiano">
                Italian, Italy
              </a>
            </option>
            <option value="Spanish, Spain">
              <a href="#" language="espanyol">
                Spanish, Spain
              </a>
            </option>
            <option value="French, France">
              <a href="#" language="francais">
                French, France
              </a>
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DriverComp;
