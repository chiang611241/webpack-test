import React, { useState } from 'react';
import Card from './components/card';


const App = () => {
  const [num, setNum] = useState(0);
  const onChange = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <Card
        title="Hello world"
        value={num}
        onChange={onChange}
      />
    </div>
  );
};

export default App;
