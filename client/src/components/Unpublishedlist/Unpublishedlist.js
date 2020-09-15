import React, { Component } from "react";
import "./Unpublishedlist.css";
import { List, Typography, Divider, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <Button >Edit</Button>
    </Menu.Item>
    <Menu.Item>
      <Button >Delete</Button>
    </Menu.Item>
  </Menu>
);

class Unpublishedlist extends Component {
  state = {
      campaignTitle: "Title",
      subscriberType: "Type",
      paywalls: 2,
      dates: "12-02-2020 - 12-09-2020"
  };

  render() {
    return (
      <div>
        <div className="list-container">
          <Divider orientation="left">Unpublished Campaigns</Divider>
          <List style={{ paddingLeft: "10px" }}>
          <List.Item>
              <Typography.Text mark>Campaign Title:</Typography.Text> {this.state.campaignTitle}{" "}
              {"   "}
              <Typography.Text mark>Subscriber Type:</Typography.Text> {this.state.subscriberType}{" "}
              {"   "}
              <Typography.Text mark>Paywalls:</Typography.Text> {this.state.paywalls}{" "}
              {"   "}
              <Typography.Text mark>Campaign Dates:</Typography.Text> {this.state.dates}{" "}
              {"   "}
              <Button >Publish</Button> {"   "}
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Edit/Delete <DownOutlined />
                </a>
              </Dropdown>
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}

export default Unpublishedlist;
