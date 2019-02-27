import React from "react";


class MainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="headPanel">
                    <h1>Hello from Main Page!!!</h1>
                </div>
                <div className="panelWraper">
                    <div className="panelLeft">
                        <div className="navMain">
                            MAIN
                        </div>
                        <div className="navPosts">
                            POSTS
                        </div>
                    </div>
                    <div className="panelRight">
                        <p>right</p>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default MainPage;