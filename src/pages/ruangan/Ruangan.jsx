import React, {useState} from 'react'

import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
import Banner from '../../partials/Banner';
import RuanganCard02 from '../../partials/ruangan/RuanganCard02';
import ControlCard01 from '../../partials/ruangan/ControlCard01';

export default function Ruangan() {
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

              <ControlCard01 />

            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}