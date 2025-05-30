import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import MyForm from './Pages/Register';
import { Content } from './Pages/Product';
import Login from './Pages/Login';
import Verify from './Pages/Verify';
import UserDashboard from './Dashboard/UserDashboard';
import AdminDashboard from './Dashboard/AdminDashboard';


const App = () => {
  return (
    <>
      

       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
                <Route path="/register" element={<MyForm/>} />
                <Route path="/product" element={<Content/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/verify" element={ <Verify/> } />
                <Route path="/admin" element={ <AdminDashboard/> } />
                <Route path="/user" element={ <UserDashboard/> } />
            </Routes>
          </BrowserRouter>

    </>
  )
}

export default App
