import React, {Component} from 'react';
import '../App.css';
import computer from '../assets/images/computer.jpg'
class Hero extends Component {

  render(){
    return (
        <header className="App-header">
         <img className="hero-image" src={computer}/>
          <p className="title">
           Kaleb Hundersmarck
          </p>
        </header>
    )
  }
  ;
}

export default Hero;
