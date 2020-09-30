import React, { Component } from 'react';
import './Usermanagement.css';
// import Createmodal from './Createmodal';
import { Table, Button, Modal, Form, Input} from 'antd';


//Table data and population functionality
const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role'
  }
];

let data = [];
for (let i = 100; i < 120; i++) {
  data.push({
    key: `key${i}`,
    firstName: `Edward`,
    lastName: `King ${i}`,
    email: `EKing${i}@gmail.com`,
    role: `Role ${i}`
  });
}

class Usermanagement extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    visible: false,
    confirm: false,
    users: data
  };


// Modal form function
// onFormLayoutChange = ({ size }) => {
//     ComponentSize(size);
//   };


//Functions for User table

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  // Functions for handling the Create User modal

  showCreateModal = () => {
    this.setState({
    visible: true,
    });
  };

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

  //Functions for handling the Delete user confirmation

  showCreateModalTwo = () => {
    this.setState({
    confirm: true,
    });
  };

  handleOkTwo = e => {
    console.log(e);
    this.setState({
    confirm: false,
    });
  };

  handleCancelTwo = e => {
    console.log(e);
    this.setState({
    confirm: false,
    });
  };

  //Function for confirming delete, closing modal and deleting member
  confirmDelete = () => {
    this.removeUsers()
    this.handleCancelTwo()

  }
  
  //Functions for deleting users that are checked

  removeUsers = () => {
    this.setState((oldState) => {
      const oldUsers = oldState.users;
      const selectedRowKeys = oldState.selectedRowKeys;

      const newUsers = oldUsers.filter((user, index) => {

        return !selectedRowKeys.includes(oldUsers[index].key)
      })
        return {
          users: newUsers
        }
    })
    console.log(this.state.selectedRowKeys);
  }

  

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    let hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.users} />
        <div className="button-container">
          <Button className="buttons" onClick={this.showCreateModal}>Create User</Button>
          <Button className="buttons" onClick={this.showCreateModalTwo}>Remove User</Button>
        </div>
        {/* Create User Modal */}
        <Modal
          title="Enter User information"
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
        </Modal>
      {/* Delete user modal */}
      <Modal
            title="Enter User information"
            visible={this.state.confirm}
            onOk={this.confirmDelete}
            onCancel={this.handleCancelTwo}
          >
            <h3>Are you sure you want to delete user(s)?</h3>
            
          </Modal>
      </div>
    );
  }
}


export default Usermanagement; 