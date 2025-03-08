import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [inputInfo, setInputInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const copyInputInfo = { ...inputInfo, [name]: value };
    setInputInfo(copyInputInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = inputInfo;

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/auth/signup`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputInfo),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setInputInfo({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Sign up</h1>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                value={inputInfo.name}
                placeholder="Enter your name"
                name="name"
                autoFocus
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                value={inputInfo.email}
                placeholder="Enter your email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                value={inputInfo.password}
                placeholder="Enter your password"
                name="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Sign up
            </button>
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Log in
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
