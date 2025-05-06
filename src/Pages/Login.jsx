import React, { useState } from "react";
import { Nav } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  //function to capture user entry
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "password is required";
    }else if (formData.password.trim()) {
      
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: formData.email.trim(),
        password: formData.password.trim(),
      });
      if (response.status === 201) {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      setErrors(error.response.data.errors);
    }
  }
  // };
  return (
    <>
      <Nav />
      <div className="mt-30">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 rounded shadow-md bg-gradient-to-r from-gray-300 to-orange-700"
        >
          <div className="font-bold text-3xl flex justify-center text-white uppercase ">
            Sign in
          </div>
          <div className="flex justify-center font-bold text-white">
            <p>Login to your Account</p>
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
              required
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
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
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                className={`shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
                  focus:bg-white focus:outline-blue-700 focus:shadow-outline${
                    errors.email && "border-red-500 focus:outline-red-500"
                  }`}
              />
              {errors.email && (
              <p className="mt-2 text-sm text-red-500">{errors.email}</p>
            )}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-600
               hover:text-blue-500 transition-colors cursor-pointer "
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <button
            className="bg-gradient-to-r from-yellow-500 
          to-orange-600 hover:bg-gradient-to-l hover:from-bg-orange-700 hover:to-bg-yellow-700
          text-white font-semibold py-2 px-4 rounded-lg
          transition-all delay-300 duration-300 transform hover:scale-[1.05] 
          focus:outline-none focus:shadow-outline
          shadow-md
          "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
