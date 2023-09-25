import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('When the app is opened the event details are not visible', ({ given, when, then }) => {
    let AppComponent;
    given('the user opens the app', () => {
      AppComponent = render(<App />);

    });

    when('the user gets a list of all events', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('the details for the events should not be visible', async () => {
      const allEvents = await getEvents();
      let EventComponent = render(<Event event={allEvents[0]} />)
      const eventDOM = EventComponent.container.firstChild;
      const details = eventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });

  test('When the user clicks on the details button the details should be visible', ({ given, when, then }) => {
    given('the user sees a list of the events', () => {

    });

    when('the user clicks on the details button', () => {

    });

    then('the details should be visible', () => {

    });
  });

  test('When the user clicks on the details button while the details are shown, the details are hidden', ({ given, when, then }) => {
    given('the user sees the details of an event', () => {

    });

    when('the user clicks on the detais button', () => {

    });

    then('the details should not be visible', () => {

    });
  });
});