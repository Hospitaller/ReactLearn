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
            isToggleOn: true,
            
        };
    }
    visBlock = (value) => {
        this.props.updateData(value);
        this.props.updateChat(value);
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
                    <Whatsapp updateChild={this.visBlock}/>
                    <Facebooking updateChild={this.visBlock}/>
                    <Viber updateChild={this.visBlock}/>
                    <Skype updateChild={this.visBlock}/>
                    <Nautilus updateChild={this.visBlock}/>
                </div>    
            </div>
        )
    }
}

export default MainMenu;