import React from 'react';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <h4>{title}</h4>
      <p>{time}</p>
    </div>
  );
}

export default SimpleAppointmentCard;
