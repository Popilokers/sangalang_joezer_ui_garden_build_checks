import React from "react";
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Cell from './TableCell';

import styled from 'styled-components';

export const StyledCell = styled.td<{bgcolor?:string;  color?:string; disabled?:boolean}>`
background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')}; 
border: 2px solid black; 

&:hover {

    background-color: ${({ disabled,bgcolor }) => (disabled ? '' : bgcolor)};
    font-weight: bold;
    color: ${props => props.color}
  }
`;

describe('Table Cell', () => {
    it('renders the Table Cell (default)', () => {
        render(<table >
                    <tbody>
                        <tr>
                            <StyledCell disabled={false} bgcolor="white">Table Default</StyledCell>
                        </tr>
                    </tbody>
                </table>)
        const tableElement = screen.getByRole('cell', { name: 'Table Default' });
        
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveStyle({border: '2px solid black'})
    expect(tableElement).toHaveStyleRule('background-color', 'white', { modifier: ':hover' });

    });
});

describe('Table Cell', () => {
    it('renders the Table Cell (disabled)', () => {
        render(<table >
                    <tbody>
                        <tr>
                            <StyledCell disabled={true}>Table Default</StyledCell>
                        </tr>
                    </tbody>
                </table>)
        const tableElement = screen.getByRole('cell', { name: 'Table Default' });
        
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveStyle({border: '2px solid black'})
    expect(tableElement).not.toHaveStyleRule('background-color', undefined, { modifier: ':hover' });


    });
});