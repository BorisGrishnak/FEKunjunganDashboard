import React, {useState} from 'react'

import Header from '../partials/Header'
import Sidebar from '../partials/Sidebar'
import Banner from '../partials/Banner';
import CalendarCard01 from '../partials/calendar/CalendarCard01';

import {
  BasicCalendar,
  ControlCalendar,
  CustomizingCalendar,
  AdvancedCalendar,
  MyCalendar,
} from "../partials/kalender/Components";

export default function Calendar() {
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
            <div style={{height: "95vh"}}>

              <MyCalendar />

            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}