import React, {useState} from 'react'

import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
import Banner from '../../partials/Banner';
import DetailPeminjamanCard01 from '../../partials/peminjaman/DetailPeminjamanCard01';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function DetailPeminjaman() {
  const history = useNavigate();
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

              <div className='back-review'>
                <button onClick={() => history(-1)}>
                  <FaArrowCircleLeft size={30} /> {/* Ganti 30 dengan ukuran yang Anda inginkan */}
                </button>
              </div>

              <DetailPeminjamanCard01 />

            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}