const loginReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        status: 'IN_PROCESS',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        status: 'SUCCESS',
        loggedIn: true,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        status: 'FAILURE',
      };

    default:
      return state;
  }
};

export default loginReducer;
