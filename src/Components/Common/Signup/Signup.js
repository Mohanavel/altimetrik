import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { signupActions } from "./Signup.actions";
import { Common, STORE_CONSTANT } from "./../../../Utility";

class Signup extends Component {

    validateLogin(event) {
        const { dispatch } = this.props;
        event.preventDefault();
        const newUser = {
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            gender: this.gender.value,
            country: this.country.value,
            username: this.username.value,
            password: this.password.value
        }
        dispatch(dispatch => {
            signupActions.registerUser(newUser)
                .then(data => {
                    if (data.id) {
                        Common.setUserDetails(newUser);
                        dispatch({
                            type: STORE_CONSTANT.SIGNUP_SUCCESS
                        })
                    }
                })
        });
    }
    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <h3>Signup</h3>
                    <form onSubmit={this.validateLogin.bind(this)}>
                        <div className="form-group">
                            <input type="text" name="firstname" placeholder="FirstName" ref={(elem) => this.firstname = elem} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="lastname" placeholder="Last Name" ref={(elem) => this.lastname = elem} />
                        </div>
                        <div className="form-group">
                            <div class="form-check">
                                <input type="radio" name="gender" placeholder="UserName" className="form-check-input" id="male" value="male" ref={(elem) => this.gender = elem} />
                                <label class="form-check-label" for="male">
                                    Male
                  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="female" value="female" ref={(elem) => this.gender = elem} />
                                <label class="form-check-label" for="female" >
                                    Female
                  </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <select class="custom-select" ref={(elem) => this.country = elem}>
                                <option selected>Country</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="russia">Russia</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" name="username" placeholder="UserName" ref={(elem) => this.username = elem} />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" ref={(elem) => this.password = elem} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // loginDetails:  state.LoginReducer ? state.LoginReducer.userLogin : "test"
    }
}
const connectSignupComponent = connect(mapStateToProps, null)(Signup);
export { connectSignupComponent as Signup };

