import React from "react";

class Facebooking extends React.Component {
    render() {
        return (
            <div className="b-socialButton__buttonUnit">
                <img src={require('./fb_icon.png' )}  alt={"Facebooking"}  />
            </div>
        )
    }
}


export default Facebooking;