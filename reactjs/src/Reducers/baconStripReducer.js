import { UPDATE_BACON_STRIPS_COUNT } from "../Actions/updateBaconStripsCountAction";

export default function baconStripReducer(state="", action){
    switch(action.type){
        case UPDATE_BACON_STRIPS_COUNT:
            return action.payload;
        default:
            return state;
    }
}