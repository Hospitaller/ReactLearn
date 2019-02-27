import React from 'react';
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
            <LoginPage login={1} pageHandler={this.changePage} /> 
        )
    } else {
      return (
        <div className="mainPageWraper">
          <MainPage />
          <button onClick={this.test}>НАЗАД</button>
        </div>
      )
    }
    
  }
  
}

export default App;


