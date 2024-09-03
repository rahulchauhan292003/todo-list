import React from "react";

import { useState, useEffect } from "react";

const Jsonapi = () => {
  const [json, setJson] = useState([]);

  const getJson = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setJson({ Name: data.name, zzz: data.email });
  };

  useEffect(() => {
    const getFirstJson = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setJson({ Name: data.name, zzz: data.email });
    };
    getFirstJson();
  }, []);
  return (
    <div>
      <h2>{json.name}</h2>
      <h3>{json.email}</h3>
      <button onClick={() => getJson()}>view</button>
    </div>
  );
};

export default Jsonapi;
