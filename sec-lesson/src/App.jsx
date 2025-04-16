import { useState } from 'react';
import './App.css';
import Event from './Event';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  
  return (
    <div>
      <Event onNameChange={handleName}  onAgeChange={handleAge} name={name} age={age}
      isGood = {true}
      />
    </div>
  );
}

export default App;
