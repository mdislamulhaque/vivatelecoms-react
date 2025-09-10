import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-6">
        Oops! Page not found.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
