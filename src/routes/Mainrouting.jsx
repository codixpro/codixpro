import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Demo from '../pages/Demo'

const Mainrouting = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/demo' element={<Demo/>} />
    </Routes>
  )
}

export default Mainrouting