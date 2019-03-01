import React from 'react';
import parallaxMethod from '../../parallax';

import LoginHead from '../LoginHead/LoginHead';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import ButtonForm from "../ButtonForm/ButtonForm";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          login: this.props.login
        }
      }
      render() {
        const headDataLogin = [
          [{ title: "Login", text: "Your Company" }],
          [{ title: "Register", text: "Register Company" }],
        ];
        
        let loginHead = headDataLogin[0].map((h, index) => <LoginHead key={index} title={h.title} text={h.text} />);
        let registerHead = headDataLogin[1].map((h, index) => <LoginHead key={index} title={h.title} text={h.text} />);
        parallaxMethod();
        const setLogin = () => {
          this.setState({login: 1});
        }
        const setRegister = () => {
          this.setState({login: 0});
        }
          if (this.state.login === 1) {
            return (
              <div id="mainWraper">
                <div className="b-formWraper">
                    {loginHead}
                  <LoginForm name={""}/>
                        <ButtonForm enterBtn={"Login"} toggleNow={this.props.pageHandler}/>
                    <div className="b-togglerWraper">
                      <div id="loginToggler" className="b-togglerWraper__toggler" onClick={setLogin}>Login</div>
                      <div id="signinToggler" className="b-togglerWraper__toggler" onClick={setRegister}>Sign In</div>
                    </div>
                  </div>
                <div id="mountain"></div>
              </div>
            )
          } else {
            return (
              <React.Fragment>
              <div id="mainWraper">
                <div className="b-formWraper">
                    {registerHead}
                    <RegisterForm />
                    <ButtonForm enterBtn={"Register"} />
                    <div className="b-togglerWraper">
                      <div id="loginToggler" className="b-togglerWraper__toggler" onClick={setLogin}>Login</div>
                      <div id="signinToggler" className="b-togglerWraper__toggler" onClick={setRegister}>Sign In</div>
                    </div>
                  </div>
                <div id="mountain"></div>
              </div>
              </React.Fragment>
            );
        }
      }
}


export default LoginPage;