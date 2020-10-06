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

  //Antd functions for form
const [componentSize, setComponentSize] = useState("default");

const onFormLayoutChange = ({ size }) => {
  setComponentSize(size);
};

//Antd cascader data
const offerCodes = [
  {
    value: 'Some offer code',
    label: 'Some offer code',
  }
];

const states = [
  {
    value: "alabama",
    label: "Alabama"
  },
  {
    value: "alaska", 
    label: "Alaska"
  },
  {
    value: "arizona",
    label: "Arizona"
  },
  {
    value: "arkansas",
    label: "Arkansas"
  },
  {
    value: "california",
    label: "California"
  },
  {
    value: "colorado",
    label: "Colorado"
  },
  {
    value: "connecticut",
    label: "Connecticut"
  },
  {
    value: "delaware",
    label: "Delaware"
  },
  {
    value: "florida",
    label: "Florida"
  },
  {
    value: "georgia",
    label: "Georgia"
  },
  {
    value: "hawaii",
    label: "Hawaii"
  },
  {
    value: "idaho",
    label: "Idaho"
  },
  {
    value: "illinois",
    label: "Illinois"
  },
  {
    value: "indiana",
    label: "Indiana"
  },
  {
    value: "iowa",
    value: "Iowa"
  },
  {
    value: "kansas",
    label: "Kansas"
  },
  {
    value: "kentucky",
    label: "Kentucky"
  },
  {
    value: "louisiana",
    label: "Louisiana"
  },
  {
    value: "main",
    label: "Main"
  },
  {
    value: "maryland",
    label: "Maryland"
  },
  {
    value: "massachusetts",
    label: "Massachusetts"
  },
  {
    value: "michigan",
    label: "Michigan"
  },
  {
    value: "minnesota",
    label: "Minnesota"
  },
  {
    value: "mississippi",
    label: "Mississippi"
  },
  {
    value: "missouri",
    label: "Missouri"
  },
  {
    value: "montana",
    label: "Montana"
  },
  {
    value: "nebraska",
    label: "Nebraska"
  },
  {
    value: "nevada",
    label: "Nevada"
  },
  {
    value: "new hampshire",
    label: "New Hampshire"
  },
  {
    value: "new jersey",
    label: "New Jersey"
  },
  {
    value: "new mexico",
    label: "New Mexico"
  },
  {
    value: "new york",
    label: "New York"
  },
  {
    value: "north carolina",
    label: "North Carolina"
  },
  {
    value: "north dakota",
    label: "North Dakota"
  },
  {
    value: "ohio",
    label: "Ohio"
  },
  {
    value: "oklahoma",
    label: "Oklahoma"
  },
  {
    value: "oregon",
    label: "Oregon"
  },
  {
    value: "pennsylvania",
    label: "Pennsylvania"
  },
  {
    value: "rhode island",
    label: "Rhode Island"
  },
  {
    value: "south carolina",
    label: "South Carolina"
  },
  {
    value: "south dakota",
    label: "South Dakota"
  },
  {
    value: "tennessee",
    label: "Tennessee"
  },
  {
    value: "texas",
    label: "Texas"
  },
  {
    value: "utah",
    label: "Utah"
  },
  {
    value: "vermont",
    label: "Vermont"
  },
  {
    value: "virginia",
    label: "Virginia"
  },
  {
    value: "washington",
    label: "Washington"
  },
  {
    value: "west virginia",
    label: "West Virginia"
  },
  {
    value: "wisonsin",
    label: "Wisconsin"
  },
  {
    value: "wyoming",
    label: "Wyoming"
  }
]

const paymentTypes = [
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
]

//AntD checkbox functions
function onSameAsDeliveryCheckChange(e) {
  setSameAsDelivery(!sameAsDelivery);

  console.log(`checked = ${e.target.checked}`);
}

function sameAsDeliveryToggle() {
  setSameAsDelivery(!sameAsDelivery);
  if(sameAsDelivery === true) {
    setBillingAddress(deliveryAddress);
    setBillingCity(deliveryCity);
    setBillingState(deliveryState);
    setBillingZip(deliveryZip);
    return billingAddress
  }
}

function onPrivacyPolicyCheckChange(e) {
  setPrivacyPolicy(!privacyPolicy);
  console.log(`checked = ${e.target.checked}`);
}

function onNewsLetterCheckChange(e) {
  setNewsLetter(!newsLetter);
  console.log(`checked = ${e.target.checked}`);
}

//AntD Cascader functions
function onOfferCascadeChange(value) {
  setOfferCode(value);
  console.log(value);
}

function onDeliveryStateCascadeChange(value) {
  setDeliveryState(value);
  console.log(value);
}

function onBillingStateCascadeChange(value) {
  setBillingState(value);
  console.log(value);
}

function onPaymentCascadeChange(value) {
  setPaymentType(value);
  console.log(value);
}

//Continue button (submit form)

function submitForm() {
  console.log(`offercode: ${offerCode}`)
  console.log(`promocode: ${promoCode}`)
  console.log(`groupon: ${grouponCode}`)
  console.log(`email: ${email}`)
  console.log(`phone: ${phone}`)
  console.log(`firstname: ${firstName}`)
  console.log(`lastname: ${lastName}`)
  console.log(`company: ${company}`)
  console.log(`password: ${password}`)
  console.log(`confirm pass: ${confirmPassword}`)
  console.log(`delivery address: ${deliveryAddress}`)
  console.log(`delivery city: ${deliveryCity}`)
  console.log(`delivery state: ${deliveryState}`)
  console.log(`delivery zip: ${deliveryZip}`)
  console.log(`billing address: ${billingAddress}`)
  console.log(`billing city: ${billingCity}`)
  console.log(`billing state: ${billingState}`)
  console.log(`billing zip: ${billingZip}`)
  console.log(`Same as delivery: ${sameAsDelivery}`)
  console.log(`Cardholder name: ${cardHolderName}`)
  console.log(`payment type: ${paymentType}`)
  console.log(`card number: ${cardNumber}`)
  console.log(`expiration: ${expiration}`)
  console.log(`zipcode: ${zipCode}`)
  console.log(`EZ pay: ${ezPay}`)
  console.log(`Privacy policy: ${privacyPolicy}`)
  console.log(`newsletter: ${newsLetter}`)

}

