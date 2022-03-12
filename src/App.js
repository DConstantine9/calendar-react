import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import EventHandler from './components/EventHandler';

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="App">
      <Calendar onChange={onChange} value={value} />
      <EventHandler dateValue={value} />
    </div>
  );
}

export default App;
