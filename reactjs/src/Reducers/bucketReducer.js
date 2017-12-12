export default function bucketReducer(state="", action){
    switch(action.type){
        case "UPDATE_BUCKET_INPUT":
            return action.payload;
        default:
            return state;
    }
}