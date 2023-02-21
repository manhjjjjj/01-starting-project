import { legacy_createStore as createStore } from "redux";

// reducer dunction 
// là 1 fuction chứa các thông tin về state và các phương thức để thay đổi state đó
let initialState = {
    visible: true,
    counterValue:0,
    coler: "red",
};
let counterReducer = (state = initialState, action) => {
    if(action.type ==="toggle"){
        return {
            ...state,
            visible: !state.visible,
        };
    }
    if(action.type ==="chuyenMau"){
        return {
            ...state,
            coler: "blue",
        }
    }
    if( action.type === "tangValue"){
        // state là 1 immutable obj (obj không thể thay đổi được)
        // state.counterValue++ === state.counterValue = state.counterValue + 1
        return{
            ...state,
            counterValue: state.counterValue + action.payload,
        }
    } if (action.type === "giamValue"){
        if(state.counterValue > 0){
            return{
                ...state,
                counterValue: state.counterValue - action.payload,
            }
        }
       
    } else if(action.type ==="setLai"){
        return{
            ...state,
            counterValue: action.payload
        }
    }
    return state;
}


let store = createStore(counterReducer);

export default store;