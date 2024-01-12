import { useEffect, useContext } from "react";
import "./App.css";
import Login from "./components/Login";
import { AdminDashboard } from "./pages/AdminDashboard";

import { useNavigate } from "react-router-dom";
import SuperAdmin from "./pages/SuperAdmin/SuperAdmin";
import UserContext from "./store/user-context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const user = userCtx.user;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      userCtx.saveUserData(user);
      navigate("/dashboard");
    }
  }, []);

  const adminDashboard = userCtx.superAdmin ? (
    <SuperAdmin />
  ) : (
    <AdminDashboard />
  );

  return (
    <div className="mx-auto container">
      {Object.keys(user).length !== 0 ? adminDashboard : <Login />}
      <ToastContainer />
    </div>
  );
}

export default App;
