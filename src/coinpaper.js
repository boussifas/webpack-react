import React, { useState } from 'react';
function Example() {
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