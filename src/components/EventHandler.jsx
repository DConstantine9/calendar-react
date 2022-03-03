import React, { useState } from 'react'
import EventList from './EventList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import ModalWindow from './ModalWindow/ModalWindow';
import AddForm from './AddForm';

export default function EventHandler() {
  let [value, setValue] = useState("");
  let [events, setEvents] = useState([]);
  let [modal, setModal] = useState(false)
  let [startTime, setStartTime] = useState("")
  let [endTime, setEndTime] = useState("")

  let addEvent = () => {
    let newEvent = {
      id: Date.now(),
      value,
      startTime,
      endTime

    }
    setEvents([...events, newEvent])
    setValue("")
    setModal(false)
    console.log(startTime)
    console.log(endTime)
  }

  let removeEvent = (event) => {
    setEvents(events.filter(e => e.id !== event.id))
  }

  return (
    <div className='eventhandler'>
      <h3>Events</h3>
      <div className='input__field'>  
        <button className='my__button' onClick={() => setModal(true)}>
          <FontAwesomeIcon icon={faPlus} /> New  
        </button>
      </div>
      <div className='eventhandler__content'>
      <EventList remove={removeEvent} events={events} />
      <ModalWindow visible={modal} setVisible={setModal}>
        <AddForm value={value} setValue={setValue} addEvent={addEvent} setStartTime={setStartTime} startTime={startTime} setEndTime={setEndTime} endTime={endTime}/>
      </ModalWindow>
      </div>
    </div>
  )
}

