import React from 'react'
import EventItem from './event-item'
import classes from "./event-list.module.css";

const EventList = ({events}) => {
  return (
    <ul className={classes.list}>
        {
            events && events.length > 0 && events.map((item)=> <EventItem title={item.title} date={item.date} id={item.id} image={item.image} location={item.location} key={item.id} /> )
        }
    </ul>
  )
}

export default EventList