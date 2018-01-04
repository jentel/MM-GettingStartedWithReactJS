import { UPDATE_BACON_INPUT } from "../Actions/updateBaconTypeAction";

export default function baconReducer(state="", action){
    switch(action.type){
        case UPDATE_BACON_INPUT:
            return action.payload;
        default:
            return state;
    }
}