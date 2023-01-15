import { screen, render, fireEvent } from 'Utils/test-utils';
import { Button } from '../index';
import mockRouter from 'next-router-mock';
import renderer from 'react-test-renderer';
jest.mock('next/router', () => require('next-router-mock'));

describe('Occupations', () => {
  it('renders button element', () => {
    const onClickMock = jest.fn();
    render(<Button>Naruto</Button>);
    const button = screen.getByText('Naruto');
    expect(button).toBeInTheDocument();
  });
  it('renders the button in the enable state', () => {
    render(<Button>Naruto</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Naruto');
  });
  ////disable////
  it('renders the button in the disable state', () => {
    render(<Button disabled={true}>Naruto</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
  //////onClick ////////
  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Naruto</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
/////snapshot///////
it('renders active correctly ', () => {
  const activeButton = renderer.create(<Button>Naruto</Button>).toJSON();
  expect(activeButton).toMatchSnapshot();
});

it('renders disabled correctly ', () => {
  const disabledButton = renderer
    .create(<Button disabled={true}>Naruto</Button>)
    .toJSON();
  expect(disabledButton).toMatchSnapshot();
});
