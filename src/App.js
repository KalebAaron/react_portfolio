import React, {Component} from 'react';
import './App.css';
import Hero from './components/Hero'
import Menu from './components/Menu'
import Routes from './Routes'
import MenuButton from './components/MenuButton'
import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
    state = {
     hideMenu: true
    }

    toggleMenu = () => {
      this.setState({hideMenu: !this.state.hideMenu})
    }

    render(){
      return (
        <Router>
          <div className="App">
            <Routes/>
            <Menu hideMenu={this.state.hideMenu}/>
            <MenuButton hideMenu={this.state.hideMenu} toggleMenu={this.toggleMenu}/>
          </div>
        </Router>
      )
    }
    ;
}

export default App;
