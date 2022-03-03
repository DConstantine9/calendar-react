import React from 'react'

export default function AddForm({value, setValue, addEvent, startTime, setStartTime, endTime, setEndTime}) {
  return (
    <div>
      <input 
        type="text"
        className='my__input'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
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

      <button className='my__button' onClick={addEvent}>
        add 
      </button>
    </div>
  )
}
