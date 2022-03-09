import React from 'react'
import EventItem from './EventItem'

export default function EventList({events, remove, date}) {
  return (
    events.map((e) => (
      <EventItem date={date} remove={remove} e={e} key={Math.random().toString(16).slice(2)}/>
  ))
  )
}
