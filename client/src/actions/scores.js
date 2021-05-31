import { ACT, SAT } from '../constants/actionTypes';
import * as api from "../utils/login.js";

export const actScores = (testData, router) => async (dispatch) => {
    try {
        //log in the user...
        var getUser = JSON.parse(localStorage.getItem("profile"));
     var id = getUser.result["_id"];
        console.log("give me the deets", testData)
        const { data } = await api.act(testData, id);
        localStorage.setItem('profile', JSON.stringify(data))
        dispatch({ type: ACT, data })

        router.push('/search');
    } catch (err) {
        console.log(err);
    }
};

export const satScores = (testData, router) => async (dispatch) => {
    try {
        
        //sign up the user...
        var getUser = JSON.parse(localStorage.getItem("profile"));
     var id = getUser.result["_id"];
        const { data } = await api.sat(testData, id);
        console.log("This is the auth.js Data",  { data })

        dispatch({ type: SAT, data })

        router.push('/search');
    } catch (err) {
        console.log(err);
    }
};