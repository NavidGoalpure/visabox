import { screen, render, fireEvent } from 'Utils/test-utils';
import { MaraAccordion } from '../index';

import renderer from 'react-test-renderer';
jest.mock('next/router', () => require('next-router-mock'));

describe('Accordin', () => {
  it('renders Accordin element', () => {
    render(
      <MaraAccordion
        triggerText='Who is the best?'
        isOpen={false}
        backgroundLayer='2A'
        content={<p> Kakashi is better than others</p>}
      />
    );
    const accordion = screen.getByTestId('Marabox-Accordion');
    expect(accordion).toBeInTheDocument();
  });
  //////onClick ////////
  it('Accordin in close status', () => {
    render(
      <MaraAccordion
        triggerText='Who is the best?'
        isOpen={false}
        backgroundLayer='2A'
        content={<p> Kakashi is better than others</p>}
      />
    );
    expect(
      screen.getByRole('button', {
        expanded: false,
      })
    ).toBeInTheDocument();
    //click
    fireEvent.click(
      screen.getByRole('button', {
        expanded: false,
      })
    );
    //test open after click
    expect(
      screen.getByRole('button', {
        expanded: true,
      })
    ).toBeInTheDocument();
  });

  it('Accordin in open status', () => {
    render(
      <MaraAccordion
        triggerText='Who is the best?'
        isOpen={true}
        backgroundLayer='2A'
        content={<p> Kakashi is better than others</p>}
      />
    );
    expect(
      screen.getByRole('button', {
        expanded: true,
      })
    ).toBeInTheDocument();
    //click
    fireEvent.click(
      screen.getByRole('button', {
        expanded: true,
      })
    );
    //test open after click
    expect(
      screen.getByRole('button', {
        expanded: false,
      })
    ).toBeInTheDocument();
  });
});
/////snapshot///////
it('renders open accordin correctly ', () => {
  const openAccordin = renderer
    .create(
      <MaraAccordion
        triggerText='Who is the best?'
        isOpen={true}
        backgroundLayer='2A'
        content={<p> Kakashi is better than others</p>}
      />
    )
    .toJSON();
  expect(openAccordin).toMatchSnapshot();
});

it('renders close Accordin correctly ', () => {
  const closeAccordin = renderer
    .create(
      <MaraAccordion
        triggerText='Who is the best?'
        isOpen={false}
        backgroundLayer='2A'
        content={<p> Kakashi is better than others</p>}
      />
    )
    .toJSON();
  expect(closeAccordin).toMatchSnapshot();
});
