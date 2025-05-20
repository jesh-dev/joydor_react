import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import MyForm from './Pages/Register';
import { Content } from './Pages/Product';
import Login from './Pages/Login';
import Verify from './Pages/Verify';


const App = () => {
  return (
    <>
      

       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
                <Route path="/register" element={<MyForm/>} />
                <Route path="/product" element={<Content/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/verify" element={<Verify/>} />
            </Routes>
          </BrowserRouter>

    </>
  )
}

export default App
