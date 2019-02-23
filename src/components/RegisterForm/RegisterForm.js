import React from 'react';

const RegisterForm = () => {
   
    return (
        <div className="userFormWraper">
            <form className="userForm">
                <div className="inputWraper">
                    <input type="text" name="firstname" placeholder="Your name"></input>
                </div>
                <div className="inputWraper">
                    <input type="email" name="email" placeholder="Your email"></input>
                </div>
                <div className="inputWraper">
                    <input type="password" name="password" placeholder="Your password"></input>
                </div>
           </form>
        </div>
    );
}

export default RegisterForm;