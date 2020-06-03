import * as SessionAPIUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) =>{
    return {
        type: RECEIVE_CURRENT_USER,
        user: user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

const receiveErrors = (error) => {
    return {
        type: RECEIVE_ERRORS,
        error: error
    }
}

export const login = (user) => dispatch => {
    return SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
        )
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(user => dispatch(logoutCurrentUser(user)))
}

export const signup = (user) => dispatch => {
    return SessionAPIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
        )
}