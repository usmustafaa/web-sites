import initialState from './initialState';
import * as actionType from '../actions/actionType'

export default function changeCategoryReducer(state=initialState, action){
    switch (action.type) {
        case actionType.CHANGE_CATEGORY:
            
            return action.payload 
    
        default:
            return state;
    }
}