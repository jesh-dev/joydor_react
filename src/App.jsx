import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import MyForm from './Pages/Register';
import { Content } from './Pages/Product';
import Login from './Pages/Login';
import Verify from './Pages/Verify';
// import UserDashboard from './Dashboard/UserDashboard';



import AdminDashboard from './Dashboard/AdminDashboard';
// import Overview from './Dashboard/Overview';
import Paymentform from './Pages/payments/Payment';
import History from './Dashboard/History';
import Layout from './Dashboard/UserDashboard';
import PaystackForm from './Pages/PaystackForm';
// import PaymentSuccess from './Pages/PaymentSuccess';
import Contact from './Pages/Contact';
import About from './Pages/About';


const App = () => {
  return (
    <>
      

       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
                <Route path="/register" element={<MyForm/>} />
                <Route path="/product" element={<Content/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/verify" element={ <Verify/> } />
                <Route path="/user" element={ <Layout/> } />
                {/* <Route path='/overview' element={<Overview/>}/> */}
                <Route path='/payment' element={<Paymentform/>}/>
                <Route path='/history' element={<History/>}/>
                {/* <Route path='' element={}/> */}
        <Route path="/paystack" element={<PaystackForm />} />
        
        <Route path="/payment/success" element={<PaymentSuccess />} />
                <Route path="/admin" element={ <AdminDashboard/> } />
            </Routes>
          </BrowserRouter>

    </>
  )
}

export default App
