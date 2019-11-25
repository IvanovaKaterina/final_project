export function userAuth(state = false, action) {
    let isAuth;
    switch (action.type) {
        case "USER_LOG_IN":
            isAuth = true;
            return isAuth;
        case "USER_FETCH_DATA_SUCCESS":
            return action.user;
        case "USER_LOG_OUT":
            isAuth = false;
            return isAuth;
        default:
            return state;
    }
}

export default userAuth;