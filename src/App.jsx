// src/App.jsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import UserDashboard from "./pages/UserDashboard";
import EstimatorDashboard from "./pages/EstimatorDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/estimator-dashboard" element={<EstimatorDashboard />} />
      {/* optional: catch all */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
