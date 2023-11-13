import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Collaboration from './pages/ruangan/Collaboration';
import Ruangan from './pages/ruangan/Ruangan'
import Tamu from './pages/Tamu'
import Ulasan from './pages/Ulasan'
import Peminjaman from './pages/Peminjaman';
import DetailPeminjaman from './pages/peminjaman/DetailPeminjaman';
import Review from './pages/Review';
import DetailReview from './pages/DetailReview';
import Calendar from './pages/Calendar';
import Report from './pages/Report';
import { ThemeProvider } from "@material-tailwind/react";

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <div style={{ height: "95vh" }}>
      <ThemeProvider>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/ruangan/collaboration" element={<Collaboration />} />
        <Route exact path="/ruangan" element={<Ruangan />} />
        <Route exact path="/tamu" element={<Tamu />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/ulasan" element={<Ulasan />} />
        <Route exact path="/peminjaman" element={<Peminjaman />} />
        <Route exact path="/detailpeminjaman" element={<DetailPeminjaman />} />
        <Route exact path="/review" element={<Review />} />
        <Route exact path="/detailreview" element={<DetailReview />} />
        <Route exact path="/report" element={<Report />} />
      </Routes> 
      </ThemeProvider>
    </div>
  );
}

export default App;
