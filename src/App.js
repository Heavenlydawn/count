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
   <div>

<div className="flex flex-col justify-center items-center bg-zinc-900 shadow-lg h-screen">
      <div className="text-center text-9xl my-20 text-white"> {count}</div>

     <div>
     <button
        onClick={addCount}
        className="bg-blue-500 px-10 p-8 rounded-md text-white text-2xl mx-20 "
      >
        Add Count
      </button>
      <button
        onClick={reduceCount}
        className="bg-blue-500  p-8 rounded-md text-white text-2xl "
      >
        Reduce Count
      </button>
     </div>
     <div>
     <button
        onClick={reset}
        className="bg-blue-500 py-5 px-40 rounded-md text-white text-2xl my-10 ml-20"
      >
        Reset
      </button>
     </div>
    </div>

   </div>
  );
}

export default App;
