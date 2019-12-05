import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./HeaderMenu.css";

export class HeaderMenu extends Component {
    constructor(){
        super();
        this.state = {
            showMenu: false
        }
    }
    showMenu() {
        this.setState({
            showMenu : !this.state.showMenu
        })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" onClick={this.showMenu.bind(this)} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className={`collapse navbar-collapse ${this.state.showMenu ? 'show': ''}` } id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}