import React from "react";

class Whatsapp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            block: "Whatsapp"
        }
    }
    render() {
        
        return (
            <div className="b-socialButton__buttonUnit" >
                <img src={require('./w_icon.png')} alt={"Whatsapp"} onClick={()=>{this.props.updateChild(this.state.block)}}  />
            </div>
        )
    }
}


export default Whatsapp;