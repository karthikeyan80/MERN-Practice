import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function showData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setState(data);
    }

    showData();
  }, []);
  return (
    <div>
        <h1>First Posts</h1>
        { state.length > 0 ? <h2>{state[0].title}</h2> : <p>Loading</p> }
    </div>
  )
}

export default FetchDataEffect;
