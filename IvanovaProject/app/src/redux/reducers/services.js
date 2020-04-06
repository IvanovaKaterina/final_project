// -------------- ACTION TYPE --------------
const SERVICES_FETCH_DATA_SUCCESS = 'SERVICES_FETCH_DATA_SUCCESS';

// -------------- ACTION CREATOR --------------
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
    .then(services => dispatch({ type: SERVICES_FETCH_DATA_SUCCESS, services }))
  }
}

// -------------- REDUCER --------------
function services(state = [], action) {
  switch (action.type) {
    case SERVICES_FETCH_DATA_SUCCESS:
      return action.services;
    default:
      return state;
  }
}

export default services;