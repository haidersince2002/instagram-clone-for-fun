import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import InstagramMain from "./pages/InstagramMain";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/home" element={<Navigate to="/" />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<InstagramMain />} />
        <Route path="*" element={<InstagramMain />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
