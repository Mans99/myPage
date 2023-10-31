import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import NavBar from './pages/blocks/navBar'
import ErrorPage from './pages/errorPage';
import Individual from './pages/individual'

export default function app() {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path='/individual' element={<Individual/>} />
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}
