import React from "react";

class Viber extends React.Component {
    render() {
        return (
            <div className="b-socialButton__buttonUnit">
                <img src={require('./v_icon.png' )}  alt={"Viber"}  />
            </div>
        )
    }
}


export default Viber;