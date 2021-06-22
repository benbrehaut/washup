import expect from 'expect';
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import { Emoji } from './Emoji';

describe('<Emoji />', () => {
    test('Should render the children prop', () => {
        render(<Emoji name="cat">🐈</Emoji>);
        const emoji = screen.getByRole('img');

        expect(emoji.textContent).toContain('🐈');
    });
});