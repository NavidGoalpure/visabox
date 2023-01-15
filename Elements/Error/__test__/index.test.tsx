import { ComponentError } from '../componentContent';
import PageErrorContent from '../pageContent';
import renderer from 'react-test-renderer';
jest.mock('next/router', () => require('next-router-mock'));

describe('ComponentError', () => {
  /////snapshot///////
  it('renders ComponentError correctly ', () => {
    const componentError = renderer.create(<ComponentError />).toJSON();
    expect(componentError).toMatchSnapshot();
  });
  it('renders ComponentError correctly ', () => {
    const pageErrorContent = renderer.create(<PageErrorContent />).toJSON();
    expect(pageErrorContent).toMatchSnapshot();
  });
});
