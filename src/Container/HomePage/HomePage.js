import React, {Component, Fragment} from "react";
import {Login} from "./../../Components";

export class HomePage extends Component {

    getLoginValue(value) {
        console.log(value);
    }
    render() {
        return (
            <div className="container-fluid">
                <Login/>
            </div>
        )
    }
}