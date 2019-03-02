import React from "react";

class Whatsapp extends React.Component {
    render() {
        return (
            <div className="b-socialButton__buttonUnit" >
                <img src={require('./w_icon.png' )}  alt={"Whatsapp"}  />
            </div>
        )
    }
}


export default Whatsapp;