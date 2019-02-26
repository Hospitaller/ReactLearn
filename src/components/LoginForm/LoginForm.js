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
        
       
        
        const handleNameInput = (e) => { //Заполняет state в имени 
            
            console.log(this.props.name)
            if (e.target.value.length < 4) { //Более 3 символов
                this.setState({ colorName: "1px solid red" });
           
            } else {
                this.setState({ colorName: "none" });
            }
        }
    
        const handlePassInput = (e) => { //Заполняет state в пароле
            this.setState({pass: e.target.value})
            
           
            if (this.props.pass.length < 1) { //Не пустое поле
                this.setState({ colorPass: "1px solid red" });
            } else {
                this.setState({ colorPass: "none" });
            }
        }
        return (
            <div className="userFormWraper">
            <form className="userForm">
                <div className="inputWraper">
                    <input type="text" name="firstname" placeholder="Name"  onChange={handleNameInput} style={{border:this.props.colorName}}></input>
                </div>
                <div className="inputWraper">
                    <input type="password" name="password" placeholder="Enter password" value={this.props.pass} onChange={handlePassInput} style={{border:this.props.colorPass}}></input>
                </div>
           </form>
        </div>
        )
    }
}

export default LoginForm;