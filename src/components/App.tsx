// import {lazy, Suspense} from 'react'
import { useRef } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import '../styles/style.scss'

import AppHeader from './AppHeader'
import SectionHero from './SectionHero'
import AppFooter from './AppFooter'

import { MainPage, Page404, ContactPage, ActionsPage } from "./pages"

import headerLinks from "../static/headerList"
const pageLinks = headerLinks.map(item => item.path)

const App = () => {
  const path = useLocation().pathname
  const mainRef = useRef(null)
  return (
    <>
      <AppHeader mainRef={mainRef}/>
      <main ref={mainRef}>
        { path === '/' ? <SectionHero/> : null }
        <Routes>
          { pageLinks.includes(path) ? null : useLocation().pathname = '/404'}
          <Route path="/" element={<MainPage/>}/>
          <Route path="/404" element={<Page404/>}/>
          <Route path="/actions" element={<ActionsPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </main>
      <AppFooter/>
    </>
  )
}

export default App