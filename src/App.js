import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './scss/App.scss';
import LoginPage from './components/LoginPage/LoginPage';





class App extends React.Component {
 
    render(){
      return (
        <BrowserRouter>
          <div className="mainPageWraper">
            <Route path="/loginPage/login" render={() => <LoginPage />} />
            <Link to="/loginPage">НАЗАД </Link>
          </div>
        </BrowserRouter>
      )
    }
  }
  


export default App;


