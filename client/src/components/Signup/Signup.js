import "./Signup.css";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

const Signup = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <img src="./images/logo.jpg" alt="Albuquerque Journal Logo" id="logo" />
      <div className="flex-container">
        <div className="form-container1">
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Offer Code">
              <Input />
            </Form.Item>
            <Form.Item label="Promo Code">
              <Input />
            </Form.Item>
            <Form.Item label="Groupon Code">
              <Input />
            </Form.Item>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
            <Form.Item label="Phone Number">
              <Input />
            </Form.Item>
            <Form.Item label="First Name">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item label="Company">
              <Input />
            </Form.Item>
            <Form.Item label="Password">
              <Input />
            </Form.Item>
            <Form.Item label="Confirm Password">
              <Input />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

// ReactDOM.render(<FormSizeDemo />, mountNode);

export default Signup;
