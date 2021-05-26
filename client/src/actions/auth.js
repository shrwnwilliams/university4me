// import { AUTH } from '';
import { AUTH } from '../constants/actionTypes';
import * as api from "../utils/API.js";
// these used to be history instead of router
export const signin = (formData, router) => async (dispatch) => {
    try {
        //log in the user...
        const { data } = await api.signIn(formData);

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

        dispatch({ type: AUTH, data })

        router.push('/');
    } catch (err) {
        console.log(err);
    }
};