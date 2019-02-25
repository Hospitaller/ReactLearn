import React from 'react';


const LoginHead = (props) => {
        return (
            <div className="login">
                <h4 className="loginTo">{props.title}</h4>
                <h1 className="title">{props.text}</h1>
            </div>
    );
}

export default LoginHead;