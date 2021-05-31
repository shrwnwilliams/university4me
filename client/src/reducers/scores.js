import * as actionType from "../constants/actionTypes.js";

const scoresReducer = (state = {testData: null}, action) => {
    switch (action.type) {
        case actionType.ACT:
          localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
    
          return { ...state, testData: action.data, loading: false, errors: null };
        case actionType.SAT:
          localStorage.clear();
    
          return { ...state, testData: null, loading: false, errors: null };
        default:
          return state;
      }
}

export default scoresReducer;