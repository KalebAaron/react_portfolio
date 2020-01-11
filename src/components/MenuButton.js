import React, {Component} from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

class MenuButton extends Component {

  render(){
    return (
        <div class="menuButton" onClick={this.props.toggleMenu}>
            <FontAwesomeIcon icon={this.props.hideMenu ? faAngleDoubleRight : faAngleDoubleLeft} size="3x"/>
        </div>
    )
  }
}

export default MenuButton;