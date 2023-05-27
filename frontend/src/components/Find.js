import React, { useState } from "react";

const Find = ({ findValue, setFindValue }) => {
  const [count, setCount] = useState(0);

  setTimeout(function () {
    let arr = document.querySelectorAll("mark");
    setCount(arr.length);
  }, 0);

  return (
    <div className="input-find-container">
      <div className="count-div">Count: {count}</div>
      <input
        type="text"
        value={findValue}
        onChange={(e) => setFindValue(e.target.value)}
        placeholder="Find a string..."
        className="input-field"
      />
    </div>
  );
};

export default Find;
