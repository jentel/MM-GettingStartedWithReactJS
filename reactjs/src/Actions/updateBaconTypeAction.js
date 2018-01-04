export const UPDATE_BACON_INPUT = "UPDATE_BACON_INPUT";

export default function updateBaconType(updatedBaconType){
    return{
        type: UPDATE_BACON_INPUT,
        payload:updatedBaconType
    }
}