export const UPDATE_FORM_ERRORS = "UPDATE_FORM_ERRORS";

export default function updateFormErrors(updateFormErrors){
    return {
        type: UPDATE_FORM_ERRORS,
        payload:updateFormErrors
    }
}