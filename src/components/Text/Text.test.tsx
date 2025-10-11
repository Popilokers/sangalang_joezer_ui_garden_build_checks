import React from "react";
import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Text from './Text';

describe('Text', () => {
    it('renders the Text (default)', () => {
        render(<Text>Text Default</Text>)
    });
});

describe('Text', () => {
    it('renders the Text (color + default size)', () => {
        render(<Text color = "red" >Text color</Text>)
    });
});


describe('Text', () => {
    it('renders the Text (size + default color)', () => {
        render(<Text size = "5px" >Text size</Text>)
    });
});



describe('Text', () => {
    it('renders the Text (size and color)', () => {
        render(<Text size = "5px" color = "red">Text color + size</Text>)
    });
});