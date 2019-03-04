import React from 'react';

class Chat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            block: "none",
            chat: "none"
        }
    }
    updateChat = (value) => {
        this.setState({ block: value })
    }
    render() {
        return (
            <div className="b-panel b-panel__chat b-panel__chat_size100">
                <div className="b-chat__title">
                    <h1>{this.state.block} - Messenger</h1> 
                    <p>{this.state.chat}</p>
                </div>
            </div>
        )
    }
}

export default Chat;