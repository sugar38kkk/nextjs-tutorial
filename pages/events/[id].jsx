import React from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

const DetailEvent = () => {
  const router = useRouter();
  const id = router.query.id;
  const event = getEventById(id);
  if(!event){
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }
  return (
    <>
    <EventSummary title={event.title}/>
    <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
    </>
  )
}

export default DetailEvent