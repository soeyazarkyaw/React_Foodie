import React from 'react'
import './index.css'
import Nav from './Nav'
import Meals from './Meals'
import Detail from './Detail'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
      <div className='container relative justify-center items-center mx-auto'>
        <Nav/>
        <div>
        <Routes>
          <Route path="/" element={<Meals/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
        </div>
        
      </div>
  )
}

export default App