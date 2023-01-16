import { screen, render } from 'Utils/test-utils';
import { ScrollBox } from '../index';
import renderer from 'react-test-renderer';

jest.mock('next/router', () => require('next-router-mock'));

describe('Element/ScrollBox', () => {
  it('renders ScrollBox element', () => {
    render(
      <ScrollBox heightToRem={3}>
        <p>Kunuha ha a great school for ninjutsu</p>
        <p>Kunuha ha a great school for ninjutsu</p>
        <p>Kunuha ha a great school for ninjutsu</p>
        <p>Kunuha ha a great school for ninjutsu</p>
        <p>Kunuha ha a great school for ninjutsu</p>
      </ScrollBox>
    );
    const scrollBox = screen.getByTestId('scroll-area-root');
    expect(scrollBox).toBeInTheDocument();
  });
  /////snapshot///////
  it('renders ScrollBox correctly ', () => {
    const scrollBox = renderer
      .create(
        <ScrollBox heightToRem={3}>
          <p>Kunuha ha a great school for ninjutsu</p>
          <p>Kunuha ha a great school for ninjutsu</p>
          <p>Kunuha ha a great school for ninjutsu</p>
          <p>Kunuha ha a great school for ninjutsu</p>
          <p>Kunuha ha a great school for ninjutsu</p>
        </ScrollBox>
      )
      .toJSON();
    expect(scrollBox).toMatchSnapshot();
  });
});
