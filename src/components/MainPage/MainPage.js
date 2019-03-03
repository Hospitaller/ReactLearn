import React from "react";
import MainMenu from "./MainMenu/MainMenu";
import Inbox from "./Inbox/Inbox";
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";
import Profile from "./Profile/Profile";


class MainPage extends React.Component {
    state = {
        block: "Чат не выбран",
        chat: "qqq"
    }
    updateData = (value) => {
        this.setState({ block: value })
    }
    updateChat = (value) => {
        this.setState({chat: value})
    }
    render() {
        return (
            <React.Fragment>
                <div className="b-panelWraper b-panelWraper_marginCenter">
                    <MainMenu updateData={this.updateData} updateChat={this.updateChat}/>
                    <Inbox />
                    <Contacts />
                    <Chat updateData={this.updateChat} />
                    <Profile />
                </div>
            </React.Fragment>
        )
    }
}

export default MainPage;