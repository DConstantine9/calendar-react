import React, { useState } from 'react'
import EventList from './EventList';

export default function EventHandler() {
  let [value, setValue] = useState("");
  let [events, setEvents] = useState([]);

  let addEvent = () => {
    let newEvent = {
      id: Date.now(),
      value
    }
    setEvents([...events, newEvent])
    setValue("")
    console.log(value)
    console.log(events)
  }

  let removeEvent = (event) => {
    setEvents(events.filter(e => e.id !== event.id))
  }

  return (
    <div className='eventhandler'>
      <h3>events</h3>
      <input 
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={addEvent}>add</button>

      <div className='eventhandler__content'>
        <EventList remove={removeEvent} events={events} />
      </div>
    </div>
  )
}

