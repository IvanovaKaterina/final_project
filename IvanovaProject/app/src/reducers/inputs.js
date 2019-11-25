export function inputType(state = 'type', action) {
    switch (action.type) {
        case "CLICK_LINK_REGISTRY_SERVICETYPE":
            return action.typeservice;
        default:
            return state;
    }
}

export function inputName(state = 'name', action) {
    switch (action.type) {
        case "CLICK_LINK_REGISTRY_SERVICENAME":
            return action.nameservice;
        default:
            return state;
    }
}

export function inputId(state = 'id', action) {
    switch (action.type) {
        case "CLICK_LINK_REGISTRY_SERVICEID":
            return action.idservice;
        default:
            return state;
    }
}