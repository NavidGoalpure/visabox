import { render, screen } from '@testing-library/react';
import { Button } from '../index';

describe('Occupations', () => {
  it('renders a heading', () => {
    render(<Button>Naruto</Button>);

    const heading = screen.getByRole('heading', {
      name: /Skill Occupation List/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
