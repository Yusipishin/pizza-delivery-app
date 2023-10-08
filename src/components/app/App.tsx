// import {lazy, Suspense} from 'react'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import '../../styles/style.scss'

import AppHeader from '../appHeader/AppHeader'
import HeroSection from '../heroSection/HeroSection'
import MenuSection from '../menuSection/MenuSection'
// ...
import AppFooter from '../appFooter/AppFooter'

const App = () => {
  return (
    <>
      <AppHeader/>
      <main className='main'>
        <HeroSection/>
        <MenuSection/>
        {/* ... */}
      </main>
      <AppFooter/>
    </>
  )
}

export default App