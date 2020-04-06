// -------------- ACTION TYPE --------------
const USERS_TO_SERVICES_FETCH_DATA_SUCCESS = 'USERS_TO_SERVICES_FETCH_DATA_SUCCESS';

// -------------- ACTION CREATOR --------------
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
    .then(data => dispatch({ type: USERS_TO_SERVICES_FETCH_DATA_SUCCESS, data }))
  }
}

// -------------- REDUCER --------------
function usersToServices(state = [], action) {
  switch (action.type) {
    case USERS_TO_SERVICES_FETCH_DATA_SUCCESS:
      return action.data;
    default:
      return state;
  }
}

export default usersToServices;