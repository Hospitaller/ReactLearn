import React from 'react';

class ButtonForm extends React.Component {
     ttt = () => {
        this.props.toggleNow()
    }
    render() {

        
        return (
            <div className="buttonFormWraper">
             <div className="keepLogin">
                    <input type="checkbox"></input>             
                Keep me logged in
            </div>
                <div className="btnLogin" onClick={this.ttt}>
                <div className="btnTitle">{this.props.enterBtn}</div>
            </div>
            </div>
        )
    }
}

export default ButtonForm;