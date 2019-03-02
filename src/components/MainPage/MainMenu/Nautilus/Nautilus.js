import React from "react";

class Nautilus extends React.Component {
    render() {
        return (
            <div className="b-socialButton__buttonUnit">
                <img src={require('./n_icon.png' )}  alt={"Nautilus"}  />
            </div>
        )
    }
}


export default Nautilus;