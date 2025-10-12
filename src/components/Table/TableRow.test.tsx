import React from "react";
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Row from './TableRow';
import styled from 'styled-components';

export const StyledRow = styled.tr<{color?:string; disabled?:boolean}>`
   opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
    
   cursor:  ${({ disabled }) => (disabled ? 'not-allowed' :'pointer')};
`;

describe('Table Header', () => {
    it('renders the Table Header (default)', () => {
        render(<table><thead><Row  disabled={false}><td>Table Default</td></Row></thead></table>);

        const tableElement = screen.getByRole('row');

        expect(tableElement).toBeInTheDocument();
        expect(tableElement).toHaveStyle({ opacity: '1' });
    });
});

describe('Table Header', () => {
    it('renders the Table Header (disabled)', () => {
        render(<table><thead><Row  disabled={true}><td>Table Default</td></Row></thead></table>);


        const tableElement = screen.getByRole('row');
    
        
expect(tableElement).toBeInTheDocument();
        expect(tableElement).toHaveStyle({ opacity: 0.2 });
    });
});
