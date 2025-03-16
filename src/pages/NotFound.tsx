import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
