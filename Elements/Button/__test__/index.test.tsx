import { screen, render, fireEvent } from 'Utils/test-utils';
import { Button } from '../index';
import mockRouter from 'next-router-mock';
jest.mock('next/router', () => require('next-router-mock'));

describe('Occupations', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/initial');
  });
  it('renders button element', () => {
    render(<Button>Naruto</Button>);

    const button = screen.getByText('Naruto');

    expect(button).toBeInTheDocument();
  });
});
