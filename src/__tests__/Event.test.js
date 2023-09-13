// src/__tests__/Event.test.js

import { render } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

let allEvents;

describe('<Event /> component', () => {
  let EventComponent;
  beforeEach(async () => {
    allEvents = await getEvents()
    EventComponent = render(<Event event={allEvents[0]} />)
  });

  test('has a event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('has a event created time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('has a event location', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('has the button "show details"', () => {
    expect(EventComponent.queryByText('Show details')).toBeInTheDocument();
  });

  test('by default event details are hidden', () => {
    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });

  test('show details after user clicks button "show details"', async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show details');
    await user.click(button);

    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector('.details');
    expect(details).toBeInTheDocument();
  });

  test('hide details after user clicks button "hide details"', async () => {
    const button = EventComponent.queryByText('Show details');
    const eventDOM = EventComponent.container.firstChild;
    await userEvent.click(button);

    const hideButton = EventComponent.queryByText('Hide details');
    await userEvent.click(hideButton);

    const details = eventDOM.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });
});