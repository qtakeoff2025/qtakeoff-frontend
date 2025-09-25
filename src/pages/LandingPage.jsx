// src/pages/LandingPage.jsx
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome to QTakeoff
        </h1>
        <p className="text-gray-600 mb-8">
          Manage your construction projects efficiently. Please register or
          login to continue.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/register")}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
