// -------------- ACTION TYPE --------------
const USER_LOG_IN = 'USER_LOG_IN';
const USER_FETCH_DATA_SUCCESS = 'USER_FETCH_DATA_SUCCESS';
const USER_LOG_OUT = 'USER_LOG_OUT';

// -------------- ACTION CREATORS --------------
export function userFetchData(url) {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
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
    .then(user => dispatch({ type: USER_FETCH_DATA_SUCCESS, user }))
  }
}

export const userLogedIn = () => ({
  type: USER_LOG_IN
});

export const userLogedOut = () => ({
  type: USER_LOG_OUT
});

// -------------- REDUCER --------------
function userAuth(state = false, action) {
  let isAuth;
  switch (action.type) {
    case USER_LOG_IN:
      isAuth = true;
      return isAuth;
    case USER_FETCH_DATA_SUCCESS:
      return action.user;
    case USER_LOG_OUT:
      isAuth = false;
      return isAuth;
    default:
      return state;
  }
}

export default userAuth;