import React, { useMemo, useState } from 'react';
import DatePickerView from './Components/DatePickerView';

import './Components/style.css';

function App() {
  const currentTime = new Date()
  const [currentDate, setCurrentDate] = useState(currentTime);
  const [currentMonth, setCurrentMonth] = useState(currentTime.getMonth());
  const [daysInCurrentMonth, setDaysInCurrentMonth] = useState(new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 0).getDate());
  const [currentYear, setCurrentYear] = useState(currentTime.getFullYear());

  const currentDay = currentTime.getDay(); 
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayOfWeekNames = useMemo(() => [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ], []);

  // Поточний день 
const currentDayName = dayOfWeekNames[currentDay];
  // Поточний місяць
const currentMonthView = monthNames[(currentMonth + 12) % 12]; // обертання місяців у кільці

// Поточний день
const currentDayNumberInMonth = currentDate.getDate();

const addMonths = (date, months) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + months);
    return newDate;
  };

const handlePrevMonth = () => {
    const newDate = addMonths(currentDate, -1);
    
    setCurrentDate(newDate);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear())
    setDaysInCurrentMonth(new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate());
}
const handleNextMonth = () => {
    const newDate = addMonths(currentDate, 1);
    
    setCurrentDate(newDate);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear())
    setDaysInCurrentMonth(new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate());
}

const getDayOfWeek = (year, month, day) => {
    const date = new Date(year, month, day);
    return date.getDay();
  };

const dayCurrentInWeek = useMemo(() => {
      return [...Array(daysInCurrentMonth).keys()].map((dayNumber, index) =>(  
        <ul key={index}>
          <li  className={`${currentDate.getDate() === index + 1 &&  "current_day_calendar" }`}>
              <p className='day_week'>
                {dayNumber + 1}
              </p>
              <p>
                 {dayOfWeekNames[(getDayOfWeek(currentYear, currentMonth, dayNumber + 1))]}
              </p> 
          </li>
        </ul>
        ))
},[currentYear, currentMonth, daysInCurrentMonth, dayOfWeekNames, currentDate]);

  return (
        <React.Fragment>
              <DatePickerView dayCurrentInWeek={dayCurrentInWeek}
                              currentDayName={currentDayName}
                              currentMonthView={currentMonthView}
                              currentYear={currentYear}
                              currentHours={currentHours}
                              currentMinutes={currentMinutes}
                              handlePrevMonth={handlePrevMonth}
                              handleNextMonth={handleNextMonth}
                              currentDayNumberInMonth={currentDayNumberInMonth}/>
        </React.Fragment>
  );
}
export default App;
