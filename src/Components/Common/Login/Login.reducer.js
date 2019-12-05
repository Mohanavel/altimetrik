import { STORE_CONSTANT } from "../../../Utility/index";

export {STORE_CONSTANT} from "./../../../Utility";
const initialState = {
    userLogin: "failure",
    username: ""
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case STORE_CONSTANT.LOGIN_SUCCESS:
            return {
                ...state,
                userLogin: "success",
                username: action.userDetails
            }
        case STORE_CONSTANT.LOGIN_FAILURE:
            return {
                ...state,
                userLogin: "failure"
            }
        default:
        return state;    
    }
}