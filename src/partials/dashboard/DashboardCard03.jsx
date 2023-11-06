import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-03.svg';
import EditMenu from '../../components/DropdownEditMenu';
import axios from 'axios';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard03() {

const [isi, setIsi] = useState([]);

useEffect(() => {
    const interval = setInterval(() => {
    const fetchData = () =>{
        axios.get('https://localhost:7286/api/Review').then(postData => {

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
        })
       }
       fetchData()
    }, 500);
    return () => clearInterval(interval);
     }, [])

  const jumlahReview = isi.length;

  return (
    <div className="flex flex-col col-span-full sm:col-span-3 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 03" />
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                Option 1
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                Option 2
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Jumlah Review</h2>        
        <div className="flex items-start">
          <div className="text-6xl font-bold text-slate-800 dark:text-slate-100 mr-2">{jumlahReview}</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">Review</div>
        {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Ulasan</div> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard03;
