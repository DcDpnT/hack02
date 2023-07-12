import  { useState } from 'react';
import './Calendar.scss';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleYearChange = (event) => {
      const selectedYear = parseInt(event.target.value);
      const selectedMonth = selectedDate ? selectedDate.getMonth() : new Date().getMonth();
      const selectedDay = selectedDate ? selectedDate.getDate() : 1;
      const newSelectedDate = new Date(selectedYear, selectedMonth, selectedDay);
      setSelectedDate(newSelectedDate);
    };
  
    const handleMonthChange = (event) => {
      const selectedMonth = parseInt(event.target.value);
      const selectedYear = selectedDate ? selectedDate.getFullYear() : new Date().getFullYear();
      const selectedDay = selectedDate ? selectedDate.getDate() : 1;
      const newSelectedDate = new Date(selectedYear, selectedMonth, selectedDay);
      setSelectedDate(newSelectedDate);
    };
  
    const handleDayClick = (day) => {
      const selectedMonth = selectedDate ? selectedDate.getMonth() : new Date().getMonth();
      const selectedYear = selectedDate ? selectedDate.getFullYear() : new Date().getFullYear();
      const newSelectedDate = new Date(selectedYear, selectedMonth, day);
      setSelectedDate(newSelectedDate);
    };
  
    const generateYearOptions = () => {
      const currentYear = new Date().getFullYear();
      const years = [];
  
      for (let year = currentYear; year <= currentYear + 10; year++) {
        years.push(
          <option key={year} value={year}>{year}</option>
        );
      }
  
      return years;
    };
  
    const generateMonthOptions = () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
  
      return months
        .map((month, index) => {
          if (selectedDate && selectedDate.getFullYear() === currentYear && index < currentMonth) {
            return null;
          }
          return (
            <option key={index} value={index}>{month}</option>
          );
        })
        .filter(Boolean);
    };
  
    const generateDays = () => {
      const selectedMonth = selectedDate ? selectedDate.getMonth() : new Date().getMonth();
      const selectedYear = selectedDate ? selectedDate.getFullYear() : new Date().getFullYear();
      const totalDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate();
  
      const days = [];
  
      for (let i = 1; i <= totalDays; i++) {
        if (
          selectedYear > currentYear ||
          (selectedYear === currentYear && selectedMonth > currentMonth) ||
          (selectedYear === currentYear && selectedMonth === currentMonth && i >= currentDay)
        ) {
          days.push(
            <div
              key={i}
              className={`day ${selectedDate && selectedDate.getDate() === i ? 'selected' : ''}`}
              onClick={() => handleDayClick(i)}
            >
              {i}
            </div>
          );
        }
      }
  
      return days;
    };
  
    return (
      <div className="calendar">
        <div className="year-selector">
          <select onChange={handleYearChange} value={selectedDate ? selectedDate.getFullYear() : new Date().getFullYear()}>
            {generateYearOptions()}
          </select>
        </div>
        <div className="month-selector">
          <select onChange={handleMonthChange} value={selectedDate ? selectedDate.getMonth() : new Date().getMonth()}>
            {generateMonthOptions()}
          </select>
        </div>
        <div className="days-container">{generateDays()}</div>
      </div>
    );
  };
  
  export default Calendar;