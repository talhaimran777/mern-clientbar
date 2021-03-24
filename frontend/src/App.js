// COMPONENTS
import Signup from './components/signup';

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

      <Signup />
    </div>
  );
}

export default App;
