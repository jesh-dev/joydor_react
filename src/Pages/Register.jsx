import { useState } from "react";
import { Nav } from "../Components/Navbar";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Footer } from "../Components/Footer";

function MyForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
    // gender: "",
    // role: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to Capture user entry
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) {
      newErrors.firstname = "firstname is required";
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = "lastname is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "phone number is required";
    } else if (
      /^0[789][01][0-9]\d{8,}$/.test(
        formData.phone_number
      )
    ) {
      newErrors.phone_number = "Unsupported Phone Syntax";
    }

    if (!formData.password.trim()) {
      newErrors.password = "password is required";
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password = "Unsupported Password Syntax";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.password = "password does not match";
      newErrors.confirmPassword = "password does not match";
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
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        firstname: formData.firstname.trim(),
        lastname: formData.lastname.trim(),
        email: formData.email.trim(),
        phone_number: formData.phone_number.trim(),
        password: formData.password.trim(),
        role: formData.role,
        gender: formData.gender,
      });
      if (response.status === 201) {
        alert(response.data.message);
      }else if (response.success == true) {
        history.push('/verify')
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      setErrors(error.response.data.errors);
      if (reponse.success == false) {
        return 'please verify your email Address'
      }
      
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
            Sign Up
          </div>

          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Firstname:
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.firstname}
              className={`shadow appearance-none border rounded 
                w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
                 focus:bg-white focus:outline-blue-700  focus:shadow-outline${
                   errors.firstname && "border-red-500 focus:outline-red-500"
                 }`}
            />
            {errors.firstname && (
              <p className="mt-2 text-sm text-red-500">{errors.firstname}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Lastname:
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.lastname}
              className={`shadow appearance-none border rounded 
                w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
                focus:bg-white focus:outline-blue-700 focus:shadow-outline${
                  errors.lastname && "border-red-500 focus:outline-red-500"
                }`}
            />
            {errors.lastname && (
              <p className="mt-2 text-sm text-red-500">{errors.lastname}</p>
            )}
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
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="Enter your phone number"
              onChange={handleChange}
              value={formData.phone_number}
              className={`shadow appearance-none border rounded 
                w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
                focus:bg-white focus:outline-blue-700 focus:shadow-outline${
                  errors.phone_number && "border-red-500 focus:outline-red-500"
                }`}
            />
            {errors.phone_number && (
              <p className="mt-2 text-sm text-red-500">{errors.phone_number}</p>
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
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Your password"
                onChange={handleChange}
                value={formData.password}
                className={`shadow appearance-none border rounded 
                w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
                focus:bg-white focus:outline-blue-700 focus:shadow-outline${
                  errors.password && "border-red-500 focus:outline-red-500"
                }`}
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">{errors.password}</p>
              )}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute hover:text-blue-600 right-3 top-3.5 
              cursor-pointer"
              >
                {" "}
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={formData.confirmPassword}
                className={`shadow appearance-none border rounded 
                w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
                 focus:bg-white focus:outline-blue-700 focus:shadow-outline${
                   errors.confirmPassword &&
                   "border-red-500 focus:outline-red-500"
                 }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3.5 tex-black
                 hover:text-violet-900  transition-colors cursor-pointer"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* gender */}
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="shadow appearance-none border rounded 
            w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
            focus:bg-white focus:outline-blue-700 focus:shadow-outline"
            >
              <option value="">--Select Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/*<div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
              onChange={handleChange}
                
            >
              Gender
             </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value={formData.gender}
                className="mr-2"
              />
              <label htmlFor="male" className="mr-4">
                Male
              </label>

              <input
                type="radio"
                id="female"
                name="gender"
                value={formData.gender}
                className="mr-2"
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="other"
                name="gender"
                value={formData.gender}
                className="ml-4 mr-2"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div> */}

          {/* Role */}

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Role:
            </label>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={handleChange}
              className="shadow appearance-none border rounded 
            w-full py-2 px-3 text-gray-700 leading-tight bg-white/50
             focus:bg-white focus:outline-blue-700 focus:shadow-outline"
            >
              <option value="">--Select Role--</option>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          {/* <div className="mb-4">
            <label
              onChange={handleChange}
                value={formData.role}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Role
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="User"
                name="role"
                value="user"
                className="mr-2"
              />
              <label htmlFor="user" className="mr-4">
                User
              </label>

              <input
                type="radio"
                id="vendor"
                name="role"
                value="vendor"
                className="mr-2"
              />
              <label htmlFor="vendor">Vendor</label>
            </div>
          </div> */}

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
            Create Account
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default MyForm;
