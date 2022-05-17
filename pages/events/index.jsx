import React from 'react'
import EventList from '../../components/events/event-list'
import { getAllEvents } from '../../dummy-data'
import EventsSearch from '../../components/events/events-search'
import { useRouter } from 'next/router'

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();
  const handleSearchEvents = (month,year) =>{
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }
  return (
    <div>
      <EventsSearch onSearch={handleSearchEvents} />
      <EventList events={events} />
    </div>
  );
}

export default AllEventsPage