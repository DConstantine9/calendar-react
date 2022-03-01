import React from 'react'
import "../App.css"

export default function EventItem(props) {
  return (
    <div className="single__event">
      {props.e}
      <button>del</button>
    </div>
  )
}
