export function clickToSubmitRegistry(submitregistry){
    return {
        type: "CLICK_TO_SUBMIT_REGISTRY",
        submitregistry,
    }
}

export function clickToRegistryType(typeservice){
    return {
        type: "CLICK_LINK_REGISTRY_SERVICETYPE",
        typeservice,
    }
}

export function clickToRegistryName(nameservice){
    return {
        type: "CLICK_LINK_REGISTRY_SERVICENAME",
        nameservice
    }
}

export function clickToRegistryId(idservice){
    return {
        type: "CLICK_LINK_REGISTRY_SERVICEID",
        idservice
    }
}

export function servicesFetchDataSuccess(services){
    return {
        type: "SERVICES_FETCH_DATA_SUCCESS",
        services
    }
}

export function usersToServicesFetchDataSuccess(data){
    return {
        type: "USERS_TO_SERVICES_FETCH_DATA_SUCCESS",
        data
    }
}

export function typesFetchDataSuccess(types){
    return {
        type: "TYPES_FETCH_DATA_SUCCESS",
        types
    }
}

export function areasFetchDataSuccess(areas){
    return {
        type: "AREAS_FETCH_DATA_SUCCESS",
        areas
    }
}

export function userFetchDataSuccess(user){
    return {
        type: "USER_FETCH_DATA_SUCCESS",
        user
    }
}

export function changePersonalDataSuccess(user){
    return {
        type: "USER_FETCH_DATA_SUCCESS",
        user
    }
}

export function userFetchData(url) {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            credntials: 'include',
            headers: {
                'Content-Type': 'application/json'
              },
            mode: 'cors',
            body: JSON.stringify({userId: localStorage.getItem('authUser')})
        })
        .then(response => {
            if(!response.ok) {
                throw new Error (response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .then(user => dispatch(userFetchDataSuccess(user)))
    }
}

export function usersToServicesFetchData(url) {
    return (dispatch) => {
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            mode: 'cors',
            body: JSON.stringify({userId: localStorage.getItem('authUser')})
        })
        .then(response => {
            if(!response.ok) {
                throw new Error (response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .then(services => dispatch(usersToServicesFetchDataSuccess(services)))
    }
}

export function servicesFetchData(url) {
    return (dispatch) => {
        fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error (response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .then(services => dispatch(servicesFetchDataSuccess(services)))
    }
}

export function typesFetchData(url) {
    return (dispatch) => {
        fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error (response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .then(types => dispatch(typesFetchDataSuccess(types)))
    }
}

export function areasFetchData(url) {
    return (dispatch) => {
        fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error (response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .then(areas => dispatch(areasFetchDataSuccess(areas)))
    }
}