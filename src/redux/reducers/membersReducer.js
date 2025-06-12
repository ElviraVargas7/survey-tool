export const GET_MEMBERS_SUCCESS = 'GET MEMBERS SUCCESS';
export const GET_MEMBERS_FAILURE = 'GET MEMBERS FAILURE';

export const defaultState = {
  currentMembers: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        getMembersSuccessful: true,
        currentMembers: action.payload,
      };
    case GET_MEMBERS_FAILURE:
      return {
        ...state,
        getMembersSuccessful: false,
        currentMembers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

export const selectCurrentMembers = (state) =>
  state.membersReducer.currentMembers;
