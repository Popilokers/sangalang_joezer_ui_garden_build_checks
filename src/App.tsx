import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button'
import Hero from './components/Hero-Image';
import Label from './components/Label';
import Text from './components/Text';
import Img from './components/Img';

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
      <h1>COMPONENT PREVIEW</h1>
      <h2>Button: </h2>
      <Button
        label={isToggled ? "Off" : "On"}
        toggle={isToggled}
        onClick={handleButtonClick}
      />

      <h2>Label:</h2>
      <Label>LABEL</Label>

      <h2>Text:</h2>
      <Text>text</Text>


      <h2>Img:</h2>
      <Img src='https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac'/>
      
      <h2>Hero Image:</h2>
      <Hero BGimage='https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac'>
      <h1>HERO IMAGE</h1>
      </Hero>

      
    </div>
  );
}

export default App;
