import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import "./Campaignlibrary.css";
import Cardlist from '../Cardlist/Cardlist';
import Simplelist from '../Simplelist/Simplelist';


class Campaignlibrary extends Component {
  state = {

  };

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
      </div>
    );
  }
}

export default Campaignlibrary;



