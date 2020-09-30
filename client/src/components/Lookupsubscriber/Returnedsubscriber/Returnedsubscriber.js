import React, { Component } from "react";
import "./Returnedsubscriber.css";
import ABQjournal from "./ABQjournal/ABQjournal";
import Ejournal from "./Ejournal/Ejournal";
import { Card } from "antd";

class Returnedsubscriber extends Component {
  state = {
    pageTitle: "Title",
    id: "1D2F34A",
    firstName: "Jane",
    lastName: "Doe",
    email: "JaneD@gmail.com",
    password: "123",
    address: "987 street San Diego CA, 91942",
    phone: "123-456-7890",
    subscriptions: "ABQ & Ejournal",
  };

  render() {
    return (
      <div className="returned-subscriber-container">
        <Card
          size="small"
          title={this.state.pageTitle}
          bordered={false}
          style={{ width: 200 }}
        >
          <p><b>ID:</b> {this.state.id}</p>
          <p><b>First Name:</b> {this.state.firstName}</p>
          <p><b>Last Name:</b> {this.state.lastName}</p>
          <p><b>email:</b> {this.state.email}</p>
          <p><b>password:</b> {this.state.password}</p>
          <p><b>Address:</b> {this.state.address}</p>
          <p><b>Phone:</b> {this.state.phone}</p>
          <p><b>Subscriptions:</b> {this.state.subscriptions}</p>
        </Card>
        <ABQjournal />
        <Ejournal />
        <ABQjournal />
      </div>
    );
  }
}

export default Returnedsubscriber;
