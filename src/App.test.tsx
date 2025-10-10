import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import 'jest-styled-components';

test('renders learn react link', () => {
  render(<App />);
});

