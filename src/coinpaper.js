import React, { useState } from 'react';
function Example() {
    // Declare a new state variable, which we'll call "count"
    const [list, SetList] = useState([]);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }