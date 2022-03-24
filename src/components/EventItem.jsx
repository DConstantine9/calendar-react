import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-regular-svg-icons"
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons"

export default function EventItem(props) {
 console.log(props.e.value)

  return (
    <div className="single__event">
      <div className='eventInfo'>
      <div className='eventName'>{props.e.value}</div>
        <div className='eventDate'>
          <FontAwesomeIcon className='icon time' icon={faCalendarDays} /> {props.e.date}
        </div>
        <div className='eventTime'>
          <FontAwesomeIcon className='icon time' icon={faClock} />{props.e.startTime} - {props.e.endTime}
        </div>
      </div>
      <FontAwesomeIcon className='icon delete' onClick={() => props.remove(props.e)} icon={faTrashCan} />     
    </div>
  )
}
