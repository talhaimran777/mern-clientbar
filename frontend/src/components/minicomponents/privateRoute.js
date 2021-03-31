import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // let { user } = useSelector((state) => state.login);
  const [cookies] = useCookies(['user']);
  const { user } = cookies;
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       localStorage.getItem('user') ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{ pathname: '/login', state: { from: props.location } }}
//         />
//       )
//     }
//   />
// );

// export default PrivateRoute;
