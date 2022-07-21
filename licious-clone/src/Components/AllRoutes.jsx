import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chicken from './Chicken'
import Fish from './Fish'
import Home from './Home'
import Mutton from './Mutton'
import ReadyToCook from './ReadyToCook'

export default function AllRoutes() {
  return (
    <div><Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/chicken" element={<Chicken/>}></Route>
    
     <Route path="/fish" element={<Fish/>}></Route>

     <Route path="/mutton" element={<Mutton/>}></Route>

     <Route path="/readytocook" element={<ReadyToCook/>}></Route>

     
    </Routes></div>
  )
}
