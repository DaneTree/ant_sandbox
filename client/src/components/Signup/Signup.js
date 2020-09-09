import "./Signup.css";
import React, { useState } from "react";
import {
  Form,
  Input,
  Checkbox,
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

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <>
      <img src="./images/logo.jpg" alt="Albuquerque Journal Logo" id="logo" />
      <div className="flex-container">
        <div className="form-container">
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
        <div className="form-container">
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
                value: 'California',
                label: 'California'
              },
              {
                value: 'Oregon',
                label: 'Oregon'
              },
              {
                value: 'Washington',
                label: 'Washington'
              }
            ]}
          />
        </Form.Item>
            <Form.Item label="Billing Zipcode">
              <Input />
            </Form.Item>
            <Form.Item label="">
            <Checkbox onChange={onChange}>Billing address same as Delivery address</Checkbox>
            </Form.Item>
            <Form.Item label="Cardholders Name">
              <Input />
            </Form.Item>
            <Form.Item label="Payment Type">
          <Cascader
            options={[
              {
                value: 'Visa',
                label: 'Visa'
              },
              {
                value: 'Mastercard',
                label: 'Mastercard'
              },
              {
                value: 'AMEX',
                label: 'AMEX'
              }
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
            <Checkbox onChange={onChange}>Agree to Privacy Policy</Checkbox>
            </Form.Item>
            <Form.Item label="">
            <Checkbox onChange={onChange}>Sign Up For our Daily Newsletter</Checkbox>
            </Form.Item>
            <Button> Continue </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

// ReactDOM.render(<FormSizeDemo />, mountNode);

export default Signup;