//form state variables 
 const [offerCode, setOfferCode] = useState('');
 const [promoCode, setPromoCode] = useState('');
 const [grouponCode, setGrouponCode] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [company, setCompany] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const [deliveryAddress, setDeliveryAddress] = useState('');
 const [deliveryCity, setDeliveryCity] = useState('');
 const [deliveryState, setDeliveryState] = useState('');
 const [deliveryZip, setDeliveryZip] = useState('');
 const [billingAddress, setBillingAddress] = useState('');
 const [billingCity, setBillingCity] = useState('');
 const [billingState, setBillingState] = useState('');
 const [billingZip, setBillingZip] = useState(''); 

 const [sameAsDelivery, setSameAsDelivery] = useState(false);

 const [cardHolderName, setCardHolderName] = useState('');
 const [paymentType, setPaymentType] = useState('');
 const [cardNumber, setCardNumber] = useState('');
 const [expiration, setExpiration] = useState('');
 const [zipCode, setZipCode] = useState('');
 const [ezPay, setEzPay] = useState('');

 const [privacyPolicy, setPrivacyPolicy] = useState(false);
 const [newsLetter, setNewsLetter] = useState(false);

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
              <Form.Item label="Offer Code" value={offerCode}>
              <Cascader options={offerCodes} onChange={onOfferCascadeChange} placeholder="Please select an offer code" />
              </Form.Item>
              <Form.Item label="Promo Code"  value={promoCode}>
                <Input onChange={event => setPromoCode(event.target.value)} />
              </Form.Item>
              <Form.Item label="Groupon Code" value={grouponCode}>
                <Input onChange={event => setGrouponCode(event.target.value)} />
              </Form.Item>
              <Form.Item label="Email" value={email}>
                <Input onChange={event => setEmail(event.target.value)} />
              </Form.Item>
              <Form.Item label="Phone Number" value={phone}>
                <Input onChange={event => setPhone(event.target.value)} />
              </Form.Item>
              <Form.Item label="First Name" value={firstName}>
                <Input onChange={event => setFirstName(event.target.value)} />
              </Form.Item>
              <Form.Item label="Last Name" value={lastName}>
                <Input onChange={event => setLastName(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Company" value={company}>
                <Input onChange={event => setCompany(event.target.value)} />
              </Form.Item>
              <Form.Item label="Password" value={password}>
                <Input onChange={event => setPassword(event.target.value)} />
              </Form.Item>
              <Form.Item label="Confirm Password" value={confirmPassword}>
                <Input onChange={event => setConfirmPassword(event.target.value)}/>
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
              <Form.Item label="Delivery Address" value={deliveryAddress}>
                <Input onChange={event => setDeliveryAddress(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Delivery City" value={deliveryCity}>
                <Input onChange={event => setDeliveryCity(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Delivery State" value={deliveryState}>
                <Cascader options={states} onChange={onDeliveryStateCascadeChange} />
              </Form.Item>
              <Form.Item label="Delivery Zipcode" value={deliveryZip}>
                <Input onChange={event => setDeliveryZip(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Billing Address" value={billingAddress}>
                <Input onChange={event => setBillingAddress(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Billing City" value={billingCity}>
                <Input onChange={event => setBillingCity(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Billing State" value={billingState}>
              <Cascader options={states} onChange={onBillingStateCascadeChange} />
              </Form.Item>
              <Form.Item label="Billing Zipcode" value={billingZip}>
                <Input onChange={event => setBillingZip(event.target.value)} />
              </Form.Item>
              <Form.Item label="same as Delivery" value={sameAsDelivery}>
                <Checkbox onChange={onSameAsDeliveryCheckChange} onClick={sameAsDeliveryToggle} >
                  Billing address same as Delivery address
                </Checkbox>
              </Form.Item>
              <Form.Item label="Cardholders Name" value={cardHolderName}>
                <Input onChange={event => setCardHolderName(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Payment Type" value={paymentType}>
                <Cascader options={paymentTypes} onChange={onPaymentCascadeChange}/>
              </Form.Item>
              <Form.Item label="Card Number" value={cardNumber}>
                <Input onChange={event => setCardNumber(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Expiration" value={expiration}>
                <Input onChange={event => setExpiration(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Zip Code" value={zipCode}>
                <Input onChange={event => setZipCode(event.target.value)}/>
              </Form.Item>
              <Form.Item label="EZ Pay" value={ezPay}>
                <Input onChange={event => setEzPay(event.target.value)}/>
              </Form.Item>
              <Form.Item label="Privacy Policy" value={privacyPolicy}>
                <Checkbox onChange={onPrivacyPolicyCheckChange} >
                  Agree to Privacy Policy
                  </Checkbox>
              </Form.Item>
              <Form.Item label="News Letter" value={newsLetter}>
                <Checkbox onChange={onNewsLetterCheckChange} >
                  Sign Up For our Daily Newsletter
                </Checkbox>
              </Form.Item>
              <Button id="continue" onClick={submitForm}> Continue </Button>
            </Form>
          </div>
        </div>
      </>
    );
}

export default Signup;
