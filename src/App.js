import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";
const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  // console.log("my State"+myState)

  return (
    <>
      <h1>{myState}</h1>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
};

export default App;
