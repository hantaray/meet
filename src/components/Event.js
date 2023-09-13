// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setDetailsVisibility] = useState(false);
  return (
    <li className="event">
      <h2 className="summary">{event.summary}</h2>
      <p className="created">{event.created}</p>
      <p className="location">{event.location}</p>
      <button
        className="details-btn"
        onClick={() => {
          setDetailsVisibility(!showDetails);
        }}
      >
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
      {showDetails ? (
        <div className="details">
          <h4>Event Details</h4>
          <p>Description: {event.description}</p>
          <p>Event status: {event.status}</p>
        </div>
      ) : null}
    </li>
  );
}

export default Event;