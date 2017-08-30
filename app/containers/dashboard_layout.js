import React from 'react';

import DashboardHeader from '../components/dashboard_header';
import DashboardGrid from '../components/dashboard_grid';

export default class DashboardLayout extends React.Component {
  render() {
    return (
      <div className="dashboard-layout">
        <DashboardHeader />
        <DashboardGrid />
      </div>
    );
  }
}
