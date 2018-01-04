export const UPDATE_NAME_INPUT = "UPDATE_NAME_INPUT";

export default function updateUserName(updatedUserName){
    return{
        type: UPDATE_NAME_INPUT,
        payload:updatedUserName
    }
}