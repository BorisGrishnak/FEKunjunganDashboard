import React, { useState, useEffect } from 'react';
import Tooltip from '../../components/Tooltip';
import RealtimeChart from '../../charts/RealtimeChart';
import DatatableDashboard from '../../components/DatatableDashboard';

function DashboardCard05() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Tamu Hari Ini</h2>
        <Tooltip className="ml-2">
          <div className="text-xs text-center whitespace-nowrap">On Development</div>
        </Tooltip>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DatatableDashboard />
    </div>
  );
}

export default DashboardCard05;
