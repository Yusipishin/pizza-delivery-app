// import {lazy, Suspense} from 'react'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import '../../styles/style.scss'

import AppHeader from '../appHeader/AppHeader'
import SectionHero from '../sectionHero/SectionHero'
import SectionNovelty from '../sectionNovelty/SectionNovelty'
import SectionMenu from '../sectionMenu/SectionMenu'
// ...
import AppFooter from '../appFooter/AppFooter'

const App = () => {
  return (
    <>
      <AppHeader/>
      <SectionHero/>
      <main className='main'>
        <div className="main__bg"></div>
        <SectionNovelty/>
        <SectionMenu/>
        {/* ... */}
      </main>
      <AppFooter/>
    </>
  )
}

export default App