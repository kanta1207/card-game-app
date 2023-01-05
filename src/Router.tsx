import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BlackJack } from './components/pages/BlackJack'
import { Home } from './components/pages/Home'

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blackJack' element={<BlackJack/>}/>
    </Routes>
  )
}
