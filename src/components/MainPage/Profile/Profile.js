import React from 'react';
import Avatar from "./Avatar/Avatar";

class Profile extends React.Component{
    render() {
        return (
            <div className="b-panel b-panel__profile">
                <div className="b-profile__head">
                    <div className="b-head__notify">
                        <img src={require('./notifications_icon.png')}  alt={"Notification"}  />
                    </div>
                    <div className="b-head__profileName">
                        <p>Kirsten Mckellar</p>
                    </div>
                </div>
                <Avatar />
            </div>
        )
    }
}

export default Profile;