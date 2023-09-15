// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setDetailsVisibility] = useState(false);
  return (
    <li className="event">
      <h2 className="summary">{event.summary}</h2>
      <p className="location">{event.location}</p>
      <p className="created">{event.created}</p>
      {showDetails ? (
        <div className="details">
          <div className="details-header">
            <h4>Event Details</h4>
          </div>
          <div className="details-text">
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Status:</strong> {event.status}</p>
          </div>
        </div>
      ) : null}
      <button
        className="details-btn"
        onClick={() => {
          setDetailsVisibility(!showDetails);
        }}
      >
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
    </li>
  );
}

export default Event;