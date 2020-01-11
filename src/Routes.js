import React, {Component} from 'react';
import Hero from './components/Hero'

import {
  Switch,
  Route,
} from "react-router-dom";

class Routes extends Component {
    
    render(){
      return (
            <Switch>
              <Route path="/">
                <Hero />
              </Route>
              <Route path="/page1">
              </Route>
              <Route path="/page2">
              </Route>
              <Route path="/page3">
              </Route>
            </Switch>            
      )
    }
    ;
}

export default Routes;
