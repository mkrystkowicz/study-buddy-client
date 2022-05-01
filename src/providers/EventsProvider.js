import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventsProvider = ({ group, render }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
  }, [group]);

  return render(events);
};

export default EventsProvider;
