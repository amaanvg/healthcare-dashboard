import React from 'react';
import calendarData from '../../data/calenderData';
import './CalenderView.css';

function CalendarView() {
  return (
    <div className="calendar-view">
      <h2>{calendarData.month}</h2>
      <div className="calendar-grid">
        {[...Array(30)].map((_, i) => {
          const day = i + 1;
          const dayAppointments = calendarData.appointmentSlots.find(slot => slot.day === day);
          return (
            <div className="calendar-day" key={day}>
              <strong>{day}</strong>
              {dayAppointments?.times.map((time, idx) => (
                <div className="time-slot" key={idx}>{time}</div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="appointment-details">
        {calendarData.appointmentDetails.map((appt, idx) => (
          <div className="appointment-card" key={idx}>
            <h4>{appt.title}</h4>
            <p>{appt.date} - {appt.time}</p>
            <span>{appt.doctor}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
