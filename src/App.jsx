
import './App.css'
import {Route , Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/Home Page/HomePage'
import BillyNumbers from './components/Billy numbers/BillyNumbers'
import FeltMeasurements from './components/Felt measurements/FeltMeasurements'
import PadsTransfer from './components/PadsTransfer/PadsTransfer'
import ScaleMeasurements from './components/Scale measurements/ScaleMeasurements'
import TorrentDiversion from './components/Torrent Diversion/TorrentDiversion'
import BillysShunt from './components/Billy\'s shunt/Billy\'sShunt'
import SideBar from './components/Side Bar/SideBar'


function App() {

  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/BillyNumbers' element={<BillyNumbers />} />
        <Route path='/FeltMeasurements' element={<FeltMeasurements />} />
        <Route path='/PadsTransfer' element={<PadsTransfer />} />
        <Route path='/ScaleMeasurements' element={<ScaleMeasurements />} />
        <Route path='/TorrentDiversion' element={<TorrentDiversion />} />
        <Route path='/BillysShunt' element={<BillysShunt />} />
      </Routes>
    </>
  )
}

export default App
