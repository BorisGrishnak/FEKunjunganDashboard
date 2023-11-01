import React from 'react';
import BarChart from '../../charts/BarChart01';
import moment from 'moment/moment';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const mingguLalu = moment().subtract(7, 'days').format('DD-MM-YY')
  const enamLalu = moment().subtract(6, 'days').format('DD-MM-YY')
  const limaLalu = moment().subtract(5, 'days').format('DD-MM-YY')
  const empatLalu = moment().subtract(4, 'days').format('DD-MM-YY')
  const tigaLalu = moment().subtract(3, 'days').format('DD-MM-YY')
  const duaLalu = moment().subtract(2, 'days').format('DD-MM-YY')
  const kemarin = moment().subtract(1, 'days').format('DD-MM-YY')

  const chartData = {
    labels: [
      mingguLalu, enamLalu, limaLalu, empatLalu, tigaLalu, duaLalu, kemarin
    ],
    datasets: [
      // Blue bars
      {
        label: 'Indirect',
        data: [
          70, 0, 0, 50, 57, 65, 76
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100 text-center">Jumlah Tamu Dalam Seminggu Terakhir</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
