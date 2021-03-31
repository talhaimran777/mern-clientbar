const dashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        loadingData: true,
      };
    case 'REQUEST_DATA_SUCCESS':
      return {
        ...state,
        loadingData: false,
        admin: action.payload.user,
        clients: action.payload.clients,
      };
    case 'REQUEST_DATA_FAILURE':
      return {
        ...state,
        loadingData: false,
        admin: {},
        clients: [],
        error: 'Error in fetching details!',
      };
    // case 'REQUEST_USER':
    //   return { ...state, loadingUser: true };
    // case 'REQUEST_USER_SUCCESS':
    //   return {
    //     ...state,
    //     loadingUser: false,
    //     showUser: true,
    //     requestedUser: action.payload,
    //   };
    // case 'REQUEST_USER_FAILED':
    //   return {
    //     ...state,
    //     loadingUser: false,
    //     showUser: false,
    //     requestedUser: {},
    //   };
    // case 'REQUEST_CLIENTS':
    //   return {
    //     ...state,
    //     loadingClients: true,
    //   };
    // case 'REQUEST_CLIENTS_SUCCESS':
    //   return {
    //     ...state,
    //     loadingClients: false,
    //     requestedClients: action.payload,
    //   };
    // case 'REQUEST_CLIENTS_FAILURE':
    //   return {
    //     ...state,
    //     loadingClients: false,
    //     requestedClients: [],
    //   };

    default:
      return state;
  }
};

export default dashboardReducer;
