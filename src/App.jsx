import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import MyForm from './Pages/Register';
import { Content } from './Pages/Product';
import Login from './Pages/Login';
import Verify from './Pages/Verify';
// import UserDashboard from './Dashboard/UserDashboard';



import AdminDashboard from './Dashboard/AdminDashboard';
import Overview from './Dashboard/Overview';
import Payment from './Dashboard/Payment';
import History from './Dashboard/History';
import Layout from './Dashboard/UserDashboard';
// import PaystackForm from './Pages/PaystackForm';
// import PaymentSuccess from './Pages/PaymentSuccess';


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
                <Route path="/user" element={ <Layout/> } />
                <Route path='/overview' element={<Overview/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/history' element={<History/>}/>
                {/* <Route path='' element={}/> */}
        {/* <Route path="/paystack" element={<PaystackForm />} /> */}
        {/* <Route path="/payment/success" element={<PaymentSuccess />} /> */}
            </Routes>
          </BrowserRouter>

    </>
  )
}

export default App
