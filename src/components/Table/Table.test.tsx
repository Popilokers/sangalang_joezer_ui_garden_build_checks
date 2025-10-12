import React from "react";
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Table from './Table';

describe('Table', () => {
    it('renders the Table (default)', () => {
        render(<Table>
                    <tbody>
                        <tr>
                            <td>Table Default</td>
                        </tr>
                    </tbody>
                </Table>)
        const tableElement = screen.getByRole('table');

    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveStyle('border-collapse: collapse');
    });
});

describe('Table', () => {
    it('renders the Table (disabled)', () => {
        render(<Table disabled={true}>
                    <tbody>
                        <tr style={{border: '2px black solid'}}>
                            <td>Table Default</td>
                        </tr>
                    </tbody>
                </Table>)
        const tableElement = screen.getByRole('table');

    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveStyle('border-collapse: separate ');
    });
});