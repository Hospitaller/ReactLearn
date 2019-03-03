import React from "react";

class Viber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            block: "Viber"
        }
    }
    render() {
        return (
            <div className="b-socialButton__buttonUnit">
                <img src={require('./v_icon.png' )}  alt={"Viber"} onClick={()=>{this.props.updateChild(this.state.block)}}  />
            </div>
        )
    }
}


export default Viber;