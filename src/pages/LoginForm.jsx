// src/pages/LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../features/auth/authApi";
import { setCredentials } from "../features/auth/authSlice";
import Button from "../components/Buttons";

const inputClasses =
  "w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400";

const fields = [
  { name: "email", placeholder: "Email", type: "email" },
  { name: "password", placeholder: "Password", type: "password" },
];

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData).unwrap();
      console.log("Login response:", res);

      // Save credentials correctly
      dispatch(
        setCredentials({ user: res.user, token: res.token.access }) // only access token
      );
      alert("Login successful!");

      // Role-based redirection
      const role = res.user.role?.toLowerCase();
      if (role === "user") navigate("/user-dashboard");
      else if (role === "estimator") navigate("/estimator-dashboard");
      else navigate("/"); // fallback
    } catch (err) {
      console.error(err);
      alert("Login failed. Check console for details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <div className="space-y-4">
          {fields.map(({ name, placeholder, type }) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className={inputClasses}
            />
          ))}
        </div>

        <Button type="submit" isLoading={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>

        {error && (
          <p className="text-red-500 mt-4 text-center">
            {error.data?.detail || JSON.stringify(error.data)}
          </p>
        )}
      </form>
    </div>
  );
}
