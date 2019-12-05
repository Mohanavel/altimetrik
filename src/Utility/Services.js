import {SERVICE_CONSTANT} from "./../Utility";

export const Services = {
    getData: (dataSet) => {
        return fetch(SERVICE_CONSTANT.LOGIN, dataSet)
        .then(response => {
            return response.json();
        })
        .then(data => {
           return data;
        })
        .catch(error => {
            console.log(error);
        })  
    }
}