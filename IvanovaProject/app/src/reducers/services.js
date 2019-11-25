function services(state = [], action) {
    switch (action.type) {
        case "SERVICES_FETCH_DATA_SUCCESS":
            return action.services;
        default:
            return state;
    }
}

export default services;