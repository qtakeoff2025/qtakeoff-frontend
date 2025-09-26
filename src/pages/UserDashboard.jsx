// src/pages/UserDashboard.jsx
import LogOut from "../components/LogOut";

export default function UserDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
      <p className="text-gray-700 text-lg">
        Welcome! This is the User Dashboard.
      </p>
      <LogOut />
    </div>
  );
}
