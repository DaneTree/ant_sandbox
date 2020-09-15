import React, { Component } from "react";
import "./Pastcampaigns.css";
import Cardlist from "../Cardlist/Cardlist";
import Pastcampaignlist from "../Pastcampaignlist/Pastcampaignlist";
import { Button } from 'antd';

class Pastcampaigns extends Component {
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
        <div className="button-container">
          <Button className="buttons">Create Campaign</Button>
        </div>
        <Pastcampaignlist />
        <Pastcampaignlist />
        <Pastcampaignlist />
      </div>
    );
  }
}

export default Pastcampaigns;
