import React from 'react';



class MainMenu extends React.Component{
    render() {
        return (
            <div className="b-panel b-panel__mainMenu">
                <div className="b-panel__mainMenu__menuButton">
                    <div className="b-imgWraper">
                        <img src={require('./menu_icon.png' )}  alt={"Menu button"}  />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainMenu;