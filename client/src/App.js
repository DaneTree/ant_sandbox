import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Campaignlibrary from './components/Campaignlibrary/Campaignlibrary';
import Pastcampaigns from './components/Pastcampaigns/Pastcampaigns';
import Lookupsubscriber from './components/Lookupsubscriber/Lookupsubscriber' 
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/Campaign-library" component={Campaignlibrary} exact />
        <Route path="/past-campaigns" component={Pastcampaigns} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/lookup-subscriber" component={Lookupsubscriber} exact />
      </Switch>
    </React.Fragment>
    </BrowserRouter>
    </div>
  );
}

export default App;

