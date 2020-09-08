import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Pastcampaigns.css";
import Cardlist from "../Cardlist/Cardlist";
import Simplelist from "../Simplelist/Simplelist";
import { Button, Pagination } from 'antd';

class Pastcampaigns extends Component {
  state = {};

  render() {
    return (
      <div>
        <img src="./images/logo.jpg" alt="Albuquerque Journal Logo" id="logo" />
        <Cardlist />
        <span></span>
        <Simplelist />
        <div calssName="button-container">
          <Link to="/"><Button className="buttons">Login</Button></Link>
        </div>
        <Pagination className="pagination" simple defaultCurrent={1} total={1} />
      </div>
    );
  }
}

export default Pastcampaigns;
