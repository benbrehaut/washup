import expect from 'expect';
import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';
import { Alert } from './Alert';
import TickIcon from './../../icons/tick.svg';

describe('<Alert />', () => {
    describe('Rendering', () => {
        beforeEach(() => {
            render(<Alert>This is an alert</Alert>);
        });
    
        test('Should render without issue', () => {
            const alert = screen.getByRole('alert');
    
            expect(alert.textContent).toMatch('This is an alert');
        });
    
        test('Should render the icon', () => {
            const alertIcon = screen.getByTestId('icon-success');

            expect(alertIcon).toBeDefined();
        });

        test('Should render the close button', () => {
            const alertButton = screen.getByRole('button');

            expect(alertButton).toBeTruthy();
        });
    });

    describe('Variations', () => {
        test('Should render the error variation', () => {
            render(<Alert status="error">This is an error</Alert>);

            const alertError = screen.getByTestId('icon-error');
            
            expect(alertError).toBeDefined();
        });
    });

    describe('Events', () => {
        test('Should fire the onClick event when the close button is clicked', () => {
            const clickHandle = jest.fn();

            render(<Alert status="error" onClick={clickHandle}>This is an alert</Alert>);

            fireEvent.click(screen.getByRole('button'));

            expect(clickHandle).toHaveBeenCalledTimes(1);
        });
    });
});