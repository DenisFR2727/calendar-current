import React from 'react'
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import "./style.css";

export default function DatePickerView({
    currentYear,
    currentMonthView,
    currentDayName,
    dayCurrentInWeek,
    currentHours,
    currentMinutes,
    handleNextMonth,
    handlePrevMonth,
    currentDayNumberInMonth}) {
    
  return (
    <div className="calendar">
        <div className='current-info-calendar'>
            <div>
            <h1>Year: {currentYear}</h1>
            <hr />
            <h2>
                    Month:{' '}
                {currentMonthView}
            </h2>
            <div className="navigation-buttons">
                <div className='prev-month-cicle'>
                   <GrCaretPrevious className='prev-month' onClick={handlePrevMonth}/>
                </div>
                <span>Prev</span>
                <span>Next</span>
                <div className='next-month-cicle'>
                   <GrCaretNext  className='next-month' onClick={handleNextMonth}/>
                </div> 
            </div>
            <h2 className='day'>
                Day: <span>{currentDayName}</span> <span>{currentDayNumberInMonth}</span>
            </h2>
            <h2 className='hours'>
                Time: {`${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`}
            </h2>
            </div>
        </div>
           <div className='day_names'>
              {dayCurrentInWeek} 
           </div>
        
    </div>
  )
}
