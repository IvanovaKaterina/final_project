function usersToServices(state = [], action) {
    switch (action.type) {
        case "USERS_TO_SERVICES_FETCH_DATA_SUCCESS":
            return action.data;
        default:
            return state;
    }
}

export default usersToServices;