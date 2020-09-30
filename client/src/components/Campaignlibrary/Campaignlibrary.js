import React, { Component } from "react";
import { Button } from "antd";
import "./Campaignlibrary.css";
import Cardlist from "../Cardlist/Cardlist";
import Unpublishedlist from "./Unpublishedlist/Unpublishedlist";

class Campaignlibrary extends Component {
  state = {};

  render() {
    return (
      <div>
  
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
         <div className="button-container">
          <Button className="buttons">Create Campaign</Button>
        </div>
        <Unpublishedlist />
        <Unpublishedlist />
        <Unpublishedlist />
      </div>
    );
  }
}

export default Campaignlibrary;
