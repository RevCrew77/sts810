import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components//STS810/Home/Home'
import FirstVariant from './components/STS810/FirstVariant/FirstVariant'
import SecondVariant from './components/STS810/Second Variant/SecondVariant'
import MainPage from './components/MainPage/MainPage'
import Home808 from './components/STS808/Home/Home808'
import OneLabel from './components/STS808/FirstVariant/OneLabel'
import Menu from './components/Menu'
import TwoLabels from './components/STS808/SecondVariant/TwoLabels'
import DosingMachines from './components/DosingMachines/DosingMachines'
// import BreadCrumbs from './components/BreadCrumbs'
import { TranslateProvider } from './components/TranslateContext'
import Home816 from './components/STS816/Home/Home816'
import OneLbl from './components/STS816/FirstVariant/OneLbl'
import TwoLbls from './components/STS816/SecondVariant/TwoLbls'

function App() {
  return (
    <TranslateProvider>
      <Router>
        <div className="App">
          {/* <BreadCrumbs /> */}
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Menu />} />
              <Route exact path="/labeling-machines" element={<MainPage />} />
              <Route exact path="/labeling-machines/STS808" element={<Home808 />} />
              <Route exact path="/labeling-machines/STS808/1-label" element={<OneLabel />} />
              <Route exact path="/labeling-machines/STS808/2-labels" element={<TwoLabels />} />
              <Route exact path="/labeling-machines/STS810" element={<Home />} />
              <Route exact path="/labeling-machines/STS810/1-label" element={<FirstVariant />} />
              <Route exact path="/labeling-machines/STS810/2-labels" element={<SecondVariant />} />
              <Route exact path="/labeling-machines/STS816" element={<Home816 />} />
              <Route exact path="/labeling-machines/STS816/1-label" element={<OneLbl />} />
              <Route exact path="/labeling-machines/STS816/2-labels" element={<TwoLbls />} />
              <Route exact path="/dosing-machines" element={<DosingMachines />} />
            </Routes>
          </div>

          <div className="footer">&copy; 2022 STSMachines</div>
        </div>
      </Router>
    </TranslateProvider>
  )
}

export default App
