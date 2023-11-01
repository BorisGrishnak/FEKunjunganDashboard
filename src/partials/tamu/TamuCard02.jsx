import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-03.svg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function TamuCard02() {

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <div className="px-5 pt-5">
            <header className="flex justify-between items-start mb-2">
              {/* Icon */}
              <img src={Icon} width="32" height="32" alt="Icon 01" />
              {/* Menu button */}
              <EditMenu align="right" className="relative inline-flex">
                <li>
                  <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                    SESI 1
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                    SESI 2
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                    SESI 3
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">
                    Remove
                  </Link>
                </li>
              </EditMenu>
            </header>
            <h2 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-4">Jumlah Tamu Hari Ini</h2>
            {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div> */}
            <div className="flex items-start">
            <div className="text-6xl font-bold text-slate-800 dark:text-slate-100 mr-2">2</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">Ulasan</div>
              {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Orang</div> */}
            </div>
          </div>
        </div>
      );
    }

export default TamuCard02;