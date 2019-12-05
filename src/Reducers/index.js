import { combineReducers } from 'redux';
import {LoginReducer} from "./../Components/Common/Login/Login.reducer";
import {SignupReducer} from "./../Components/Common/Signup/Signup.reducer";

export const RootReducer = combineReducers({
    LoginReducer: LoginReducer,
    SignupReducer: SignupReducer
});