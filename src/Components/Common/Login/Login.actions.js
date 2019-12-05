import {Services} from "./../../../Utility";

export const loginActions = {
    validateLogin : (body) => {
        const dataset = {
            method : 'POST',
            body:JSON.stringify(body)
        };
        return Services.getData(dataset);
    }
}