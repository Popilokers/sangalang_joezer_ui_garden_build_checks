import React from "react";
import { useState } from "react";
import "./App.css";

// component imports
import Button from "./components/Button";
import Hero from "./components/Hero-Image";
import Label from "./components/Label";
import Text from "./components/Text";

import Img from "./components/Img";
import Card from "./components/Card";
import { Table, Header, Row, Cell, Footer } from "./components/Table";
import Dropdown from "./components/Dropdown";
import Radio from "./components/Radio-Button";

function App() {
  // state variable to track whether button is disabled (or clicked)

  // a handler when button is clicked
  //   const handleButtonClick = () => {
  //   console.log(isToggled);
  //   setIsToggled(prev => !prev); // toggles disabled state
  // };
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isCardDisabled, setIsCardDisabled] = useState(false);

  const handleButtonClick = () => {
    console.log(isButtonDisabled);
    setIsButtonDisabled(true); // toggles disabled state
  };
  const handleCardClick = () => {
    console.log(isCardDisabled);
    setIsCardDisabled(true); // toggles disabled state
  };

  const options = ["mihawk upscale", "buggy upscale", "moria upscale"];
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <h1>COMPONENT PREVIEW</h1>
      <h2>Button: </h2>
      <Button onClick={handleButtonClick} disabled={isButtonDisabled} />

      <h2>Label:</h2>
      <Label>LABEL</Label>

      <h2>Text:</h2>
      <Text>text</Text>
      <h2>Table:</h2>
      <Table disabled={false}>
        <Header>
          <Row>
            <Cell>Header Cell</Cell>
            <Cell>Header Cell2</Cell>
            <Cell>Header Cell3</Cell>
            <Cell>Header Cell4</Cell>
          </Row>
        </Header>
        <Row>
          <Cell>Data Cell</Cell>
          <Cell>Data Cell2</Cell>
          <Cell>Data Cell3</Cell>
          <Cell>Data Cell4</Cell>
        </Row>
        <Footer>
          <Row>
            <Cell>Footer Cell</Cell>
            <Cell>Footer Cell2</Cell>
            <Cell>Footer Cell3</Cell>
            <Cell disabled={true}>Footer Cell4</Cell>
          </Row>
        </Footer>
      </Table>
      <h2>Dropdown:</h2>

      <Dropdown
        label="Choose an option"
        // options={options}
        // value={selected}
        onChange={setSelected}
      />

      <Radio
        name="example"
        label="Pick an option"
        options={options}
        selectedValue={selected}
        onChange={setSelected}
      />

      <h2>Img:</h2>
      <Img />

      <h2>Hero Image:</h2>
      <Hero />

      <h2>Card:</h2>
      <Card onClick={handleCardClick} disabled={isCardDisabled}></Card>
    </div>
  );
}

export default App;
