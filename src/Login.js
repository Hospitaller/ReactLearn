import React, { Component } from 'react';

class Login extends Component {
    render() {
        console.log("Hello from logic");
        return (
            <div className="login">
                <h4 className="loginTo">Login To</h4>
                <h1 className="title">Your Company</h1>
            </div>
        );
    }
}

export default Login;