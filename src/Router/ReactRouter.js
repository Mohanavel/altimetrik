import React, {Component, Fragment} from "react";
import { Route, Switch} from "react-router-dom";
import {HomePage, AboutPage, Dashboard} from "./../Container";
import {Signup} from "./../Components";

export class ReactRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" render={(props) => this.isAuthenticated(props,<AboutPage/>)} />
                <Route path="/dashboard" render={(props) => this.isAuthenticated(props,<Dashboard/>)} />
                <Route path="/signup" component={Signup} />
                <Route path="*" render={()=> (<div>No Page Found</div>)} />
            </Switch>
        )
    }

    isAuthenticated(props,componentName) {
        let isuserLogin = JSON.parse(localStorage.getItem("userDetails"));
        return isuserLogin && isuserLogin.name ? componentName : props.history.push("/");
    }
}