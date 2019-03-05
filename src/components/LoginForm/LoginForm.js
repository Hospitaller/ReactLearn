import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ButtonForm from "../ButtonForm/ButtonForm";
import LoginHead from '../LoginHead/LoginHead';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pass: "",
            colorName: "",
            colorPass: ""
        }
    }
    render() {
        const setLogin = () => {
            this.setState({login: 1});
          }
          const setRegister = () => {
            this.setState({login: 0});
          }
        const headDataLogin = [
            [{ title: "Login", text: "Your Company" }],
            [{ title: "Register", text: "Register Company" }],
          ];
          
          let loginHead = headDataLogin[0].map((h, index) => <LoginHead key={index} title={h.title} text={h.text} />);
        let registerHead = headDataLogin[1].map((h, index) => <LoginHead key={index} title={h.title} text={h.text} />);
        
        const handleNameInput = (e) => { //
            let name = e.target.value;
            if (name.length < 4) { //Более 3 символов
                this.setState({ colorName: "1px solid red" });
           
            } else {
                this.setState({ colorName: "none" });
            }
        }
        const handlePassInput = (e) => { //
            let pass = e.target.value;
            if (pass.length < 1) { //Не пустое поле
                this.setState({ colorPass: "1px solid red" });
            } else {
                this.setState({ colorPass: "none" });
            }
        }
        return (
            <BrowserRouter>
            


            <div id="mainWraper">
                <div className="b-formWraper">
                    {loginHead}
                
                    <div className="userFormWraper">
            <form className="b-userForm">
                <div className="b-userForm__inputWraper">
                    <input type="text" name="firstname" placeholder="Name" onChange={handleNameInput} style={{border:this.state.colorName}}></input>
                </div>
                <div className="b-userForm__inputWraper">
                    <input type="password" name="password" placeholder="Enter password" onChange={handlePassInput} style={{border:this.state.colorPass}}></input>
                </div>
           </form>
        </div>


                        <ButtonForm enterBtn={"Login"} toggleNow={this.props.pageHandler}/>
                    <div className="b-togglerWraper">
                        <Link to="/loginPage/login">
                        <div id="loginToggler" className="b-togglerWraper__toggler" onClick={setLogin}>Login</div>
                        </Link>

                        <Link to="/loginPage/register">
                            <div id="signinToggler" className="b-togglerWraper__toggler" onClick={setRegister}>Sign In</div>
                        </Link>
                    </div>
                  </div>
                <div id="mountain"></div>
            </div>
            

            </BrowserRouter>
        )
    }
}

export default LoginForm;