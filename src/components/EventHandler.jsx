import React, { useState, useEffect } from 'react'
import EventList from './EventList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import ModalWindow from './ModalWindow/ModalWindow';
import AddForm from './AddForm';

export default function EventHandler({dateValue}) {
  let [value, setValue] = useState("");
  let [events, setEvents] = useState([]);
  let [modal, setModal] = useState(false)
  let [startTime, setStartTime] = useState("")
  let [endTime, setEndTime] = useState("")
  let [date, setDate] = useState(dateValue.toDateString())

  useEffect(() => {
    setDate(dateValue.toDateString())
  }, [dateValue])

  let addEvent = () => {
    let newEvent = {
      id: Date.now(),
      value,
      startTime,
      endTime,
      date
    }

    setEvents([...events, newEvent])
    setValue("")
    setStartTime("")
    setEndTime("")
    setModal(false)
  }

  let removeEvent = (event) => {
    setEvents(events.filter(e => e.id !== event.id))
  }

  return (
    <div className='eventhandler'>
      <h3>Events</h3>
      {dateValue.toDateString()}
      <div className='input__field'>  
        <button className='my__button' onClick={() => setModal(true)}>
          <FontAwesomeIcon icon={faPlus} /> New  
        </button>
      </div>
      <div className='eventhandler__content'>
      <EventList remove={removeEvent} events={events} date={date} />
      <ModalWindow visible={modal} setVisible={setModal}>
        <AddForm
          dateValue={dateValue} 
          value={value} 
          setValue={setValue} 
          addEvent={addEvent} 
          setStartTime={setStartTime} 
          startTime={startTime} 
          setEndTime={setEndTime} 
          endTime={endTime} 
          date={date}
          setDate={setDate}
        />
      </ModalWindow>
      </div>
    </div>
  )
}

