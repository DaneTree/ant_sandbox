import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Campaignlibrary from './components/Campaignlibrary/Campaignlibrary';
import Pastcampaigns from './components/Pastcampaigns/Pastcampaigns';
import Lookupsubscriber from './components/Lookupsubscriber/Lookupsubscriber' 
import Usermanagement from './components/Usermanagement/Usermanagement';
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
        <Route path="/user-management" component={Usermanagement} exact />
      </Switch>
    </React.Fragment>
    </BrowserRouter>
    </div>
  );
}

export default App;

