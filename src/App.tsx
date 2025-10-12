import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// component imports
import Button from './components/Button'
import Hero from './components/Hero-Image';
import Label from './components/Label';
import Text from './components/Text';
import Img from './components/Img';
import Card from './components/Card';

function App() {
  // state variable to track whether button is disabled (or clicked)

  // a handler when button is clicked
//   const handleButtonClick = () => {
//   console.log(isToggled);
//   setIsToggled(prev => !prev); // toggles disabled state
// };
      const [isToggled, setIsToggled] = useState(false);
      const handleButtonClick = () => {
      console.log(isToggled);
      setIsToggled(true); // toggles disabled state
      }
  return (
    <div>
      <h1>COMPONENT PREVIEW</h1>
      <h2>Button: </h2>
      <Button onClick={handleButtonClick} />

      <h2>Label:</h2>
      <Label>LABEL</Label>

      <h2>Text:</h2>
      <Text>text</Text>


      <h2>Img:</h2>
      <Img/>
      
      <h2>Hero Image:</h2>
      <Hero/>

      <Card onClick={handleButtonClick}></Card>
      
    </div>
  );
}

export default App;
