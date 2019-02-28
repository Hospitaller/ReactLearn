import React from "react";
import MainMenu from "./MainMenu/MainMenu";
import Inbox from "./Inbox/Inbox";
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";
import Profile from "./Profile/Profile";


class MainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="b-panelWraper b-panelWraper_marginCenter">
                    <MainMenu />
                    <Inbox />
                    <Contacts />
                    <Chat />
                    <Profile />
                </div>
            </React.Fragment>
        )
    }
}

export default MainPage;