import { useState } from 'react'
import React from 'react';
// import './App.css'

//import { Link } from 'reac-router-dom';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
// import './Global.module.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contacts from './pages/Contacts'
import About from './pages/About'
import NoPage from './pages/NoPage'
import Test from './pages/Test'
import Areus from './pages/Areus';
import Resume from './pages/Resume';
import Statistica from './pages/Statistica';
import NewsPage from './pages/NewsPage';
import EarthPage from './pages/EarthPage';
import EightiesPage from './pages/EightiesPage';
import AnatomyPage from './pages/AnatomyPage';
import Simple_mobile from './simple_mobile/SM_Page';
import RetroGamePage from './pages/RetroGamePage';
import TiktokClone from './pages/TiktokClone';
import MoviePage from './pages/MoviePage';
import PropertyPage from './pages/PropertySite/PropertyPage';
import OrganizationPage from './pages/ActivistSite/OrganizationPage';
import VPN from './pages/VPN/VPNPage';
import SimpleNewSite from './pages/SimpleNewsSite';
import PokiToki from './pages/PokiToki';
import Arcade from './pages/Arcade/Arcade';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='*' element={<NoPage/>}/>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Portfolio' element={<Portfolio/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Areus' element={<Areus/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/Test' element={<Test/>}/>
          <Route path='/Statistica' element={<Statistica/>}/>
          <Route path='/News' element={<NewsPage/>}/>
          <Route path='/Earth' element={<EarthPage/>}/>
          <Route path='/Man' element={<AnatomyPage/>}/>
          <Route path='/Eighties' element={<EightiesPage/>}/>
          <Route path='/SM' element={<Simple_mobile/>}/>
          <Route path='/Retro' element={<RetroGamePage/>}/>
          <Route path='/Tiktok' element={<TiktokClone/>}/>
          <Route path='/Movies' element={<MoviePage/>}/>
          <Route path='/Property' element={<PropertyPage/>}/>
          <Route path='/Org' element={<OrganizationPage/>}/>
          <Route path='/VPN' element={<VPN />}/>
          <Route path='/SimpleNews' element={<SimpleNewSite />}/>
          <Route path='/PokiToki' element={<PokiToki />}/>
          <Route path='/Arcade' element={<Arcade/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
