const loginReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGIN_COMPONENT_REQUEST':
      return {};
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
        errors: [],
        user: action.payload,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        status: 'FAILURE',
        loggedIn: false,
        user: {},
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
