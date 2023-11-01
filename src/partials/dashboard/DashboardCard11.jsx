import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard11() {

  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: 'Sangat Buruk',
        data: [5],
        backgroundColor: tailwindConfig().theme.colors.red[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Buruk',
        data: [10],
        backgroundColor: tailwindConfig().theme.colors.orange[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.orange[700],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Netral',
        data: [81],
        backgroundColor: tailwindConfig().theme.colors.yellow[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.yellow[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Memuaskan',
        data: [65],
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Sangat Memuaskan',
        data: [72],
        backgroundColor: tailwindConfig().theme.colors.cyan[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.cyan[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Rating Tamu</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">449</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">Rating</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={48} />
      </div>
    </div>
  );
}

export default DashboardCard11;
