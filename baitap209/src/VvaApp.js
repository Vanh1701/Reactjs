import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import VvaNavBar from './components/VvaNavBar'
import VvaHome from './pages/VvaHome'
import VvaAbout from './pages/VvaAbout'
import VvaContact from './pages/VvaContact'
import VvaProduct from './pages/VvaProduct'
import VvaProductDetail from './pages/VvaProductDetail'
import VvaNotFound from './pages/VvaNotFound'

export default function VvaApp() {
  return (
    <div className='container border'>
        <h1>React Route - Demo [Vũ Việt Anh]</h1>
        <hr/>
        <BrowserRouter>
            <VvaNavBar />
            <Routes>
                <Route path='/' element={<VvaHome />} />
                <Route path='/about' element = {<VvaAbout />} />
                <Route path='/contact' element = {<VvaContact />} />

                {/* Nested route  */}
                <Route path='/products' element = {<VvaProduct />} >
                  <Route path=":id" element = {<VvaProductDetail />} />
                </Route>

                {/* 404 page  */}
                <Route path='*' element = {<VvaNotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}