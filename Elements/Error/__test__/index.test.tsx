import { screen, render, fireEvent } from 'Utils/test-utils';
import { ComponentError } from '../componentContent';
import mockRouter from 'next-router-mock';
import renderer from 'react-test-renderer';
jest.mock('next/router', () => require('next-router-mock'));

describe('ComponentError', () => {
  /////snapshot///////
  it('renders ComponentError correctly ', () => {
    const openComponentError = renderer.create(<ComponentError />).toJSON();
    expect(openComponentError).toMatchSnapshot();
  });
});
