import React, {useState } from 'react';
import parallaxMethod from './parallax';
import './scss/App.scss';
import LoginHead from './components/LoginHead/LoginHead';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import ButtonForm from './components/ButtonForm/ButtonForm';


const headDataLogin = [
  [{ title: "Login", text: "Your Company" }],
  [{ title: "Register", text: "Register Company" }],
];

let loginHead = headDataLogin[0].map((h, index) => <LoginHead key={index} title={h.title} text={h.text} />);
let registerHead = headDataLogin[1].map((h, index) => <LoginHead key={index} title={h.title} text={h.text} />);

const App = (props) => {
  const [login, setLoginToggler] = useState(1) //Хук для переключения окна ввода логин-регистрация  
  const setLogin = () => setLoginToggler(1);
  const setRegister = () => setLoginToggler(0);
  parallaxMethod();
  if (login === 1) {
    return (
      <div id="mainWraper">
        <div className="formWraper">
            {loginHead}
            <LoginForm />
          <ButtonForm enterBtn={"Login"}/>
            <div className="togglerWraper">
              <div id="loginToggler" className="toggler" onClick={setLogin}>Login</div>
              <div id="signinToggler" className="toggler" onClick={setRegister}>Sign In</div>
            </div>
          </div>
        <div id="mountain"></div>
      </div>
    )
  }
    return (
      <React.Fragment>
      <div id="mainWraper">
        <div className="formWraper">
            {registerHead}
            <RegisterForm />
            <ButtonForm enterBtn={"Register"} />
            <div className="togglerWraper">
              <div id="loginToggler" className="toggler" onClick={setLogin}>Login</div>
              <div id="signinToggler" className="toggler" onClick={setRegister}>Sign In</div>
            </div>
          </div>
        <div id="mountain"></div>
      </div>
      </React.Fragment>
    );
}


export default App;


