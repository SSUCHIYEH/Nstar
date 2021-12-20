import {combineReducers} from "redux"

const intialstate ={
    user: [],
    cartitem: [],
};

const reducer = ( state = intialstate, action) => {
    switch(action.type) {
        case "AddToCart":
            return{
                ...state,
            }
        default:
            return {...state}
    }
}


const reducerApp = combineReducers({
    reducer,
})

export default reducerApp; 