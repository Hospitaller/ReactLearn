import React from 'react';
import parallaxMethod from './parallax';


import './scss/App.scss';
import LoginHead from './components/LoginHead';
import LoginForm from './components/LoginForm';
import ButtonForm from './components/ButtonForm';
import LoginToggler from './components/LoginToggler';

const App = () =>  {
 
    parallaxMethod();
    return (
      <div id="mainWraper">
        <div className="formWraper">
          <LoginHead />
          <LoginForm />
          <ButtonForm />
          <LoginToggler />
        </div>
        <div id="mountain"></div>
      </div>
    );
}

export default App;


