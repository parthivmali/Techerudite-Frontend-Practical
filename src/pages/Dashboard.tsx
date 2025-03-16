import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        title: "Unauthorized!",
        text: "You need to login first.",
        icon: "warning",
        confirmButtonText: "OK",
      }).then(() => navigate("/customer-login"));
    }
  }, [navigate]);

  return (
    <div 
      className="min-h-screen min-w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <Navbar />
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold">Welcome to the Dashboard!</h2>
        <p className="mt-2 text-gray-600">This is a protected page. Only logged-in users can access it.</p>
      </div>
    </div>
  );
};

export default Dashboard;
