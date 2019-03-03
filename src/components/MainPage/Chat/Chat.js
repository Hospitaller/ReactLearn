import React from 'react';

class Chat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            block: "none"
        }
    }
    updateData = (value) => {
        this.setState({ block: value })
    }
    render() {
        return (
            <div className="b-panel b-panel__chat b-panel__chat_size100">
                <div className="b-chat__title">
                    <h1>{this.state.block} Messenger</h1> 
                </div>
            </div>
        )
    }
}

export default Chat;