import React, { Component } from 'react';
import parallaxMethod from './parallax';
import logo from './logo.svg';

import './scss/App.scss';
import Login from './Login';

class App extends Component {
  

  render() {
    parallaxMethod();
    return (
     
      <div id="mainWraper">
        <div className="formWraper">
          <Login />
        </div>
        <div id="mountain"></div>
      </div>
    );
    
  }
}

export default App;


