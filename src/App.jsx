import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import MyForm from './Pages/Register';
import { Content } from './Pages/Product';
import Login from './Pages/Login';


const App = () => {
  return (
    <>
      

       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
                <Route path="/register" element={<MyForm/>} />
                <Route path="/product" element={<Content/>} />
                <Route path="/login" element={<Login/>} />
                {/* <Route path="/about" element={} />
                <Route path="/contact" element={} /> */}
                {/* <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} /> */}
              {/* </Route> */}
            </Routes>
          </BrowserRouter>

    </>
  )
}

export default App
