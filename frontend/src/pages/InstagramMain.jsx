import React, { useState } from "react";

const InstagramMain = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [inputInfo, setInputInfo] = useState({
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

    const { email, password } = inputInfo;

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      const url = `${import.meta.env.BACKEND_URL}/api/auth/login`;

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
          email: "",
          password: "",
        });
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex mt-10 flex-col md:flex-row items-center justify-center w-full max-w-4xl flex-grow">
        {/* Left section - Phone mockup */}
        <div className="hidden md:flex md:justify-center md:w-1/2">
          <img src="/phones.png" alt="Phone frame" className="w-80 h-auto" />
        </div>

        {/* Right section - Login form */}
        <div className="w-full max-w-sm md:w-1/2">
          <div className="bg-black border border-gray-700 rounded p-8 mb-4">
            {/* Instagram logo */}
            <div className="flex justify-center mb-8">
              <h1 className="text-4xl font-semibold font-serif text-white">
                Instagram
              </h1>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  className="w-full bg-gray-900 border border-gray-700 rounded text-sm p-3 text-white"
                  placeholder="Phone number, username, or email"
                  value={inputInfo.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-gray-900 border border-gray-700 rounded text-sm p-3 text-white"
                  placeholder="Password"
                  name="password"
                  value={inputInfo.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-xs"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded font-semibold mb-4"
              >
                Log in
              </button>
            </form>

            <div className="flex items-center justify-center my-4">
              <div className="border-t border-gray-700 flex-grow"></div>
              <div className="mx-4 text-gray-400 font-semibold text-sm">OR</div>
              <div className="border-t border-gray-700 flex-grow"></div>
            </div>

            <div className="flex justify-center mb-4">
              <button className="flex items-center text-blue-500 font-semibold">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
                Log in with Facebook
              </button>
            </div>

            <div className="text-center">
              <a href="#" className="text-blue-500 text-sm">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="bg-black border border-gray-700 rounded p-6 text-center mb-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 font-semibold">
                Sign up
              </a>
            </p>
          </div>

          <div className="text-center mb-4">
            <p className="text-sm mb-4">Get the app.</p>
            <div className="flex justify-center space-x-2">
              <a href="#" className="block">
                <img
                  src="/googlestore.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="/applestore.png"
                  alt="Get it from Microsoft"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full max-w-4xl text-gray-400 text-xs text-center py-6">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Press</a>
          <a href="#">API</a>
          <a href="#">Jobs</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Language</a>
          <a href="#">Meta Verified</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Instagram from Meta</p>
      </footer>
    </div>
  );
};

export default InstagramMain;
