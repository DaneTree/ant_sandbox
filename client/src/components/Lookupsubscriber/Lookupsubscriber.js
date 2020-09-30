import "./Lookupsubscriber.css";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Returnedsubscriber from "./Returnedsubscriber/Returnedsubscriber";

const Lookupsubscriber = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [display, setDisplay] = React.useState(false)

  const toggleDisplay = () => !display ? setDisplay(true) : setDisplay(false)
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
              <Button onClick={() => toggleDisplay() }>submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className="returned-results-grid">
          <div className="result-1">
            { display ? <Returnedsubscriber /> : null }
          </div>
      </div>    
    </div>
  );
};

// ReactDOM.render(<FormSizeDemo />, mountNode);

export default Lookupsubscriber;
