// import { AUTH } from '';
import { AUTH } from '../constants/actionTypes';
import * as api from "../utils/login.js";

export const signin = (formData, router) => async (dispatch) => {
    try {
        //log in the user...
        const { data } = await api.signIn(formData);
        console.log("data", data)
        localStorage.setItem('profile', JSON.stringify(data))
        dispatch({ type: AUTH, data })

        router.push('/');
    } catch (err) {
        console.log(err);
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try {
        
        //sign up the user...
        const { data } = await api.signUp(formData);
        console.log("This is the auth.js Data",  { data })

        dispatch({ type: AUTH, data })

        router.push('/');
    } catch (err) {
        console.log(err);
    }
};