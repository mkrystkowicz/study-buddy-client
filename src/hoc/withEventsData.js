import React, { useEffect, useState } from 'react';
import axios from 'axios';

const withEventData = (WrappedComponent, group) => {
  return function WithEventsDataWrapper() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
    }, []);

    return <WrappedComponent events={events} />;
  };
};

export const DisplayEvents = (props) => {
  return (
    <div>
      Log events
      {console.log(props)}
    </div>
  );
};

export const DisplayEventsData = withEventData(DisplayEvents, 'A');
