export const BACON_IPSUM_UPDATE_BACON_TEXT = "BACON_IPSUM_UPDATE_BACON_TEXT";

export default function baconIpsumUpdateBaconText(updateValue) {
    return {
        type : BACON_IPSUM_UPDATE_BACON_TEXT,
        payload: updateValue
    }
}