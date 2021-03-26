import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// COMPONENTS
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';

import store from './store';
import { useSelector } from 'react-redux';
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
  return (
    <div className='App container'>
      {/* <button onClick={incrementCounter}>+</button>
      <h1>{counter}</h1>
      <button onClick={decrementCounter}>-</button> */}

      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
