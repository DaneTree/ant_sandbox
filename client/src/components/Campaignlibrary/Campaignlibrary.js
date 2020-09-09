import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./Campaignlibrary.css";
import Cardlist from "../Cardlist/Cardlist";
import Simplelist from "../Simplelist/Simplelist";

class Campaignlibrary extends Component {
  state = {};

  render() {
    return (
      <div>
        <img src="./images/logo.jpg" alt="Albuquerque Journal Logo" id="logo" />
        {/* <div className="flex-container">
          <h3 id="non-subscriber">Non-Subscriber</h3>
          <h3 id="subscriber">Subscriber</h3>
          <h3 id="ex-subscriber">Ex-Subscriber</h3>
          <h3 id="premium">Premium</h3>
        </div> */}
        <div className="flex-container">
          <div id="non-subscriber-container">
            <h3 id="non-subscriber">Non-Subscriber</h3>
            <Cardlist />
          </div>
          <div id="subscriber-container">
            <h3 id="subscriber">Subscriber</h3>
            <Cardlist />
          </div>
          <div id="ex-subscriber-container">
            <h3 id="ex-subscriber">Ex-Subscriber</h3>
            <Cardlist />
          </div>
          <div id="premium-container">
            <h3 id="premium">Premium</h3>
            <Cardlist />
          </div>
        </div>
        <span></span>
        <Simplelist />
        <div calssName="button-container">
          <Link to="/">
            <Button className="buttons">Login</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Campaignlibrary;
