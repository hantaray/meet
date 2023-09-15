import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import { extractLocations, getEvents } from '../api';
import { render, within } from '@testing-library/react';
import App from '../App';

describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />
    );
  });

  test('has the input textbox', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
  });

  test('default number of events is 32', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
  });

  test('updates number of events when user types', async () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    await userEvent.type(input, '{backspace}{backspace}10');
    expect(input).toHaveValue('10');
  });
});

describe('<NumberOfEvents /> integration', () => {
  test('renders a list of events matching the value entered by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsComponent = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput = within(NumberOfEventsComponent).queryByRole('textbox');
    await user.type(NumberOfEventsInput, "{backspace}{backspace}10");

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

    expect(allRenderedEventItems.length).toEqual(10);
  });
});