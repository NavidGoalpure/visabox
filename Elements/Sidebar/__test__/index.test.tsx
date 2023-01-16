import { screen, render } from 'Utils/test-utils';
import { Root, TabItem, BodyItem } from '../index';
import renderer from 'react-test-renderer';
import { TbNumbers } from 'react-icons/tb';

jest.mock('next/router', () => require('next-router-mock'));

describe('Element/Sidebar', () => {
  it('renders Sidebar element', () => {
    render(
      <Root
        defaultValue='naruto'
        variant='SIDE_POSITION'
        items={
          <>
            <TabItem
              title='Naruto'
              value='naruto'
              icon={<TbNumbers />}
              tabIndex={0}
            />
            <TabItem
              title='Sasuke'
              value='sasuke'
              icon={<TbNumbers />}
              tabIndex={1}
            />
          </>
        }
        bodies={
          <>
            <BodyItem value='naruto' tabIndex={0}>
              <p>Naruto uses Rasengan</p>
            </BodyItem>
            <BodyItem value='sasuke' tabIndex={1}>
              <p>Sasuke uses Chidori</p>
            </BodyItem>
          </>
        }
      />
    );
    const sidebarRoot = screen.getByTestId('sidebar-root');
    expect(sidebarRoot).toBeInTheDocument();
    //
    const sidebarHeads = screen.getAllByTestId('sidebar-head');
    expect(sidebarHeads.length).toEqual(2);
    //
    const sidebarBodies = screen.getAllByRole('tabpanel');
    //one of them is hidden
    expect(sidebarBodies.length).toEqual(1);
  });
});
