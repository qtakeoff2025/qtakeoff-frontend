import { useState } from "react";
import {
  useCreateProjectMutation,
  useGetProjectsQuery,
  useGetProjectDetailQuery,
  useDeleteProjectMutation,
} from "../features/projects/projectsApi";

export default function ProjectCreate() {
  const [title, setTitle] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(null); // for viewing details
  const [createProject, { isLoading: isCreating }] = useCreateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();
  const { data: projects, isLoading, refetch } = useGetProjectsQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent empty submissions

    try {
      await createProject({ title }).unwrap();
      setTitle("");
      // refetch is optional since invalidatesTags handles it
      refetch();
    } catch (err) {
      console.error("Create project error:", err);
      alert(err.data?.detail || "Error creating project");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(id).unwrap();
        alert("Project deleted");
        // refetch(); // optional, tags will handle auto update
      } catch (err) {
        console.error("Delete project error:", err);
        alert("Error deleting project");
      }
    }
  };

  const { data: projectDetail, isLoading: isDetailLoading } =
    useGetProjectDetailQuery(
      selectedProjectId,
      { skip: !selectedProjectId } // only fetch when a project is selected
    );

  return (
    <div className="p-4 w-full max-w-md">
      {/* Create Project Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project title"
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button
          type="submit"
          disabled={isCreating || !title.trim()}
          className={`w-full p-2 rounded ${
            isCreating || !title.trim()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          {isCreating ? "Creating..." : "Create Project"}
        </button>
      </form>

      {/* Projects List */}
      <h2 className="text-xl font-bold mb-2">Projects</h2>
      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <ul>
          {projects?.map((proj) => (
            <li
              key={proj.id}
              className="p-2 border-b flex justify-between items-center"
            >
              <span>{proj.title}</span>
              <div className="space-x-2">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setSelectedProjectId(proj.id)}
                >
                  View Details
                </button>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDelete(proj.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Project Detail */}
      {selectedProjectId && (
        <div className="mt-4 p-2 border rounded bg-gray-50">
          <h3 className="font-semibold mb-2">Project Details</h3>
          {isDetailLoading ? (
            <p>Loading details...</p>
          ) : projectDetail ? (
            <pre className="text-sm">
              {JSON.stringify(projectDetail, null, 2)}
            </pre>
          ) : (
            <p>No details available</p>
          )}
          <button
            className="mt-2 text-sm text-gray-500 hover:underline"
            onClick={() => setSelectedProjectId(null)}
          >
            Close Details
          </button>
        </div>
      )}
    </div>
  );
}
