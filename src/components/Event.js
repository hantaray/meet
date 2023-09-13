// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  return (
    <li className="event">
      <h2 className="summary">{event.summary}</h2>
      <p className="created">{event.created}</p>
      <p className="location">{event.location}</p>
      <button className="details-btn">Show details</button>
    </li>
  );
}

export default Event;