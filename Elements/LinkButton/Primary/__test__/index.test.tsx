import { screen, render, fireEvent } from 'Utils/test-utils';
import { PrimaryButton } from '../index';
import renderer from 'react-test-renderer';

jest.mock('next/router', () => require('next-router-mock'));

describe('Elements/Button', () => {
  it('renders button element', () => {
    render(<PrimaryButton>Naruto</PrimaryButton>);
    const primaryButton = screen.getByText('Naruto');
    expect(primaryButton).toBeInTheDocument();
  });
  it('renders the PrimaryButton in the enable state', () => {
    render(<PrimaryButton>Naruto</PrimaryButton>);
    expect(screen.getByRole('PrimaryButton')).toHaveTextContent('Naruto');
  });
  ////disable////
  it('renders the PrimaryButton in the disable state', () => {
    render(<PrimaryButton disabled={true}>Naruto</PrimaryButton>);
    expect(screen.getByRole('PrimaryButton')).toBeDisabled();
  });
  //////onClick ////////
  it('calls "onClick" prop on PrimaryButton click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    render(<PrimaryButton onClick={onClick}>Naruto</PrimaryButton>);
    fireEvent.click(screen.getByRole('PrimaryButton'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
/////snapshot///////
it('renders active correctly ', () => {
  const activePrimaryButton = renderer
    .create(<PrimaryButton>Naruto</PrimaryButton>)
    .toJSON();
  expect(activePrimaryButton).toMatchSnapshot();
});

it('renders disabled correctly ', () => {
  const disabledPrimaryButton = renderer
    .create(<PrimaryButton disabled={true}>Naruto</PrimaryButton>)
    .toJSON();
  expect(disabledPrimaryButton).toMatchSnapshot();
});
