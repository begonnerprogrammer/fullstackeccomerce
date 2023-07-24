// Setup data layer
//We need this to track the basket
import { createContext,useContext,useReducer } from "react";
//Provider
export const StateContext = createContext();


//Code to set the data Layer
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>{children}</StateContext.Provider>
)
//How to Use it in a Component
export const useStateValue=()=>useContext(StateContext);