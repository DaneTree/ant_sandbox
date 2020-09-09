import "./Login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const Login = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const click = () => {
    alert("You clicked me!!");
  };

  //   const validEmailRegex =
  //   RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  return (
    <>
      <img src="./images/logo.jpg" alt="Albuquerque Journal Logo" id="logo" />
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
            <Form.Item label="Email">
              <Input />
            </Form.Item>

            <Form.Item label="Password">
              <Input />
            </Form.Item>

            {/* <button onClick={ click()}> click </button> */}

            <Form.Item label="" style={{ paddingLeft: "150px" }}>
              <Button type="primary" onClick={() => click()}>
                Log In
              </Button>
            </Form.Item>
            <Form.Item label="Forgot Password?">
              <Button type="primary">Reset Password</Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div id="button-container">
      <Link to="/campaign-library">
        {" "}
        <Button className="buttons">Campaign Library</Button>{" "}
      </Link>{" "}
      <Link to="/past-campaigns">
        {" "}
        <Button className="buttons">Past Campaigns</Button>{" "}
      </Link>
      <Link to="/signup">
        {" "}
        <Button className="buttons">Sign up</Button>{" "}
      </Link>
     </div>
     
    </>
  );
};

// ReactDOM.render(<FormSizeDemo />, mountNode);

export default Login;
