import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "SIGN_IN":
            toast("Welcome back...");
            return state;
        case "SIGN_IN_ERR":
            toast.error("sign in error....")
            return state;
        case "SIGN_OUT":
            toast("Signed out....")
            return state;
        case "SIGN_IP":
            toast("Welcome to Todo list...");
            return state;
        case "SIGN_UP_ERR":
            toast.error("sign up error....")
            return state;
        default: return state;
    }
}

export default authReducer;