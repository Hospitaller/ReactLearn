import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './scss/App.scss';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';


//"/main"
//"/loginPage/login"
//<MainPage />

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      renderPath: "/loginPage/login",
      renderPage: <LoginPage dataEvent={this.renderMain} />
    }
  }
  renderMain = (value) => {
    console.log('hi from render' + value);
    this.setState({renderPage: value})
 }
    render(){
      return (
        <BrowserRouter>
          <div className="mainPageWraper">
            <Route path={this.state.renderPath} render={() => this.state.renderPage} />
            <Link to="/loginPage/login">НАЗАД </Link>
          </div>
        </BrowserRouter>
      )
    }
  }
  


export default App;


