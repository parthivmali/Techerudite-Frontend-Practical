import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  return (
    <nav className="bg-[#0195EC] p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Techerudite Practical App</h1>
      <div className="space-x-4">
        <button onClick={handleLogout} className="bg-white px-3 py-1 rounded hover:bg-gray-100 text-black cursor-pointer">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
