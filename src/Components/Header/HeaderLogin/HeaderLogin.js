import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

export class HeaderLogin extends Component {
    render() {
        return (
           <Fragment><Link to="/">Login</Link> | <Link to="/signup">Signup</Link></Fragment>
        )
    }
}