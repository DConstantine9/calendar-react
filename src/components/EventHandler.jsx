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
      <div className='input__field'>
        <input 
        type="text"
        className='my__input'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
        <button className='my__button' onClick={addEvent}>add</button>
      </div>
      

      <div className='eventhandler__content'>
        <EventList remove={removeEvent} events={events} />
      </div>
    </div>
  )
}

