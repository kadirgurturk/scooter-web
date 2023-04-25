import { useState } from 'react'
import {About} from "./component/pages/About"
import './css/App.css'
import { Carrer } from './component/pages/Carrer'
import { Location } from './component/pages/Location'
import { Home } from './component/pages/Home'
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="carrer" element={<Carrer/>}/>
        <Route path="location" element={<Location/>}/>
      </Routes>

    </div>
  )
}

export default App
