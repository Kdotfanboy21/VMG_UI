const actionTypes = Object.freeze({
    //app
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',

    FETCH_ACCOUNT_START: 'FETCH_ACCOUNT_START',
    FETCH_ACCOUNT_SUCCESS: 'FETCH_ACCOUNT_SUCCESS',
    FETCH_ACCOUNT_FAILED: 'FETCH_ACCOUNT_FAILED',

    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    ADD_FAVOURITE: 'ADD_FAVOURITE',


    //admin
    FETCH_ALL_USER_START: 'FETCH_ALL_USER_START',
    FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAILED: 'FETCH_ALL_USER_FAILED'
})

export default actionTypes;