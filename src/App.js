import { useState } from "react";

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
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="text-center text-9xl my-20"> {count}</div>

     <div>
     <button
        onClick={addCount}
        className="bg-blue-500 p-8 rounded-md text-white text-2xl mx-20 "
      >
        Add Count
      </button>
      <button
        onClick={reduceCount}
        className="bg-blue-500  p-8 rounded-md text-white text-2xl mx-5 "
      >
        Reduce Count
      </button>
     </div>
     <div>
     <button
        onClick={reset}
        className="bg-blue-500  p-8 rounded-md text-white text-2xl mx-7 my-10 "
      >
        Reset
      </button>
     </div>
    </div>
  );
}

export default App;
