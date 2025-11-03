import { Outlet, Route, Routes } from 'react-router'
import MenuView from './features/Menu/pages/ MenuView'
import Record from './features/Record/pages/RecordView'
import Recommended from './features/Recommended/pages/RecommendedView'
import { Footer, Header } from './assets/components'

function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col scrollbar-hide">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MenuView />} />
          <Route path='/record' element={<Record />} />
          <Route path='/recommended' element={<Recommended />} />
        </Route>
        <Route />
      </Routes>
    </>
  )
}

export default App
