import { createSlice, isAction } from "@reduxjs/toolkit";

// the initial state has to be made first
// we can provide any data on our respect, currently we are proceeding with no data and hence null and flase values
const initialState = {
    status: false, // user is currently not authenticated
    userData: null // considering that we have no current user data with us
}

// this is to track authentication

const authSlice = createSlice({
    name: "auth",  // it is mandatory to give it some name
    initialState,  // to track the current state we need to know about its initial state
    reducers:{
        // all those who are present in login have access to state and action
        //the action provides the payload that has to be updated in the state after the initial state
        login: (state, action) =>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        //this is one more method that can be dispatched
        // no need of payload at logout
        logout : (state) =>{
            state.status = false;
            state.userData= null;
        }
    } // we have to export the individual functions of the reducer so that different components can use its functions to know state and  to dispatch
}) 
// actions exported are the functions of the reducer
export const {login, logout } = authSlice.actions;
export default authSlice.reducer; 