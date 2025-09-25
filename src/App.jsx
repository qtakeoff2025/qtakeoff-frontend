import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
