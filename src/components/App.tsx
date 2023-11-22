// import {lazy, Suspense} from 'react'
import { Route, Routes, useLocation } from "react-router-dom"

import '../styles/style.scss'

import AppHeader from './AppHeader'
import SectionHero from './SectionHero'
import AppFooter from './AppFooter'

import { MainPage, Page404, ContactPage } from "./pages"

const App = () => {
  return (
    <>
      <AppHeader/>
      { useLocation().pathname !== '/contact' ? <SectionHero/> : null }
      <main>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/404" element={<Page404/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </main>
      <AppFooter/>
    </>
  )
}

export default App