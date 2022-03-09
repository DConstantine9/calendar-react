import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import EventHandler from './components/EventHandler';

function App() {
  const [value, onChange] = useState(new Date());

  function onClickDay(value, e) {
    console.log(value)
  }

  return (
    <div className="App">
      <Calendar onChange={onChange} value={value} />
      <EventHandler onClickDay={onClickDay} dateValue={value} onChange={onChange} />
    </div>
  );
}

export default App;
