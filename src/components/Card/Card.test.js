import expect from 'expect';
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import { Card } from './Card';

describe('<Card />', () => {
    test('Should render the children prop', () => {
        render(<Card>This is the card component</Card>);
        const card = screen.getByTestId('card');

        expect(card.textContent).toContain('This is the card component')
    });

    test('Should output the title prop', () => {
        render(<Card title="Card title">This is the card component</Card>);
        const cardTitle = screen.getByRole('heading');

        expect(cardTitle.textContent).toContain('Card title')
    });
});