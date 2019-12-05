import {Services} from "./../../../Utility";

export const signupActions = {
    registerUser : (body) => {
        const dataset = {
            method : 'POST',
            body:JSON.stringify(body)
        };
        return Services.getData(dataset);
    }
}