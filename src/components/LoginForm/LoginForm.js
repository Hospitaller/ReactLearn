import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ButtonForm from '../ButtonForm/ButtonForm';



class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            pass: null,
            colorName: "none",
            colorPass:"none"
        }
    }
    render() {
        const handleNameInput = (e) => {
            let name = e.target.value;
            if (name.length < 4) { //Более 3 символов
                this.setState({ colorName: "1px solid red" });
            } else {
                this.setState({ colorName: "none", name: name });
            }
        }

        const handlePassInput = (e) => {
              let pass = e.target.value;
              if (pass.length < 1) { //Не пустое поле
                  this.setState({ colorPass: "1px solid red" });
              } else {
                  this.setState({ colorPass: "none" });
              }
            }
        return (
            <React.Fragment>
                    <div className="userFormWraper">
                <form className="b-userForm">
                    <div className="b-userForm__inputWraper">
                        <input type="text" name="firstname" placeholder="Name" onChange={handleNameInput}  style={{border:this.state.colorName}}></input>
                    </div>
                    <div className="b-userForm__inputWraper">
                        <input type="password" name="password" placeholder="Enter password" onChange={handlePassInput}  style={{border:this.state.colorPass}}></input>
                    </div>
                </form>
            </div>
            <div className="buttonFormWraper">
                <div className="keepLogin">
                        <input type="checkbox"></input>             
                    Keep me logged in
                </div>
                    <div className="btnLogin" onClick={this.props.rrr(this.state.name)}>
                    <div className="btnTitle">{this.props.enterBtn}</div>
                </div>
            </div>
            </React.Fragment>
            
  

            
        )
    }
}

export default LoginForm;