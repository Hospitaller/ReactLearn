import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";



import LoginForm from '../LoginForm/LoginForm';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          login: this.props.login
        }
      }
      render() {
            return (
              <BrowserRouter>
                <Route path="/loginPage/login" render={ ()=> <LoginForm name={""} />} />
              </BrowserRouter>
            )
        }
}



export default LoginPage;