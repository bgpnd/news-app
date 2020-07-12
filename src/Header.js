import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
 
 
class Header extends Component {
  render() {
    return (
      // Header
        <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    );
  }
}
 
export default Header;