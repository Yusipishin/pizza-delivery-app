// import {lazy, Suspense} from 'react'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import '../styles/style.scss'

import AppHeader from './AppHeader'
import SectionHero from './SectionHero'
import SectionNovelty from './SectionNovelty'
import SectionMenu from './SectionMenu'
import SectionStocks from './SectionStocks'
import SectionMap from './SectionMap'
// ...
import AppFooter from './AppFooter'

const App = () => {
  return (
    <>
      <AppHeader/>
      <SectionHero/>
      <main className='main'>
        <SectionNovelty/>
        <SectionMenu/>
        <SectionStocks/>
        <SectionMap/>
        {/* ... */}
      </main>
      <AppFooter/>
    </>
  )
}

export default App