import React from 'react';

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
        )
    }
}

export default LoginForm;