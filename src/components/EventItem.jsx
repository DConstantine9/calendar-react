import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from "@fortawesome/free-solid-svg-icons"

export default function EventItem(props) {
  return (
    <div className="single__event">
      {props.e.value}
      <FontAwesomeIcon className='delete' onClick={() => props.remove(props.e)} icon={faTrashCan} />
    </div>
  )
}
