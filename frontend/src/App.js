import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/navbar';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';

// FOR PRIVATE ROUTE
import { PrivateRoute } from './components/minicomponents/privateRoute';

import store from './store';
import { useSelector } from 'react-redux';
import AddClient from './components/addClient';
function App() {
  const incrementCounter = () => {
    // Dispatch INCREMENT ACTION
    store.dispatch({
      type: 'INCREMENT',
    });
  };

  const decrementCounter = () => {
    // Dispatch DECREMENT ACTION
    store.dispatch({
      type: 'DECREMENT',
    });
  };

  let counter = useSelector((state) => state.counter);
  let { user } = useSelector((state) => state.login);

  // console.log('This time', user);
  return (
    <div className='App'>
      {/* <button onClick={incrementCounter}>+</button>
      <h1>{counter}</h1>
      <button onClick={decrementCounter}>-</button> */}
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute exact path='/addClient' component={AddClient} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
