import React from 'react';
import {Wrapper, Legend, RadioLabel,RadioInput} from './Radio.styles';
import {RadioProps} from './Radio.types';

const RadioButton: React.FC<RadioProps> = ({name,options = ['Option 1', 'Option 2', 'Option 3'],selectedValue,onChange,disabled = false,label,}) => {
return (
    <Wrapper>
      {label && <Legend>{label}</Legend>}
      {options.map((option) => (
        <RadioLabel key={option}selected={selectedValue === option}disabled={disabled}>
          <RadioInput type="radio"name={name}value={option}checked={selectedValue === option}onChange={() => onChange(option)}disabled={disabled}/>
          {option}
        </RadioLabel>
      ))}
    </Wrapper>
  );
};

export default RadioButton;