// src/pages/RegisterForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation } from "../features/auth/authApi";
import { setCredentials } from "../features/auth/authSlice";
import Button from "../components/Buttons";

const inputClasses =
  "w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400";

const fields = [
  { name: "first_name", placeholder: "First Name", type: "text" },
  { name: "last_name", placeholder: "Last Name", type: "text" },
  { name: "username", placeholder: "Username", type: "text" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "password", placeholder: "Password", type: "password" },
  { name: "password2", placeholder: "Confirm Password", type: "password" },
];

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
    role: "user",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData).unwrap();
      dispatch(setCredentials({ user: res, token: res.token }));
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed. Check console for details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

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

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="user">User</option>
            <option value="estimator">Estimator</option>
          </select>
        </div>

        <Button type="submit" isLoading={isLoading}>
          Registers
        </Button>

        {error && (
          <p className="text-red-500 mt-4 text-center">
            {error.data?.role || JSON.stringify(error.data)}
          </p>
        )}
      </form>
    </div>
  );
}
