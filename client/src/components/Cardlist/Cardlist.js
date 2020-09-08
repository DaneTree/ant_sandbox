import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cardlist.css";
import { Button, Card } from "antd";

class Cardlist extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="flex-container1">
          <div id="non-subscriber">
            <h1>Non-Subscriber</h1>
            <div className="site-card-border-less-wrapper">
              <Card
                title="Campaign Title"
                bordered={false}
                style={{ width: 300 }}
              >
                <p>
                  Campaign Goal: <span className="campaign-goal"> </span>{" "}
                </p>
                <p>
                  Open Dates: <span className="open-dates"> </span>{" "}
                </p>
                <p>
                  # Page Views: <span className="page-views"> </span>{" "}
                </p>
                <p>
                  # Conversions: <span className="conversions-number"> </span>{" "}
                </p>
                <p>
                  % Conversions: <span className="conversion-percent"> </span>
                </p>
                <p>
                  % Conversions Today:{" "}
                  <span className="conversion-percent-today"> </span>
                </p>
                <p>
                  A/B Tested Paywall Names:{" "}
                  <span className="ab-paywall-names"></span>
                </p>
                <p>
                  A/B Tested Paywall Conversion Rate:{" "}
                  <span className="ab-paywall-conversion"></span>
                </p>
                <p>
                  Paywall Name: <span className="paywall-name"></span>
                </p>
                <p>
                  Paywall Conversion Rate:{" "}
                  <span className="paywall-conversion-rate"></span>
                </p>
                <Button type="danger">Unpublished</Button>
              </Card>
            </div>
          </div>
          <div id="subscriber">
            <h1>Subscriber</h1>
            <div className="site-card-border-less-wrapper">
              <Card
                title="Campaign Title"
                bordered={false}
                style={{ width: 300 }}
              >
                <p>
                  Campaign Goal: <span className="campaign-goal"> </span>{" "}
                </p>
                <p>
                  Open Dates: <span className="open-dates"> </span>{" "}
                </p>
                <p>
                  # Page Views: <span className="page-views"> </span>{" "}
                </p>
                <p>
                  # Conversions: <span className="conversions-number"> </span>{" "}
                </p>
                <p>
                  % Conversions: <span className="conversion-percent"> </span>
                </p>
                <p>
                  % Conversions Today:{" "}
                  <span className="conversion-percent-today"> </span>
                </p>
                <p>
                  A/B Tested Paywall Names:{" "}
                  <span className="ab-paywall-names"></span>
                </p>
                <p>
                  A/B Tested Paywall Conversion Rate:{" "}
                  <span className="ab-paywall-conversion"></span>
                </p>
                <p>
                  Paywall Name: <span className="paywall-name"></span>
                </p>
                <p>
                  Paywall Conversion Rate:{" "}
                  <span className="paywall-conversion-rate"></span>
                </p>
                <Button type="danger">Unpublished</Button>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex-container2">
          <div id="ex-subscriber">
            <h1>Ex-Subscriber</h1>
            <div className="site-card-border-less-wrapper">
              <Card
                title="Campaign Title"
                bordered={false}
                style={{ width: 300 }}
              >
                <p>
                  Campaign Goal: <span className="campaign-goal"> </span>{" "}
                </p>
                <p>
                  Open Dates: <span className="open-dates"> </span>{" "}
                </p>
                <p>
                  # Page Views: <span className="page-views"> </span>{" "}
                </p>
                <p>
                  # Conversions: <span className="conversions-number"> </span>{" "}
                </p>
                <p>
                  % Conversions: <span className="conversion-percent"> </span>
                </p>
                <p>
                  % Conversions Today:{" "}
                  <span className="conversion-percent-today"> </span>
                </p>
                <p>
                  A/B Tested Paywall Names:{" "}
                  <span className="ab-paywall-names"></span>
                </p>
                <p>
                  A/B Tested Paywall Conversion Rate:{" "}
                  <span className="ab-paywall-conversion"></span>
                </p>
                <p>
                  Paywall Name: <span className="paywall-name"></span>
                </p>
                <p>
                  Paywall Conversion Rate:{" "}
                  <span className="paywall-conversion-rate"></span>
                </p>
                <Button type="danger">Unpublished</Button>
              </Card>
            </div>
          </div>
          <div id="premium">
            <h1>Premium</h1>
            <div className="site-card-border-less-wrapper">
              <Card
                title="Campaign Title"
                bordered={false}
                style={{ width: 300 }}
              >
                <p>
                  Campaign Goal: <span className="campaign-goal"> </span>{" "}
                </p>
                <p>
                  Open Dates: <span className="open-dates"> </span>{" "}
                </p>
                <p>
                  # Page Views: <span className="page-views"> </span>{" "}
                </p>
                <p>
                  # Conversions: <span className="conversions-number"> </span>{" "}
                </p>
                <p>
                  % Conversions: <span className="conversion-percent"> </span>
                </p>
                <p>
                  % Conversions Today:{" "}
                  <span className="conversion-percent-today"> </span>
                </p>
                <p>
                  A/B Tested Paywall Names:{" "}
                  <span className="ab-paywall-names"></span>
                </p>
                <p>
                  A/B Tested Paywall Conversion Rate:{" "}
                  <span className="ab-paywall-conversion"></span>
                </p>
                <p>
                  Paywall Name: <span className="paywall-name"></span>
                </p>
                <p>
                  Paywall Conversion Rate:{" "}
                  <span className="paywall-conversion-rate"></span>
                </p>
                <Button type="danger">Unpublished</Button>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex-container3">
          <Link to="past-campaigns">
            <Button type="primary" className="button">
              Past Campaigns
            </Button>
          </Link>
          <Button type="primary" className="button">
            Create Campaign
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Cardlist;
