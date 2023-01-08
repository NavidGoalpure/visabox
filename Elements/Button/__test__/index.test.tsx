import { screen, render, fireEvent } from 'Utils/test-utils';
import { Button } from '../index';
import 'jest-styled-components';
import mockRouter from 'next-router-mock';
jest.mock('next/router', () => require('next-router-mock'));

describe('Occupations', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/initial');
  });
  it('renders a heading', () => {
    render(<Button>Naruto</Button>);

    const heading = screen.getByText('Naruto');

    expect(heading).toBeInTheDocument();
  });
});
