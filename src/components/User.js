import React, { useEffect, useState } from "react";

const User = ({ username, role }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("UseEffect called");
  }, [count]);

  //setCount(0)

  return (
    <>
      {console.log("Component rendered")}
      <h2>User Functional Component</h2>
      <p>Welcome {username}</p>
      <p>Role : {role}</p>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default User;
