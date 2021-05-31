import { ACT, SAT } from '../constants/actionTypes';
import * as api from "../utils/login.js";

export const actScores = (testData, router) => async (dispatch) => {
    try {
        //log in the user...
        const { data } = await api.act(testData);
        console.log("data", data)
        localStorage.setItem('profile', JSON.stringify(data))
        dispatch({ type: ACT, data })

        router.push('/');
    } catch (err) {
        console.log(err);
    }
};

export const satScores = (testData, router) => async (dispatch) => {
    try {
        
        //sign up the user...
        const { data } = await api.sat(testData);
        console.log("This is the auth.js Data",  { data })

        dispatch({ type: SAT, data })

        router.push('/');
    } catch (err) {
        console.log(err);
    }
};