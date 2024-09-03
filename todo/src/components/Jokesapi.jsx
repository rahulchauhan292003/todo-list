import React from "react";

import { useState, useEffect } from "react";


function Jokesapi() {
  let [jokes, setJokes] = useState({});

  const getJokes = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await response.json();
    console.log(data);
    setJokes({ setup: data.setup, punchline: data.punchline });
  };

  useEffect(() => {
    const getFirstJokes = async () => {
      const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
      const data = await response.json();
      console.log(data);
      setJokes({ setup: data.setup, punchline: data.punchline });
    };
    getFirstJokes();
  }, []);


  return (
    <div className="p-5 text-center shadow-2xl w-80 m-auto ">
      <div className="border-solid border-2 border-green-950 p-5 w-60 m-auto bg-slate-100">
        <h2>{jokes.setup}</h2>
        <h3>{jokes.punchline}</h3>
      </div>
      <button onClick={() => getJokes()} className="mt-5 p-3 font-medium ring-black bg-slate-500 rounded-md hover:bg-slate-300 hover:text-lg">Get Joke</button>
    </div>
  );
}


export default Jokesapi;