import {legacy_createStore, combineReducers} from "redux";

// // init state
let initState = {count:0};

// reducer
const counterReducer = (state=initState, action) =>{
    switch(action.type){
        case "ADD" :  {
            return{
                count: state.count+1
            };
        }
        case "SUBSTRACT" : {
            return{
                count: state.count-1
            }
        }
        default: return state;
    }
}

// root reducer
let rooReducer = combineReducers({
    counter: counterReducer,
});

// export store
export const store = legacy_createStore(rooReducer);