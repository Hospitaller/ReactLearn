import React from 'react';

const LoginForm = (props) => {
    
    return (
        <div className="userFormWraper">
            <form className="userForm">
                <div className="inputWraper">
                    <input type="text" name="firstname" placeholder="Name"></input>
                </div>
                <div className="inputWraper">
                    <input type="password" name="password" placeholder="Enter password"></input>
                </div>
           </form>
        </div>
    );
}

export default LoginForm;