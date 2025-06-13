import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyForm from "./Pages/Register";
import Login from "./Pages/Login";
import Verify from "./Pages/Verify";
import AdminDashboard from "./Dashboard/AdminDashboard";
import Paymentform from "./Pages/payments/Payment";
import History from "./Dashboard/History";
import PaystackForm from "./Pages/PaystackForm";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Logout from "./Pages/Logout";
import ProtectedRoute from "./ProtectedRoute"
// import GuestRoute from "./GuestRoute";
import Layout from "./Dashboard/UserDashboard";

{
  /* <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
<Route path="/register" element={<GuestRoute><MyForm /></GuestRoute>} /> */
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/register"
          element={
            // <GuestRoute>
              <MyForm />
            //</GuestRoute> 
          }
        />
        <Route
          path="/login"
          element={
              <Login />
          }
        />
        <Route
          path="/verify"
          element={
            // <GuestRoute>
              <Verify />
            // </GuestRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />

        {/* ✅ Protected User Route */}
        <Route
          path="/user"
          element={
           <ProtectedRoute>
            <Layout/>
           </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute role="user">
              <Paymentform />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute role="user">
              <History />
            </ProtectedRoute>
          }
        />

        <Route
          path="/paystack"
          element={
            <ProtectedRoute role="user">
              <PaystackForm />
            </ProtectedRoute>
          }
        />

        {/* ✅ Protected Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
