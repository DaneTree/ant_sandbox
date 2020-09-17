import "./Lookupsubscriber.css";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const Login = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  //   const validEmailRegex =
  //   RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  return (
    <div>
      <div className="flex-container">
        <div className="form-container">
          <Form
            style={{ paddingTop: "50px" }}
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
            <Form.Item label="Subscriber email">
              <Input />
            </Form.Item>
            <Form.Item label="account id">
              <Input />
            </Form.Item>
            <Form.Item label="" style={{ paddingLeft: "150px" }}>
              <Button>submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className="returned-results-container">
          
      </div>    
    </div>
  );
};

// ReactDOM.render(<FormSizeDemo />, mountNode);

export default Login;
