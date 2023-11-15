import React, {useState} from 'react'

import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
import Banner from '../../partials/Banner';
import RuanganCardInspiring01 from '../../partials/ruangan/RuanganCardInspiring01';
import RuanganCardInspiring02 from '../../partials/ruangan/RuanganCardInspiring02';

export default function Inspiring() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

                <RuanganCardInspiring01 />

                <RuanganCardInspiring02 />

            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}