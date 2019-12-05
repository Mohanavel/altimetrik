import { STORE_CONSTANT } from "../../../Utility/index";

export {STORE_CONSTANT} from "./../../../Utility";
const initialState = {
    signupSuccess: "failure"
}

export const SignupReducer = (state = initialState, action) => {
    switch(action.type) {
        case STORE_CONSTANT.SIGNUP_SUCCESS:
            return {
                ...state,
                signupSuccess: "success"
            }
        case STORE_CONSTANT.SIGNUP_FAILURE:
            return {
                ...state,
                signupSuccess: "failure"
            }
        default:
        return state;    
    }
}