import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from '../../charts/BarChart03';
import LoadingSpinner from '../../components/LoadingSpinner';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard11() {

const [isi, setIsi] = useState([]);
const [smb, setSmb] = useState([]);
const [mb, setMb] = useState([]);
const [b, setB] = useState([]);
const [br, setBr] = useState([]);
const [sb, setSb] = useState([]);
const [showComponent, setShowComponent] = useState(false); 

  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setShowComponent(true); 
    }, 1000); 
 
    return () => clearTimeout(timeout); 
  }, []); 

useEffect(() => {
  const interval = setInterval(() => {
    const fetchData = () =>{
      axios.get('https://localhost:7157/api/Review').then(postData => {
      // reshaping the array
      const customHeadings = postData.data.map(item=>({
        "idReview": item.idReview,
        "idPeminjaman": item.idPeminjaman,
        "kenyamanan": item.kenyamanan,
        "fungsional": item.fungsional,
        "rating": item.rating,
        "saran": item.saran
      }))
      setIsi(customHeadings)
      const pe = customHeadings.filter((dt => dt.rating == 5))
      const p4 = customHeadings.filter((dt => dt.rating == 4))
      const p3 = customHeadings.filter((dt => dt.rating == 3))
      const p2 = customHeadings.filter((dt => dt.rating == 2))
      const p1 = customHeadings.filter((dt => dt.rating == 1))
      const sm = pe.length;
      const m = p4.length;
      const b = p3.length;
      const br = p2.length;
      const sb = p1.length;
      setSmb(sm)
      setMb(m)
      setB(b)
      setBr(br)
      setSb(sb)
      })
     }
     fetchData()
  }, 100);
  return () => clearInterval(interval);
   }, [])

   const jumRev = isi.map(dt => dt).length

  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: 'Sangat Buruk',
        data: [sb],
        backgroundColor: tailwindConfig().theme.colors.red[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Buruk',
        data: [br],
        backgroundColor: tailwindConfig().theme.colors.orange[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.orange[700],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Netral',
        data: [b],
        backgroundColor: tailwindConfig().theme.colors.yellow[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.yellow[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Memuaskan',
        data: [mb],
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Sangat Memuaskan',
        data: [smb],
        backgroundColor: tailwindConfig().theme.colors.cyan[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.cyan[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  function bChart() {
    if (showComponent == true) {
      return (
      <BarChart data={chartData} width={595} height={48} />
      )
    } else {
      return (
      <div className="text-center pt-14 pb-10">
        <LoadingSpinner />
      </div> 
      )
    }
  }

  function jums() {
    if (showComponent == true) {
      return (
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{jumRev}</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">Rating</div>
        </div>
      )
    }
  }

  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Rating Tamu</h2>
      </header>
      <div className="px-5 py-3">
        {jums()}
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        {bChart()}
      </div>
    </div>
  );
}

export default DashboardCard11;
