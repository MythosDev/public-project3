import { useState } from 'react'
import React from 'react';
import './App.css'

//import { Link } from 'reac-router-dom';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
