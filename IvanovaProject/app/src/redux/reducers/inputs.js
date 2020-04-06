// -------------- ACTION TYPE --------------
const CLICK_LINK_REGISTRY_SERVICE = 'CLICK_LINK_REGISTRY_SERVICE';

// -------------- ACTION CREATOR --------------
export const clickToRegistryService = (typeservice, nameservice, idservice) => ({
  type: CLICK_LINK_REGISTRY_SERVICE,
  typeservice,
  nameservice,
  idservice
})

// -------------- REDUCER --------------
export function inputService(state = 'type', action) {
  switch (action.type) {
    case CLICK_LINK_REGISTRY_SERVICE:
      return {
        typeservice: action.typeservice,
        nameservice: action.nameservice,
        idservice: action.idservice
      };
    default:
      return state;
  }
}

export default inputService;