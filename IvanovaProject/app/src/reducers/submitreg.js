function isSubmit(state = false, action) {
    switch (action.type) {
        case "CLICK_TO_SUBMIT_REGISTRY":
            return action.submitregistry;
        default:
            return state;
    }
}

export default isSubmit;