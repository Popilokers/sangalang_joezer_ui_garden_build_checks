import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {
  // state variable to track whether button is disabled (or clicked)
  const [isToggled, setIsToggled] = useState(false);

  // a handler when button is clicked
  const handleButtonClick = () => {
  console.log(isToggled);
  setIsToggled(prev => !prev); // toggles disabled state
};

  return (
    <div>
      <Button
        label={isToggled ? "Off" : "On"}
        toggle={isToggled}
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
