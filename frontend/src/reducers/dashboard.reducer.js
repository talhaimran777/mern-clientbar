const dashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_USER':
      return { ...state, loadingUser: true };
    case 'REQUEST_USER_SUCCESS':
      return {
        ...state,
        loadingUser: false,
        showUser: true,
        requestedUser: action.payload,
      };
    case 'REQUEST_USER_FAILED':
      return {
        ...state,
        loadingUser: false,
        showUser: false,
        requestedUser: {},
      };

    default:
      return state;
  }
};

export default dashboardReducer;
