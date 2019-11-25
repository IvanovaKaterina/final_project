function areas(state = [], action) {
    switch (action.type) {
        case "AREAS_FETCH_DATA_SUCCESS":
            return action.areas;
        default:
            return state;
    }
}

export default areas;