export default function flourReducer(state="", action){
    switch(action.type){
        case "UPDATE_FLOUR_INPUT":
            return action.payload;
        default:
            return state;
    }
}