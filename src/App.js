import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import AddForm from './components/AddForm';
import EventHandler from './components/EventHandler';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <Calendar onChange={onChange} value={value} />
      <EventHandler />
    </div>
  );
}

export default App;
