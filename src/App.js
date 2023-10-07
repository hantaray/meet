// src/App.js

import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import { CityEventsChart } from './components/CityEventsChart';
import { EventGenresChart } from './components/EventGenresChart';

import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities" ? allEvents :
        allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    if (!navigator.onLine) {
      setWarningAlert("You seem to be offline. Events are loaded from cache.");
    } else {
      setWarningAlert("");
    }
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <h1>Show events in your city</h1>
      <label>Enter/select city:</label>
      <div className="alerts-container">
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />

      <div>
        <label>Enter/select visible events:</label>
        <NumberOfEvents
          setCurrentNOE={setCurrentNOE}
          setErrorAlert={setErrorAlert}
        />
        <div className='charts-container'>
          <EventGenresChart events={events} />
          <CityEventsChart allLocations={allLocations} events={events} />
        </div>
        <label>(click on details to show/hide event details)</label>
        <EventList events={events} />
      </div>
    </div>
  );
}

export default App;