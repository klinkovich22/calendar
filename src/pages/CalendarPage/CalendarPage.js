import React, { useState } from 'react';
import CurrentDay from '../../components/CurrentDay/CurrentDay';
import CurrentMonth from '../../components/CurrentMonth/CurrentMonth';
import DayContextObj from '../../contexts/DayContext';
import { startOfMonth } from 'date-fns';
import './Calendar.css'

export default function CalendarPage() {

  const [currentDay, setCurrentDay] = useState(new Date());
  const [startOfCurrentMonth, setStartOfCurrentMonth] = useState(startOfMonth(new Date()));

  return (
    <DayContextObj.Provider value={{currentDay, setCurrentDay, startOfCurrentMonth, setStartOfCurrentMonth}}>
      <main>
        <CurrentDay />
        <CurrentMonth />
      </main>
    </DayContextObj.Provider>
  )
}
