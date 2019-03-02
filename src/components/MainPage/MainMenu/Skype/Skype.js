import React from "react";

class Skype extends React.Component {
    render() {
        return (
            <div className="b-socialButton__buttonUnit">
                <img src={require('./s_icon.png' )}  alt={"Skype"}  />
            </div>
        )
    }
}


export default Skype;