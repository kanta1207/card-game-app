import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GamePage } from './components/pages/GamePage'
import { Home } from './components/pages/Home'

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gamePage' element={<GamePage/>}/>
    </Routes>
  )
}
