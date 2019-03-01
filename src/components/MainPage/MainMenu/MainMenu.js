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
                    <div className="b-socialButton__buttonUnit" >
                        <img src={require('./w_icon.png' )}  alt={"Whatsapp"}  />
                    </div>
                    <div className="b-socialButton__buttonUnit">
                        <img src={require('./fb_icon.png' )}  alt={"Facebooking"}  />
                    </div>
                    <div className="b-socialButton__buttonUnit">
                        <img src={require('./v_icon.png' )}  alt={"Viber"}  />
                    </div>
                    <div className="b-socialButton__buttonUnit">
                        <img src={require('./s_icon.png' )}  alt={"Skype"}  />
                    </div>
                    <div className="b-socialButton__buttonUnit">
                        <img src={require('./n_icon.png' )}  alt={"Nautilus"}  />
                    </div>
                </div>    
            </div>
        )
    }
}

export default MainMenu;