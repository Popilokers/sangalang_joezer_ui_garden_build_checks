import React from "react";
import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Label from './Label';

describe('Label', () => {
    it('renders the Label (default)', () => {
        render(<Label>Label Default</Label>)
    });
});
