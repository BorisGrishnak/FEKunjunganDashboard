import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {

  const [isi, setIsi] = useState([]);

  useEffect(() => {
    const fetchData = () =>{
      axios.get('https://localhost:7286/api/Peminjaman').then(postData => {

     // reshaping the array
      const customHeadings = postData.data.map(item=>({
        "namaPIC": item.namaPIC,
        "email": item.email,
        "noHp": item.noHp,
      }))
      
     setIsi(customHeadings)
    //   console.log(customHeadings);
     })
    }
    fetchData()
  }, [])

  const jumlahTamu = isi.length;

  return (
    <div className="flex flex-col col-span-full sm:col-span-3 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
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
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Jumlah Tamu</h2>
        {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div> */}
        <div className="flex items-start">
        <div className="text-6xl font-bold text-slate-800 dark:text-slate-100 mr-2">{jumlahTamu}</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-blue-500 rounded-full">Orang</div>
          {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Orang</div> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
