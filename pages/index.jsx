import React from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

const AllEventsPage = () => {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default AllEventsPage;
