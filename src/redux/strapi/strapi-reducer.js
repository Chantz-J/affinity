import { strapiTypes } from "./strapi-types";

const INTIAL_STATE = {
    user: {},
    // REGISTRATION STATE SLICES
    registrationSuccess: '',
    registrationError: '',
    registrationSubmitting: false,
    // LOGIN STATE SLICES
    loginSuccess: false,
    loginError: '',
    loginSubmitting: false,
};

export const strapiReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case strapiTypes.START_ADD_NEW_USER:
            return {
                ...state,
                submitting: true,
            }
        case strapiTypes.NEW_USER_ADDED_SUCCESS:
            return {
                ...state,
                user: action.payload,
            }
        case strapiTypes.LOGIN_USER_START:
            return {
                ...state,
                loginSubmitting: true,
            }
        case strapiTypes.LOGIN_USER_SUCESS:
            return {
                ...state,
                loginSuccess: true,
                loginSubmitting: false,
            }
        case strapiTypes.LOGIN_USER_ERROR:
            return {
                ...state,
                loginError: action.payload,
                loginSubmitting: false,
            }
        default:
            return state
    }
}