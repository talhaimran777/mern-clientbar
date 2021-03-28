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

    default:
      return state;
  }
};

export default dashboardReducer;
