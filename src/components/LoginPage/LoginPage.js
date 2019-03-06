import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import ButtonForm from "../ButtonForm/ButtonForm";
import LoginHead from '../LoginHead/LoginHead';



import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        pass: "",
        colorName: "",
		colorPass: "",
        title: "Login",
		company: "Login Company",
    }
	}
	test = (value) => {
		
		 console.log("callback"+value)
	}
  render() {
    const setLogin = (value) => {
      this.setState({title: "Login", company: "Login Company"});
    }
    const setRegister = () => {
      this.setState({title: "Register", company: "Register Company"});
	  }
	  const setResult = () => {
		  this.setState({name: "ss"});
	  }
	  
  const headDataLogin = [
      [{ title: "Login", text: "Your Company" }],
      [{ title: "Register", text: "Register Company" }],
    ];
    
    let loginHead = headDataLogin[0].map((h, index) => <LoginHead key={index} title={this.state.title} text={this.state.company} />);
 



	  let pageRender = null;
	  if (this.state.title === "Login") {
			pageRender = <LoginForm enterBtn={this.state.title} rrr={this.test}/>
	  } else {
			pageRender = <RegisterForm />
	  }

	  return (
		<div id="mainWraper">
		<div className="b-formWraper">
				  {loginHead}
				  {pageRender}
			<div className="b-togglerWraper">
				<div id="loginToggler" className="b-togglerWraper__toggler" onClick={setLogin}>Login</div>
				<div id="signinToggler" className="b-togglerWraper__toggler" onClick={setRegister}>Sign In</div>
			</div>
			</div>
		<div id="mountain"></div>
	</div>
            )
        }
}



export default LoginPage;