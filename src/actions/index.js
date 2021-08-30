import axios from 'axios';
import Smurf from '../components/Smurf';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'SEARCH_SUCCESS'
export const FETCH_FAILED = 'SEARCH_FAILED'
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: FETCH_START})
    axios.get(`http://localhost:3333/smurfs/`)
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_SUCCESS , payload: res.data})
        })
        .catch(err => { 
            console.log({ err })
            dispatch({type: ERROR, payload: err.message })
        })
}

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (smurf) => {
    return({type: FETCH_SUCCESS, payload: smurf})
}

export const fetchFailed = (error) => {
    return({type: FETCH_FAILED, payload: error})
}

export const addSmurf = (smurf) => {
    return({type: ADD_SMURF, payload: smurf})
}

export const setError = (error) => {
    return({type: ERROR, payload: error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.