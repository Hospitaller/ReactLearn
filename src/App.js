import React from 'react';
import parallaxMethod from './parallax';


import './scss/App.scss';
import LoginHead from './components/LoginHead';
import LoginForm from './components/LoginForm';
import ButtonForm from './components/ButtonForm';

const App = () =>  {
 
    parallaxMethod();
    return (
      <div id="mainWraper">
        <div className="formWraper">
          <LoginHead />
          <LoginForm />
          <ButtonForm />
        </div>
        <div id="mountain"></div>
      </div>
    );
}

export default App;


