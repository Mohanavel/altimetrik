import React, {Component} from "react";

import { connect } from 'react-redux'
import {history} from "./../../history";

class Dashboard extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.clear();
        history.push("/");
    }
    render() {
        const getUserName = JSON.parse(localStorage.getItem("userDetails"));
        return(
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">DASHBOARD</div>
                <div className="col-4">
                <h5>Welcome {this.props.loginDetails}</h5>
                <a href="#" onClick={this.logOut.bind(this)}>Logout</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginDetails:  state.LoginReducer ? state.LoginReducer.username : ""
    }
}
const connectDashboardComponent = connect(mapStateToProps, null)(Dashboard);
export {connectDashboardComponent as Dashboard};