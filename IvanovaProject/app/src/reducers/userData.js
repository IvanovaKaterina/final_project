export function userChangeData(state = null, action) {
    switch (action.type) {
        case "USER_PERSONAL_DATA_CHANGED_SUCCESS":
            return action.user;
        default:
            return state;
    }
}

export default userChangeData;