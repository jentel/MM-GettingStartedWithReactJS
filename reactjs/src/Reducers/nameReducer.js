import { UPDATE_NAME_INPUT } from "../Actions/updateUserNameAction";

export default function nameReducer(state="", action){
    switch(action.type){
        case UPDATE_NAME_INPUT:
            return action.payload;
        default:
            return state;
    }
}