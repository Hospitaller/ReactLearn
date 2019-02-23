import React from 'react';

const ButtonForm = (props) => {
    
    return (
        <div className="buttonFormWraper">
            <div className="keepLogin">
                <input type="checkbox"></input>
                Keep me logged in
            </div>
            <div className="btnLogin">
                <div className="btnTitle">{props.enterBtn}</div>
            </div>
    </div>
    );
}

export default ButtonForm;