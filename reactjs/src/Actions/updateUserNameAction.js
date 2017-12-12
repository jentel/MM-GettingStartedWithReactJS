export default function updateUserName(updatedUserName){
    return{
        type: "UPDATE_NAME_INPUT",
        payload:updatedUserName
    }
}