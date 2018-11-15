import {createStore} from "redux"

let defaultState = {
        dragging : false,
        elementCount : 0 ,
    }

function elementAdd(state = defaultState,action){
    switch(action.type){
        case "ADD_ELEMENT" :
            return {
                ...state,
                [action.data.divIndex] : action.data.id,
                elementCount : state.elements+1,
            }
        case "REMOVE_ELEMENT":
            return {
                ...state,
                elements : state.elements,
                [action.data] : null,
                elementCount : state.elements-1,
            }
        default :
            return {
                ...state
            }
    }
}

let store = createStore(elementAdd)

export default store;