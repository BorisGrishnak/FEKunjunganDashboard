import React from 'react';
import TableRuangHarmonize from '../../components/TableRuangHarmonize';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function RuanganCardHarmonize02() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 md:col-span-12 xl:col-span-12 pb-7 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
        </header>
        {/* <h2 className="text-lg text-center font-semibold text-slate-800 dark:text-slate-100 mb-4">Denah Letak Ruangan</h2> */}
        {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div> */}
        {/* <div className="flex"> */}
          {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Orang</div> */}
          <TableRuangHarmonize />
        {/* </div> */}
      </div>
    </div>
  );
}

export default RuanganCardHarmonize02;