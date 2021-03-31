import axios from 'axios';
const fetchLoggedInUser = async (token, history) => {
  const headers = {
    'x-auth-token': token,
  };

  try {
    let response = await axios.get('/api/auth', { headers });
    const { data } = response;
    if (data.status === 'Failed!') {
      console.log('Redirect To Login!');
    }
    console.log(data);
    if (data) return data.data;
  } catch (err) {
    // ALERT REDUCER WILL DO IT'S MAGIC RIGHT HERE
    history.push('/login');
  }
};
const fetchClients = async (token, history) => {
  const headers = {
    'x-auth-token': token,
  };

  try {
    let response = await axios.get('/api/clients', { headers });
    const { data } = response;
    // console.log(data);
    if (data) return data.data;
  } catch (err) {
    // ALERT REDUCER WILL DO IT'S MAGIC RIGHT HERE
    history.push('/login');
  }
};
export const fetchLoggedInUserAndClients = (token, history) => async (
  dispatch
) => {
  dispatch({ type: 'REQUEST_DATA' });

  try {
    let user = await fetchLoggedInUser(token, history);
    let clients = await fetchClients(token, history);
    if (user && clients) {
      dispatch({
        type: 'REQUEST_DATA_SUCCESS',
        payload: {
          user,
          clients,
        },
      });
    }
  } catch (err) {
    dispatch({ type: 'REQUEST_DATA_FAILURE' });
  }
};
