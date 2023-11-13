import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import axios from 'axios';
import DoughnutChart from '../../charts/DoughnutChart';
import LoadingSpinner from '../../components/LoadingSpinner';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const [peminjaman, setPeminjaman] = useState([]);
  const [review, setReview] = useState([]);
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
      axios.get('https://localhost:7286/api/Peminjaman').then(postData => {
      // reshaping the array
      const customHeadings = postData.data.map(item=>({
         "idPeminjaman": item.idPeminjaman,
         "idRuangan": item.idRuangan,
         "ticket": item.ticket,
         "namaPIC": item.namaPIC,
         "email": item.email,
         "noHp": item.noHp,
         "jumlahTamu": item.jumlahTamu,
         "startTime": item.startTime,
         "endTime": item.endTime,
         "keperluan": item.keperluan,
         "detailKeperluan": item.detailKeperluan,
         "status": item.status,
      }))
      setPeminjaman(customHeadings)
      })
     }
     fetchData()
  }, 500);
  return () => clearInterval(interval);
  }, [])

useEffect(() => {
  const fetchData = () =>{
    axios.get('https://localhost:7286/api/Review').then(postData => {
    
    // reshaping the array
    const customHeadings = postData.data.map(item=>({
        "idReview": item.idReview,
        "idPeminjaman": item.idPeminjaman,
        "ticket": item.ticket,
        "namaPIC": item.namaPIC,
        "kenyamanan": item.kenyamanan,
        "fungsional": item.fungsional,
        "rating": item.rating,
        "saran": item.saran
    }))
    setReview(customHeadings)
     // console.log(customHeadings);
    })
  }
  fetchData()
}, [])

  const tamuHadir = peminjaman.map((pm) => pm).length;
  const idP = peminjaman.map((pm) => pm.idPeminjaman);
  const idR = review.map((rev) => rev.idPeminjaman);
  const tamuReview = idR.filter((x) => x = idP).length
  const tamuTidakReview = tamuHadir - tamuReview;

  const chartData = {
    labels: ['Tamu Review', 'Tamu Tidak Review'],
    datasets: [
      {
        label: 'Jumlah',
        data: [
          tamuReview, tamuTidakReview,
        ],
        backgroundColor: [
          // tailwindConfig().theme.colors.amber[500],
          tailwindConfig().theme.colors.emerald[400],
          tailwindConfig().theme.colors.red[500],
        ],
        hoverBackgroundColor: [
          // tailwindConfig().theme.colors.amber[600],
          tailwindConfig().theme.colors.emerald[500],
          tailwindConfig().theme.colors.red[700],
        ],
        borderWidth: 0,
      },
    ],
  };

  function bChart() {
    if (showComponent == true) {
      return <DoughnutChart data={chartData} width={389} height={260} />
    } else {
      return (
      <div className="text-center pt-14 pb-10">
        <LoadingSpinner />
      </div> 
      )
    }
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100 text-center">Fragmen Data Tamu</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {bChart()}
    </div>
  );
}

export default DashboardCard06;
