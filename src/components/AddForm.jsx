import React from 'react';
import "../styles/AddForm.css"

export default function AddForm({value, setValue, addEvent, startTime, setStartTime, endTime, setEndTime, date, setDate}) {
  return (
    <div className='form__container'>
      <input 
        type="text"
        className='my__input'
        value={value}
        placeholder="What's your plan?"
        onChange={e => setValue(e.target.value)}
      />

      <div className='form__time'>
        <input 
          type="time" 
          value={startTime}
          onChange={e => setStartTime(e.target.value)}
        />
        <input 
          type="time" 
          value={endTime}
          onChange={e => setEndTime(e.target.value)}
        />
      </div>

      <button className='my__button' onClick={addEvent}>
        add 
      </button>
    </div>
  )
}
