import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: ['Tamu Hadir', 'Tamu Review', 'Tamu Tidak Review'],
    datasets: [
      {
        label: 'Jumlah',
        data: [
          60, 30, 10,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.amber[500],
          tailwindConfig().theme.colors.emerald[400],
          tailwindConfig().theme.colors.red[500],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.amber[600],
          tailwindConfig().theme.colors.emerald[500],
          tailwindConfig().theme.colors.red[700],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100 text-center">Fragmen Data Tamu</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
