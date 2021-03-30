import axios from 'axios';
export const fetchLoggedInUser = (token) => async (dispatch) => {
  dispatch({
    type: 'REQUEST_USER',
  });

  const headers = {
    'x-auth-token': token,
  };

  try {
    let response = await axios.get('/api/auth', { headers });
    const { data } = response;
    if (data)
      dispatch({
        type: 'REQUEST_USER_SUCCESS',
        payload: data.data,
      });
  } catch (err) {
    dispatch({ type: 'REQUEST_USER_FAILED' });
  }
};
export const fetchClients = (token) => async (dispatch) => {
  dispatch({
    type: 'REQUEST_CLIENTS',
  });

  const headers = {
    'x-auth-token': token,
  };

  try {
    let response = await axios.get('/api/clients', { headers });
    const { data } = response;
    // console.log(data);
    if (data)
      dispatch({
        type: 'REQUEST_CLIENTS_SUCCESS',
        payload: data.data,
      });
  } catch (err) {
    dispatch({
      type: 'REQUEST_CLIENTS_FAILURE',
    });
  }
};
