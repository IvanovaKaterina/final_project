function types(state = [], action) {
    switch (action.type) {
        case "TYPES_FETCH_DATA_SUCCESS":
            return action.types;
        default:
            return state;
    }
}

export default types;