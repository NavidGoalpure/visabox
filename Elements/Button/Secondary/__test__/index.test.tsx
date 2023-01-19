import { screen, render, fireEvent } from 'Utils/test-utils';
import { SecondaryButton } from '../index';
import renderer from 'react-test-renderer';

jest.mock('next/router', () => require('next-router-mock'));

describe('Elements/SecondaryButton', () => {
  it('renders Secondarybutton element', () => {
    render(<SecondaryButton>Naruto</SecondaryButton>);
    const secondarybutton = screen.getByText('Naruto');
    expect(secondarybutton).toBeInTheDocument();
  });
  it('renders the Secondarybutton in the enable state', () => {
    render(<SecondaryButton>Naruto</SecondaryButton>);
    expect(screen.getByRole('Secondarybutton')).toHaveTextContent('Naruto');
  });
  ////disable////
  it('renders the Secondarybutton in the disable state', () => {
    render(<SecondaryButton disabled={true}>Naruto</SecondaryButton>);
    expect(screen.getByRole('Secondarybutton')).toBeDisabled();
  });
  //////onClick ////////
  it('calls "onClick" prop on Secondarybutton click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    render(<SecondaryButton onClick={onClick}>Naruto</SecondaryButton>);
    fireEvent.click(screen.getByRole('Secondarybutton'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
/////snapshot///////
it('renders active correctly ', () => {
  const activeSecondaryButton = renderer
    .create(<SecondaryButton>Naruto</SecondaryButton>)
    .toJSON();
  expect(activeSecondaryButton).toMatchSnapshot();
});

it('renders disabled correctly ', () => {
  const disabledSecondaryButton = renderer
    .create(<SecondaryButton disabled={true}>Naruto</SecondaryButton>)
    .toJSON();
  expect(disabledSecondaryButton).toMatchSnapshot();
});
