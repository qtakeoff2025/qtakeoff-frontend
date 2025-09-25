// src/components/Button.jsx
export default function Button({ children, isLoading, ...props }) {
  return (
    <button
      {...props}
      className={`w-full mt-6 bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed ${
        props.className || ""
      }`}
    >
      {isLoading ? "Processing..." : children}
    </button>
  );
}
