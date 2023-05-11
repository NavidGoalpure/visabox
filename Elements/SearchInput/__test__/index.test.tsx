import {
  screen,
  render,
  fireEvent,
  getByPlaceholderText,
} from 'Utils/test-utils';
import renderer from 'react-test-renderer';
import { Input } from 'Components/Input';
jest.mock('next/router', () => require('next-router-mock'));

describe('Elements/Input', () => {
  it('renders Input element and change value', () => {
    render(<Input placeholder='What is your tribe name?' />);
    const input = screen.getByPlaceholderText(
      'What is your tribe name?'
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'Kunuha' } });
    expect(input.value).toBe('Kunuha');
  });
  it('renders Input element with error', () => {
    render(<Input defaultValue='Naruto' errorMasage='Take it easy Naruto' />);
    const errorText = screen.queryByTestId('error-input');
    expect(errorText).toBeInTheDocument();
  });
  it('renders Input element without error', () => {
    render(<Input defaultValue='Naruto' />);
    const errorText = screen.queryByTestId('error-input');
    expect(errorText).not.toBeInTheDocument();
  });

  /////snapshot///////
  it('renders Input correctly ', () => {
    const input = renderer.create(<Input />).toJSON();
    expect(input).toMatchSnapshot();
  });
});
