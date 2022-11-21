import { useState } from "react";
import style from "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };

  const reduceCount = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount((count = 0));
    // window.location.reload(false)
  };

  return (
    <div id="container">
      <div>
        <div className="text-center text-9xl my-20 text-white"> {count}</div>

        <div>
          <button
            onClick={addCount}
            id="addNum" //className="bg-blue-500 p-8 rounded-md text-white text-2xl mx-15 "
          >
            Add
          </button>
          <button
            onClick={reduceCount}
            id="reduceNum" //className="bg-blue-500  p-8 rounded-md text-white text-2xl "
          >
            Reduce
          </button>
        </div>
        <div>
          <button
            onClick={reset}
            id="resetNum"//className="bg-red-500 py-5 px-20 rounded-md text-white text-2xl my-10 ml-20"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
