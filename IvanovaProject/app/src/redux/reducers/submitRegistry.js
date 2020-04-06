// -------------- ACTION TYPE --------------
const CLICK_TO_SUBMIT_REGISTRY = 'CLICK_TO_SUBMIT_REGISTRY';

// -------------- ACTION CREATOR --------------
export const clickToSubmitRegistry = (submitregistry) => ({
  type: CLICK_TO_SUBMIT_REGISTRY,
  submitregistry,
})

// -------------- REDUCER --------------
function submitRegistry(state = false, action) {
  switch (action.type) {
    case CLICK_TO_SUBMIT_REGISTRY:
      return action.submitregistry;
    default:
      return state;
  }
}

export default submitRegistry;