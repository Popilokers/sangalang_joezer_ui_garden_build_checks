import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Radio from './Radio'; // Adjust import path accordingly

describe('Radio Button Component', () => {
  const options = ['mihawk upscale', 'buggy upscale', 'moria upscale'];
  const name = 'test-radio-group';

  it('renders all options', () => {
    render(
      <Radio
        name={name}
        options={options}
        selectedValue={options[0]}
        onChange={() => {}}
      />
    );

    options.forEach((option) => {
      const radio = screen.getByRole('radio', { name: option });
      expect(radio).toBeInTheDocument();
    });
  });

  it('marks the selected option correctly', () => {
    render(
      <Radio
        name={name}
        options={options}
        selectedValue="buggy upscale"
        onChange={() => {}}
      />
    );

    const selectedRadio = screen.getByRole('radio', { name: 'buggy upscale' });
    expect(selectedRadio).toBeChecked();

    const notSelectedRadio = screen.getByRole('radio', { name: 'mihawk upscale' });
    expect(notSelectedRadio).not.toBeChecked();
  });

  it('calls onChange when a radio option is clicked', () => {
    const onChange = jest.fn();
    render(
      <Radio
        name={name}
        options={options}
        selectedValue="mihawk upscale"
        onChange={onChange}
      />
    );

    const optionToClick = screen.getByRole('radio', { name: 'moria upscale' });
    fireEvent.click(optionToClick);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('moria upscale');
  });

  it('disables all radio inputs when disabled prop is true', () => {
    render(
      <Radio
        name={name}
        options={options}
        selectedValue={options[0]}
        onChange={() => {}}
        disabled={true}
      />
    );

    options.forEach((option) => {
      const radio = screen.getByRole('radio', { name: option });
      expect(radio).toBeDisabled();
    });
  });
});
