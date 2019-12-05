import {history} from "./../history";

export const Common = {
    setUserDetails: (data) => {
        let details = {
            name: data.username
        }
        localStorage.setItem("userDetails",JSON.stringify(details));
        history.push("/dashboard");
    }
}