import expect from 'expect';
import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';
import { Button } from './Button';
import PlusIcon from './../../icons/plus.svg';

describe('<Button />', () => {
    test('Should render the children prop', () => {
        render(<Button>This is a button</Button>);
        const button = screen.getByRole('button');

        expect(button.textContent).toContain('This is a button')
    });
    
    test('Should render a button by default', () => {
        render(<Button>This is a button</Button>);
        const button = screen.getByRole('button');

        expect(button).toHaveProperty('type', 'button');
    });

    test('Should fire the onClick event when the close button is clicked', () => {
        const clickHandle = jest.fn();
        render(<Button onClick={clickHandle}>This is a button</Button>);

        fireEvent.click(screen.getByRole('button'));

        expect(clickHandle).toHaveBeenCalledTimes(1);
    });

    test('Should make the button into an <a> element when the href prop is passed', () => {
        render(<Button href="#">This is a button</Button>);
        const link = screen.getByRole('link');

        expect(link).toHaveProperty('href');
    });

    test('Should pass the icon prop into the button', () => {
        render(<Button icon={<PlusIcon />}>This is a button</Button>);
        const buttonIcon = screen.getByRole('button').querySelector('svg');

        expect(buttonIcon).toBeDefined();
    });

    test('Should contain visually hidden text with the hiddenLabel prop',() => {
        render(<Button hiddenLabel="Add" icon={<PlusIcon />}></Button>);
        const button = screen.getByRole('button');
        
        expect(button.textContent).toMatch('Add');
    });

    test('Should render a loading icon when loading prop is set to true', () => {
        render(<Button loading={true}></Button>);
        const button = screen.getByRole('button');
        const loadingIcon = screen.getByTestId('loading-icon');

        expect(button.getAttribute('aria-busy')).toBe('true');
        expect(button.disabled).toBe(true);
        expect(loadingIcon).toBeDefined();
    });
});