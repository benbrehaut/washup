import expect from 'expect';
import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';
import { Avatar } from './Avatar';

import AvaterIcon from './../../icons/avatar.svg';

describe('<Avatar />', () => {
    test('Should render the Avatar component with the icon', () => { 
        render(<Avatar label="Users name" />);           
        const avatar = screen.getByTestId('avatar-fallback-img');

        expect(avatar).toBeDefined();
    });

    test('Should render the label prop to aria-label', () => {
        render(<Avatar label="Users name" />);
        const avatarLabel = screen.getByRole('img');

        expect(avatarLabel.getAttribute('aria-label')).toMatch('Users name');
    });

    test('Should render a custom image when passed to the imageURL prop', () => {
        const imagePath = '/path/to/image'
        render(<Avatar label="Users name" imageURL={imagePath} />);
        const avatarLabel = screen.getByRole('img');
        
        expect(avatarLabel.querySelector('img').src).toBe(`http://localhost${imagePath}`);
    });
});