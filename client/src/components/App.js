import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Dashboard from './Dashboard';
import Header from './Header';
import Signout from './auth/Signout';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signout" exact component={Signout} />
          <Route path="/dashboard" exact component={Dashboard} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
