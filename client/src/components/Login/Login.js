import "./Login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const Login = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const submit = () => {
    console.log(`email: ${email}, password: ${password}`)
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //   const validEmailRegex =
  //   RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  return (
    <>
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
            <Form.Item label="Email" value={email}>
              <Input onChange={event => setEmail(event.target.value)} />
            </Form.Item>
            <Form.Item label="Password" value={password}>
              <Input onChange={event => setPassword(event.target.value)} />
            </Form.Item>
            <Form.Item label="" style={{ paddingLeft: "150px" }}>
              <Button type="primary" onClick={() => submit()}>
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
      <Link to="/lookup-subscriber">
        {" "}
        <Button className="buttons">Lookup Subscriber</Button>{" "}
      </Link>
      <Link to="/user-management">
        {" "}
        <Button className="buttons">User Management</Button>{" "}
      </Link>
     </div>
     
    </>
  );
};

// ReactDOM.render(<FormSizeDemo />, mountNode);

export default Login;
