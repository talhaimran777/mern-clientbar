const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTRATION_REQUEST':
      return {
        ...state,
        status: 'IN_PROCESS',
      };
    case 'REGISTRATION_SUCCESS':
      return {
        ...state,
        status: 'SUCCESS',
        registered: true,
        errors: [],
        user: action.payload,
      };
    case 'REGISTRATION_FAILURE':
      return {
        ...state,
        status: 'FAILURE',
        registered: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
