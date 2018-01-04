export const UPDATE_BACON_STRIPS_COUNT = "UPDATE_BACON_STRIPS_COUNT";

export default function updateBaconStripsCount(updatedBaconStripsCount){
    return{
        type: UPDATE_BACON_STRIPS_COUNT,
        payload:updatedBaconStripsCount
    }
}