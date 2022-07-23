import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chicken from '../Pages/Chicken'
import Fish from '../Pages/Fish'
import Mutton from '../Pages/Mutton'
import ReadyToCook from '../Pages/ReadyToCook'
import Home from "../Components/Home"


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
