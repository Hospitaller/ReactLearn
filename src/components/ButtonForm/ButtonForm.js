import React from 'react';

class ButtonForm extends React.Component {
     toggler = () => {
        this.props.toggleNow()
    }
    render() {

        
        return (
            <div className="buttonFormWraper">
             <div className="keepLogin">
                    <input type="checkbox"></input>             
                Keep me logged in
            </div>
                <div className="btnLogin" onClick={this.toggler}>
                <div className="btnTitle">{this.props.enterBtn}</div>
            </div>
            </div>
        )
    }
}

export default ButtonForm;