import React from 'react'
import EventItem from './EventItem'

export default function EventList({events, remove}) {
  return (
    events.map((e) => (
      <EventItem remove={remove} e={e.value} key={Math.random().toString(16).slice(2)}/>
  ))
  )
}
