import React, { Component } from "react";
import "./Simplelist.css";
import { List, Typography, Divider, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <Button type="primary">Edit</Button>
    </Menu.Item>
    <Menu.Item>
      <Button type="danger">Delete</Button>
    </Menu.Item>
  </Menu>
);

class Simplelist extends Component {
  state = {
      
  };

  render() {
    return (
      <div>
        <div className="list-container">
          <Divider orientation="left">Unpublished Campaigns</Divider>
          <List style={{ paddingLeft: "10px" }}>
            <List.Item>
              <Typography.Text mark>Campaign Title:</Typography.Text> Some info{" "}
              {"   "}
              <Typography.Text mark>Subscriber Type:</Typography.Text> Some info{" "}
              {"   "}
              <Typography.Text mark>Paywalls:</Typography.Text> Some info{" "}
              {"   "}
              <Typography.Text mark>Campaign Dates:</Typography.Text> Some info{" "}
              {"   "}
              <Button type="primary">Publish</Button> {"   "}
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Edit/Delete <DownOutlined />
                </a>
              </Dropdown>
            </List.Item>
            <List.Item>
              <Typography.Text mark>Campaign Title:</Typography.Text> Some info{" "}
              {"   "}
              <Typography.Text mark>Subscriber Type:</Typography.Text> Some info{" "}
              {"   "}
              <Typography.Text mark>Paywalls:</Typography.Text> Some info{" "}
              {"   "}
              <Typography.Text mark>Campaign Dates:</Typography.Text> Some info{" "}
              {"   "}
              <Button type="primary">Publish</Button> {"   "}
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Edit/Delete <DownOutlined />
                </a>
              </Dropdown>
            </List.Item>
            <List.Item>
              <Typography.Text mark>Campaign Title:</Typography.Text> Some info{" "}
              {"   "}
              <Typography.Text mark>Subscriber Type:</Typography.Text> Some info{" "}
              {"   "}
              <Typography.Text mark>Paywalls:</Typography.Text> Some info{" "}
              {"   "}
              <Typography.Text mark>Campaign Dates:</Typography.Text> Some info{" "}
              {"   "}
              <Button type="primary">Publish</Button> {"   "}
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

export default Simplelist;
