import React, { Component } from "react";
import { HeaderLogo, HeaderMenu, HeaderLogin } from "./../../Components";
import {Services} from "./../../Utility";
import "./Header.css";

export class Header extends Component {

    render() {
        return (
            <header>                
                    <div className="row header-search-section">
                        <div className="col-3"><HeaderLogin /></div>
                    </div>
                    <div className="row header-section">                        
                        <div className="col-12"><HeaderMenu /></div>
                    </div>                
            </header>
        )
    }
}