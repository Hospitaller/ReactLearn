import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './scss/App.scss';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';




class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: "main"
    }
    
  }
  changePage = () => { //Сюда валидацию, если true = открываем
    this.setState({page: "main"});
  }
  test = () => {
    this.setState({page: "login"});
  }
  render() {
    
    
    if(this.state.page === "login") {
      return (
        <BrowserRouter>
          <Route path="/loginPage" render={() =>  <LoginPage login={1} pageHandler={this.changePage} /> }  /> 
        </BrowserRouter>
        )
    } else {
      return (
        <BrowserRouter>
          <div className="mainPageWraper">
            <Route path="/main" render={() => <MainPage />} />
            <Link to="/loginPage/login">НАЗАД </Link>
           
            </div>
        </BrowserRouter>
      )
    }
    
  }
  
}

export default App;


