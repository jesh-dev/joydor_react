import { useState } from "react";
import { Nav } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Modal from "../Components/Modal";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // adding this below useNavigate make the const function to automatically use authentication 
  const [showModal, setShowModal] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  //function to capture user entry
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }

    if (!formData.password) {
      newErrors.password = "password is required";
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
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: formData.email.trim(),
        password: formData.password,
      });
      const verified = response.data.user.email_verified_at;
      if (verified === null) {
        console.log("Please verify your email");
        alert("Please verify your email");
      } else {
        if (response.status === 200 && response.data.success) {
          const user = response.data.user;
          const token = response.data.token;

          // Save to localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          setShowModal(true);

          // ✅ Set in AuthContext
          login(user);

          setTimeout(() => {
            // ✅ Navigate based on role
            if (user.role === "admin") {
              navigate("/admin");
            } else {
              navigate("/user");
            }
          }, 3000);
        }
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
      // setErrors(response.data.message);
    }
  };
  return (
    <>
      <Nav />
      <div className="mt-30 bg-white">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 rounded-xl shadow-xl shadow-black/30 "
        >
          <div className="font-bold text-3xl flex justify-center text-black uppercase ">
            Sign in
          </div>
          <div className="flex justify-center font-bold text-black">
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
                focus:bg-white focus:outline-blue-700 focus:shadow-outline ${
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
                    errors.password && "border-red-500 focus:outline-red-500"
                  }`}
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">{errors.password}</p>
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
          shadow-md active:scale-[1.05]
          "
            type="submit"
          >
            Login
          </button>
        </form>

        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <div className="flex flex-col backdrop-blur-md items-center space-y-3">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-xl font-semibold text-center">
              Login Successful!
            </h2>
            <p className="text-center text-sm">
              Redirecting to your dashboard...
            </p>
          </div>
        </Modal>
      </div>

      <Footer />
    </>
  );
};

export default Login;
