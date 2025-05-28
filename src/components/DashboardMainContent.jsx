import React from 'react';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import CalendarView from './CalenderView/CalenderView';
import UpcomingSchedule from './Upcomingschedule/UpcomingSchedule';
import ActivityFeed from './ActivityFeed/ActivityFeed';

function DashboardMainContent() {
  return (
    <div className="dashboard-main">
      <AnatomySection />
      <HealthStatusCards />
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </div>
  );
}

export default DashboardMainContent;