// -------------- ACTION TYPE --------------
const AREAS_FETCH_DATA_SUCCESS = 'AREAS_FETCH_DATA_SUCCESS';

// -------------- ACTION CREATOR --------------
export const areasFetchData = (url) => (dispatch) => {
    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error (response.statusText)
      }
      return response;
    })
    .then(response => response.json())
    .then(areas => dispatch({ type: AREAS_FETCH_DATA_SUCCESS, areas }))
}

// -------------- REDUCER --------------
function areas(state = [], action) {
  switch (action.type) {
    case AREAS_FETCH_DATA_SUCCESS:
      return action.areas;
    default:
      return state;
  }
}

export default areas;