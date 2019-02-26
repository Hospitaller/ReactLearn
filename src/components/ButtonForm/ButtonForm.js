import React from 'react';

class ButtonForm extends React.Component {
    render() {
        return (
            <div className="buttonFormWraper">
             <div className="keepLogin">
                    <input type="checkbox"></input>             
                Keep me logged in
            </div>
            <div className="btnLogin">
                <div className="btnTitle">{this.props.enterBtn}</div>
            </div>
            </div>
        )
    }
}

export default ButtonForm;