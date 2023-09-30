// src/App.js

import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';

import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities" ? allEvents :
        allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <h1>Show events in your city</h1>
      <label>Enter/select city:</label>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />

      <div className="test">
        <label>Enter/select visible events:</label>
        <NumberOfEvents setCurrentNOE={setCurrentNOE} />
        <label>(click on details to show/hide event details)</label>
        <EventList events={events} />
      </div>
    </div>
  );
}

export default App;