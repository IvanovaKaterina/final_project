// -------------- ACTION TYPE --------------
// -------------- ACTION CREATOR --------------
// -------------- REDUCER --------------


export function changePersonalDataSuccess(user){
    return {
      type: "USER_FETCH_DATA_SUCCESS",
      user
    }
  }

export function userChangedData(state = null, action) {
    switch (action.type) {
        case "USER_PERSONAL_DATA_CHANGED_SUCCESS":
            return action.user;
        default:
            return state;
    }
}

export default userChangedData;