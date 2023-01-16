import { screen, render } from 'Utils/test-utils';
import { Logo } from '../index';
import renderer from 'react-test-renderer';

jest.mock('next/router', () => require('next-router-mock'));


describe('Element/Logo', () => {
  it('renders Logo element', () => {
    render(<Logo />);
    const button = screen.getByAltText('marabox-logo');
    expect(button).toBeInTheDocument();
  });
  /////snapshot///////
  it('renders logo correctly ', () => {
    const activeButton = renderer.create(<Logo />).toJSON();
    expect(activeButton).toMatchSnapshot();
  });
});
