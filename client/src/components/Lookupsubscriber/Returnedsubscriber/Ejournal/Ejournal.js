import React, { Component } from 'react';
import './Ejournal.css'; 
import { Card } from 'antd';

class Ejournal extends Component {
    state ={
        subID: 1823,
        account: 92843,
        expiration: "12-21-2021",
        status: "Active",
        PAC: "False", 
        billingFirstName: "Jane",
        billingLastName: "Doe", 
        billingAddress: "987 street San Diego",
        billingZip: 91942,
        billingCountry: "US",
        DeliveryMethod: "Postal",
        DeliveryDays: "M-F"

    }

    render() {
        return (
            <Card
                size="small"
                title="Ejournal"
                bordered={false}
                style={{ width: 200 }}
              >
                <p><b>ID:</b> {this.state.subID}</p>
                <p><b>Account #:</b> {this.state.account}</p>
                <p><b>expiration:</b> {this.state.expiration}</p>
                <p><b>Status:</b> {this.state.status}</p>
                <p><b>PAC:</b> {this.state.PAC}</p>
                <p><b>Billing First Name:</b> {this.state.billingFirstName}</p>
                <p><b>Billing Last Name:</b> {this.state.billingLastName}</p>
                <p><b>Billing Zip:</b> {this.state.billingZip}</p>
                <p><b>Billing Country:</b> {this.state.billingCountry}</p>
                <p><b>Delivery Method:</b> {this.state.DeliveryMethod}</p>
                <p><b>Delivery Days:</b> {this.state.DeliveryDays}</p>
            </Card>
        )
    }
}

export default Ejournal; 