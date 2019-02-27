import React from 'react';

class LoginHead extends React.Component {
    render() {
        return (
            <div className="login">
                <h4 className="loginTo">{this.props.title}</h4>
                <h1 className="title">{this.props.text}</h1>
            </div>
        )
    }
}

export default LoginHead;