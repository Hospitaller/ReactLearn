import React from 'react';

class RegisterForm extends React.Component {
    render() {
        return (
            <div className="userFormWraper">
            <form className="b-userForm">
                <div className="b-userForm__inputWraper">
                    <input type="text" name="firstname" placeholder="Your name"></input>
                </div>
                <div className="b-userForm__inputWraper">
                    <input type="email" name="email" placeholder="Your email"></input>
                </div>
                <div className="b-userForm__inputWraper">
                    <input type="password" name="password" placeholder="Your password"></input>
                </div>
           </form>
        </div>
        )
    }
}

export default RegisterForm;