import React from 'react';
import Help from "./Help/Help";
import Settings from "./Settings/Settings";

class Inbox extends React.Component{
    render() {
        return (
            <div className="b-panel b-panel__inbox">
                <div className="b-inbox__head">{/*HEAD BLOCK*/}
                    <div className="b-inbox__title">
                        <p>Inbox</p>
                    </div>
                    <div className="b-inbox__icon">
                        <img src={require('./addContact_icon.png')}  alt={"Add Contacts"}  />
                    </div>
                </div>
                <div className="b-inbox__messages">{/*MESSAGES BLOCK*/}
                    <div className="b-messages__all">
                        <p>All Messages</p>
                        <p className="messageCounter">22</p>
                    </div>
                    <div className="b-messages__unread">
                        <p>Unread</p>
                        <p className="messageCounter">12</p>
                    </div>
                    <div className="b-messages__important">
                        <p>Important</p>
                        <p className="messageCounter">5</p>
                    </div>
                    <div className="b-messages__drafts">
                        <p>Drafts</p>
                        <p className="messageCounter">4</p>
                    </div>
                </div>
                <Help />
                <Settings />
            </div>
        )
    }
}

export default Inbox;