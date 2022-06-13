import React, { useState, useEffect } from 'react'
import EventList from './EventList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import ModalWindow from './ModalWindow/ModalWindow';
import AddForm from './AddForm';

export default function EventHandler({dateValue}) {
  let [value, setValue] = useState("");
  let [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []  
  );
  let [modal, setModal] = useState(false)
  let [startTime, setStartTime] = useState("")
  let [endTime, setEndTime] = useState("")
  let [date, setDate] = useState(dateValue.toDateString())
  let [styles, setStyles] = useState("") 
  let today = new Date()
  today.setHours(0, 0, 0, 0)

  useEffect(() => {
    setDate(dateValue.toDateString())
  }, [dateValue])

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  }, [events])

  let addEvent = () => {
    if (value === "") {
      value = "New Event"
    }

    let newEvent = {
      id: Math.random().toString(16).slice(2),
      value,
      startTime,
      endTime,
      date
    }

    setEvents((events) => [...events, newEvent])
    setValue("")
    setStartTime("")
    setEndTime("")
    setModal(false)
  }
  
  let createEvent = () => {
    if (dateValue < today) {
      setStyles("visible")
    } else if (dateValue >= today) {
      setStyles("")
      setModal(true) 
    }
  }

  let removeEvent = (event) => {
    setEvents(events.filter(e => e.id !== event.id))
    localStorage.removeItem(event.id)
  }

  return (
    <div className='eventhandler'>
      <h3>Events</h3>
      {dateValue.toDateString()}
      <div className='input__field'>  
        <button className='my__button' onClick={createEvent}>
          <FontAwesomeIcon icon={faPlus} /> New  
        </button>
      <span className={styles}>You can't set an ivent to past date</span>
      </div>
      <div className='eventhandler__content'>
      <EventList remove={removeEvent} events={events} date={date} />
      <ModalWindow visible={modal} setVisible={setModal} >
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

