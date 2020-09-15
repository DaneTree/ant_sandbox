import React, { Component } from "react";
import "./Pastcampaignlist.css";
import { List, Typography, Divider, Button} from "antd";



class Pastcampaignlist extends Component {
  state = {
      campaignTitle: "Title",
      subscriberType: "type",
      conversionNum: 20,
      conversionPercent: 100,
      paywallNum: 2
  };

  render() {
    return (
      <div>
        <div className="list-container">
          <Divider orientation="left">Past Campaigns</Divider>
          <List style={{ paddingLeft: "10px" }}>
          <List.Item>
              <Typography.Text mark>Campaign Title:</Typography.Text> {this.state.campaignTitle}{" "}
              {"   "}
              <Typography.Text mark>Subscriber Type:</Typography.Text> {this.state.subscriberType}{" "}
              {"   "}
              <Typography.Text mark>Number Of Conversions:</Typography.Text> {this.state.conversionPercent}{" "}
              {"   "}
              <Typography.Text mark>Conversions %:</Typography.Text> {this.state.conversionPercent}{" "}
              {"   "}
              <Typography.Text mark>Number of Paywalls:</Typography.Text> {this.state.paywallNum}{" "}
              {"   "}
              <Button id="details"> Details </Button>
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}

export default Pastcampaignlist;
