import React, { useState } from 'react';

const Event = ({ age, name, onAgeChange, onNameChange, isGood }) => {
  const [color, setColor] = useState('blue');
  const [value, setValue] = useState('');

  function handleClick() {
    setColor(color === 'blue' ? 'green' : 'blue');
  }

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <form>
        <h1>the setColor changed to: {color}</h1>
        <button style={{ background: color }} onClick={handleClick} type="button">
          Click me!
        </button>
        <br /><br />
        <input onChange={handleInputChange} type="text" placeholder="Type here..." />
        <p>{value}</p>
      </form>

    
      <form>
        <input onChange={onAgeChange} type="number" placeholder="Enter age"
        />
        <input
          onChange={onNameChange} type="text"
          placeholder="Enter name"
        />
        <p>Name: {name}</p>
        <p>Age: {age}</p>

        <p>{isGood ? "u good" : "u no good"}</p>
      </form>
    </div>
  );
};

export default Event;
