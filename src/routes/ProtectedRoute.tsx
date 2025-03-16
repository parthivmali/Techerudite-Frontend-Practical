import { Outlet } from "react-router-dom";
import NotFound from "../pages/NotFound";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <NotFound/>;
};

export default ProtectedRoute;
