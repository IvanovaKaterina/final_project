// -------------- ACTION TYPE --------------
const TYPES_FETCH_DATA_SUCCESS = 'TYPES_FETCH_DATA_SUCCESS';

// -------------- ACTION CREATOR --------------
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
    .then(types => dispatch({ type: TYPES_FETCH_DATA_SUCCESS, types }))
  }
}

// -------------- REDUCER --------------
function types(state = [], action) {
  switch (action.type) {
    case TYPES_FETCH_DATA_SUCCESS:
      return action.types;
    default:
      return state;
  }
}

export default types;