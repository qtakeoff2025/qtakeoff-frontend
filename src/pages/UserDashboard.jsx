// src/pages/UserDashboard.jsx
import LogOut from "../components/LogOut";
import ProjectCreate from "../components/ProjectCreate";

export default function UserDashboard() {
  const handleProjectCreated = () => {
    console.log("A new project was created!");
    // You can also trigger a refresh of project list here later
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
      <p className="text-gray-700 text-lg mb-6">
        Welcome! This is the User Dashboard.
      </p>

      {/* Project creation form */}
      <ProjectCreate onSuccess={handleProjectCreated} />

      {/* Logout button */}
      <div className="mt-6">
        <LogOut />
      </div>
    </div>
  );
}
