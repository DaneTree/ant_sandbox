import "./Signup.css";
import React, { useState } from "react";
import { Component } from 'react';
import {
  Form,
  Input,
  Checkbox,
  Button,
  Cascader
} from "antd";



const Signup = () => {

  const [componentSize, setComponentSize] = useState("default");

const onFormLayoutChange = ({ size }) => {
  setComponentSize(size);
};

const options = [
  {
    value: 'Some offer code',
    label: 'Some offer code',
  }
];

function onCheckChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onCascadeChange(value) {
  console.log(value);
}

    return (
      <>
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
              <Cascader options={options} onChange={onCascadeChange} placeholder="Please select an offer code" />
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
        <div className="flex-container">
          <div className="form-container2">
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
              <Form.Item label="Delivery Address">
                <Input />
              </Form.Item>
              <Form.Item label="Delivery City">
                <Input />
              </Form.Item>
              <Form.Item label="Delivery State">
                <Cascader
                  options={[
                    {
                      value: "California",
                      label: "California",
                    },
                    {
                      value: "Oregon",
                      label: "Oregon",
                    },
                    {
                      value: "Washington",
                      label: "Washington",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Delivery Zipcode">
                <Input />
              </Form.Item>
              <Form.Item label="Billing Address">
                <Input />
              </Form.Item>
              <Form.Item label="Billing City">
                <Input />
              </Form.Item>
              <Form.Item label="Billing State">
                <Cascader
                  options={[
                    {
                      value: "California",
                      label: "California",
                    },
                    {
                      value: "Oregon",
                      label: "Oregon",
                    },
                    {
                      value: "Washington",
                      label: "Washington",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Billing Zipcode">
                <Input />
              </Form.Item>
              <Form.Item label="">
                <Checkbox onChange={onCheckChange}>
                  Billing address same as Delivery address
                </Checkbox>
              </Form.Item>
              <Form.Item label="Cardholders Name">
                <Input />
              </Form.Item>
              <Form.Item label="Payment Type">
                <Cascader
                  options={[
                    {
                      value: "Visa",
                      label: "Visa",
                    },
                    {
                      value: "Mastercard",
                      label: "Mastercard",
                    },
                    {
                      value: "AMEX",
                      label: "AMEX",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Card Number">
                <Input />
              </Form.Item>
              <Form.Item label="Expiration">
                <Input />
              </Form.Item>
              <Form.Item label="Zip Code">
                <Input />
              </Form.Item>
              <Form.Item label="EZ Pay">
                <Input />
              </Form.Item>
              <Form.Item label="">
                <Checkbox onChange={onCheckChange}>Agree to Privacy Policy</Checkbox>
              </Form.Item>
              <Form.Item label="">
                <Checkbox onChange={onCheckChange}>
                  Sign Up For our Daily Newsletter
                </Checkbox>
              </Form.Item>
              <Button id="continue"> Continue </Button>
            </Form>
          </div>
        </div>
      </>
    );
}

// ReactDOM.render(<FormSizeDemo />, mountNode);

export default Signup;
