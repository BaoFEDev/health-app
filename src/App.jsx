import { Route, Routes } from 'react-router'
import './App.css'
import MenuView from './features/Menu/pages/ MenuView'
import Record from './features/Record/pages/RecordView'
import Recommended from './features/Recommended/pages/RecommendedView'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MenuView />} />
        <Route path='/record' element={<Record />} />
        <Route path='/recommended' element={<Recommended />} />
        <Route />
      </Routes>
    </>
  )
}

export default App
