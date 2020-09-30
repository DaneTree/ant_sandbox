import React, { Component } from 'react';
import './Usermanagement.css';
import { Button, Modal, Form, Input } from 'antd';

class Createmodal extends Component {
    state = {
        visible: false
    }
    
    handleOk = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };

    render() {
        return(
            <div>
                 <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
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
              size: "default",
            }}
            onValuesChange={null}
            size="default"
          >
            <Form.Item label="First Name">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
            <Form.Item label="Role">
              <Input />
            </Form.Item>
          </Form>
          <div className="button-container">
          <Button className="buttons" >Cancel</Button>
          <Button className="buttons" >Save</Button>
        </div>
        </Modal>
            </div>
        )
    }
}

export default Createmodal;