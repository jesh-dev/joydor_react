import { useState } from "react";
import { Nav } from "../Components/Navbar";
import axios from "axios";
import { Footer } from "../Components/Footer";
import { useNavigate } from 'react-router-dom';

function Verify() {
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Function to Capture user entry
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }

    if (!formData.code.trim()) {
      newErrors.code = "code is required";
    } else if (
       !/^(?=.*[0-9])[0-9]{6,6}$/.test(
        formData.code
      )
    ) {
      newErrors.code = "Unsupported code Syntax";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/verify", {
        email: formData.email.trim(),
        code: formData.code.trim(),
      });
      if (response.status === 200) {
        alert(response.data.message);
        console.log(response);
      }if (response.data.success === true) {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      // setErrors(error.response.data.error);
    }
  };
  return (
    <>
      <Nav />
      <div className="mt-30">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 rounded shadow-md bg-gradient-to-r from-gray-400 to-violet-700"
        >
          <div className="font-bold text-3xl flex justify-center text-white uppercase ">
             Verify Your Account
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email address"
              onChange={handleChange}
              value={formData.email}
              className={`shadow appearance-none border rounded 
                w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
                focus:bg-white focus:outline-blue-700 focus:shadow-outline${
                  errors.email && "border-red-500 focus:outline-red-500"
                }`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="tel"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Code:
            </label>
            <input
              type="text"
              id="code"
              name="code"
              placeholder="Enter 6-Digit code sent to your email address"
              onChange={handleChange}
              value={formData.code}
              className={`shadow appearance-none border rounded 
                w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
                focus:bg-white focus:outline-blue-700 focus:shadow-outline${
                  errors.code && "border-red-500 focus:outline-red-500"
                }`}
            />
            {errors.code && (
              <p className="mt-2 text-sm text-red-500">{errors.code}</p>
            )}
          </div>
            {/* <input type="number" name="" id="" /> */}
          <button
            className="bg-gradient-to-r from-blue-500 
            to-violet-600 hover:bg-gradient-to-l hover:from-bg-violet-700 hover:to-bg-blue-700
            text-white font-semibold py-2 px-4 rounded-lg
            transition-all duration-200 transform hover:scale-[1.02] 
            focus:outline-none focus:shadow-outline
            shadow-md
            "
            type="submit"
          >
            Verify
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Verify;
