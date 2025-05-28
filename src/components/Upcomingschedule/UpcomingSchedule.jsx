import React from 'react';
import SimpleAppointmentCard from '../SimpleAppointmentCard';
import './UpcomingSchedule.css';

const upcomingData = {
  Thursday: [
    { title: "Cardiologist", time: "10:00 AM" },
    { title: "Neurologist", time: "2:00 PM" }
  ],
  Saturday: [
    { title: "Ophthalmologist", time: "11:00 AM" }
  ]
};

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      {Object.keys(upcomingData).map((day, idx) => (
        <div key={idx}>
          <h3>On {day}</h3>
          {upcomingData[day].map((appt, i) => (
            <SimpleAppointmentCard key={i} title={appt.title} time={appt.time} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
