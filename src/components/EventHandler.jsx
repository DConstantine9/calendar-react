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
  let [styles, setStyles] = useState("") 
  let today = new Date()
  today.setHours(0, 0, 0, 0)
  
  /* localStorage.setItem("events", JSON.stringify(events))
  let store = localStorage.getItem("events")
  store = JSON.parse(store) */

  console.log(localStorage)

 
  useEffect(() => {
    setDate(dateValue.toDateString())
  }, [dateValue])

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

    setEvents([...events, newEvent])
    localStorage.setItem(newEvent.id, JSON.stringify(newEvent))
    setValue("")
    setStartTime("")
    setEndTime("")
    setModal(false)
    
  }
  
  let newEvent = () => {
    if (dateValue < today) {
      setStyles("visible")
    } else if (dateValue >= today) {
      setStyles("")
      setModal(true) 
    }
  }

  let removeEvent = (event) => {
    for (let key in localStorage) {
      if (key === event.id) {
        console.log(typeof key)
        console.log(typeof event.id)
        console.log(key === event.id)
        localStorage.removeItem(key)
      }
      
    }
    //setEvents(events.filter(e => e.id !== event.id))
  }

  return (
    <div className='eventhandler'>
      <h3>Events</h3>
      {dateValue.toDateString()}
      <div className='input__field'>  
        <button className='my__button' onClick={newEvent}>
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

