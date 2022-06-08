import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages'

import { useStateContext } from './contexts/ContextProvider'

import './App.css'

const App = () => {

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    // if the current mode is dark, then we set to dark. Otherwise, we set it to light (which is an empty string).
    <div className={currentMode === 'Dark' ? 'dark' : '' }> 
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='Top'>
              <button 
                type="button" 
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" 
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }} >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* check if menu is active. If so, render the sidebar. */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}


          {/* Navigation Bar */}
        
          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            
            ${activeMenu ? 'md:ml-72' : 'flex-2'}` //if the active menu is open, we have some margin left. Otherwise, we have flex-2. On dark mode, we change some things.
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

            <div>

              {/* Theme Settings */}
              {/* We only show theme settings if its currently true */}
              {themeSettings && <ThemeSettings />} 

              {/* Routing */}
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={(<Ecommerce />)} />
                <Route path='/ecommerce' element={(<Ecommerce />)} />

                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App