import Whatsapp from "./Whatsapp/Whatsapp"
import Facebooking from "./Facebooking/Facebooking"
import Viber from "./Viber/Viber"
import Skype from "./Skype/Skype"
import Nautilus from "./Nautilus/Nautilus"


import React from 'react';

class MainMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    }
    
    render() {
        const setActive = (e) => {
            const path = e.target.parentElement.classList;
            if (path.contains("active")) {
                path.remove("active")
               
            } else {
                path.add("active")
            }

        }
        return (
            <div className="b-panel b-panel__mainMenu">
                <div className="b-mainMenu__menuButton">
                    <div className="b-menuImgWraper">
                        <img src={require('./menu_icon.png' )}  alt={"Menu button"}  />
                    </div>
                </div>
                <div className="b-mainMenu__socialButton" onClick={setActive} >
                    <Whatsapp />
                    <Facebooking />
                    <Viber />
                    <Skype />
                    <Nautilus />
                </div>    
            </div>
        )
    }
}

export default MainMenu;