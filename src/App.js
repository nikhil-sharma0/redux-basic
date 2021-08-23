import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter } from "./common/actions";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const increment = (value) => {
    dispatch(incrementCounter(value));
    // dispatch(incrementCounter(5));
  };

  const decrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div className="App">
      <button onClick={() => increment(10)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
