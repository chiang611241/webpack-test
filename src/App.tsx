import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const onChange = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>{num}</p>
      <button onClick={onChange} type="button">Add</button>
    </div>
  );
};

export default App;
