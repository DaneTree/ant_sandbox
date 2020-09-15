import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cardlist.css";
import { Button, Card } from "antd";

class Cardlist extends Component {
  state = {
    campaignTitle: "Campaign Title goes here",
    campaignGoal: "to confer 200 users by 20 July",
    openDates: "12/21/2020 - 1/12/2021",
    pageViews: 100,
    conversionNumber: 200,
    conversionPercent: 100,
    aPercent: 12,
    aName: "PAYWALL A NAME",
    bPercent: 4,
    bName: "PAYWALL B NAME",
    paywallName: "Paywall Name",
    paywallConversion: 100
  };

  render() {
    return (
      <React.Fragment>

            <div className="site-card-border-less-wrapper">
              <Card
                size="small"
                title={this.state.campaignTitle}
                bordered={false}
                style={{ width: 200 }}
              >
                <p>
                  <h5>Campaign goal {this.state.campaignGoal}</h5>{" "}
                </p>
                <p>
                  <b><h4>{this.state.openDates}</h4></b>{" "}
                </p>
                <p>
                  {this.state.pageViews} Page Views{" "}
                </p>
                <p>
                  {this.state.conversionNumber} Conversions{" "}
                </p>
                <p>
                  {this.state.conversionPercent}% Converted{" "}
                </p>
                <p>
                  <b>A/B Test Paywalls</b>{" "}
                  <span className="ab-paywall-names"></span>
                </p>
                <p>
                  <h5>{this.state.aPercent}% {" "} {this.state.aName}</h5>
                </p>
                <p>
                  <h5>{this.state.bPercent}% {" "} {this.state.bName}</h5>
                </p>
                <p>
                  <h4>{this.state.paywallName}</h4>
                </p>
                <p>
                  <h4>Conversion Rate: {this.state.paywallConversion}%</h4>
                </p>
                <Button id="unpublish">Unpublish</Button>
              </Card>
            </div>
          
      </React.Fragment>
    );
  }
}

export default Cardlist;
