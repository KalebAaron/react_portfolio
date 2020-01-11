import React, {Component} from 'react';
import '../App.css';
import {
    Link
  } from "react-router-dom";
class Menu extends Component {

  render(){
    return (
        <div className="menu" style={{opacity: this.props.hideMenu ? 0 : 1}}>
        <ul className="menuList">
            <li className="listTitle">Menu</li>
            <br/><p> - </p>
            <li><Link className="menuLink" to="/page1">Page 1</Link></li>
            <br/><p> - </p>
            <li><Link className="menuLink" to="/page2">Page 2</Link></li>
            <br/><p> - </p>
            <li><Link className="menuLink" to="/page3">Page 3</Link></li>
        </ul>
        </div>
    )
  }
  ;
}

export default Menu;