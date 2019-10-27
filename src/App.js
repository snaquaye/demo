import React, { useState } from 'react';
import Layout from './layout';
import Counter from './components/Counter';

function App() {
  // const [count, setCount] = useState(20);

  // const increment = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };

  // const decriment = () => {
  //   if (count === 0) {
  //     alert('Value cannot be less than 0');
  //     return;
  //   }

  //   const newCount = count - 1;
  //   setCount(newCount);
  // };

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
