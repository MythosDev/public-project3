// import reactLogo from '../assets/react.svg'
// import viteLogo from '.../public/vite.svg'
import '../App.css'

import React from 'react';
import { useState } from 'react'
import SearchBar from '../components/SearchBar';
import TagSystem from '../components/TagSystem';
import InfiniteScrollFeed from '../components/InfiniteScroll';
import PinterestGrid from "../components/PinterestGrid";
import Sidebar from '../components/SideBar';
import BottomBar from '../components/BottomBar';
import { Link } from 'react-router-dom';

export default function () {
  const [count, setCount] = useState(0)

  const handleSearch = (term) => {
    console.log('Search for:', term);
    // You can call an API or filter data here
  };

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}> {/* used to offset for sidebar */}
        <Link to="/Areus">Areus</Link>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <h1>Examples</h1>
        <SearchBar onSearch={handleSearch} />
        <TagSystem />
        {/* 
        <InfiniteScrollFeed /> 
        <PinterestGrid />
        */}
        <BottomBar/>
      </div>
    </>
  )
}

// export default App
