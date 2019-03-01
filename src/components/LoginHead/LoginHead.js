import React from 'react';

class LoginHead extends React.Component {
    render() {
        return (
            <div className="b-login">
                <h4 className="b-login__loginTo">{this.props.title}</h4>
                <h1 className="b-login__title">{this.props.text}</h1>
            </div>
        )
    }
}

export default LoginHead;