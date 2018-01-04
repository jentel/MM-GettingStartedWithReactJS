import { UPDATE_FORM_ERRORS } from "../Actions/updateFormErrorsAction";

export default function formErrorsReducer(state="", action){
    switch(action.type){
        case UPDATE_FORM_ERRORS:
            return action.payload;
        default:
            return state;
    }
}