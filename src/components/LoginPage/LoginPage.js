import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
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
				data: null
    }
	}
	test = (value) => {
		let data = value; //Переменная хранит инпут
		console.log(data)
		
	}
  render() {
		const setLogin = (value) => {
			this.setState({ title: "Login", company: "Login Company" });
			this.props.dataEvent(1)
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
			<BrowserRouter>
			
		<div id="mainWraper">
		<div className="b-formWraper">
				  {loginHead}
				  {pageRender}
						<div className="b-togglerWraper">
							<Link to="/main"><div id="loginToggler" className="b-togglerWraper__toggler" onClick={setLogin}>Login</div></Link>
				
				<div id="signinToggler" className="b-togglerWraper__toggler" onClick={setRegister}>Sign In</div>
			</div>
			</div>
		<div id="mountain"></div>
		</div>
				</BrowserRouter>
            )
        }
}



export default LoginPage;