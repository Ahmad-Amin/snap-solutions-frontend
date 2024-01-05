import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { AdminDashboard } from "./pages/AdminDashboard";
import { BrowserRouter as Router } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import SuperAdmin from "./pages/SuperAdmin/SuperAdmin";

function App() {
  const [user, setUser] = useState(false);
  const [SuperAdminState, setSuperAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (isSuperAdmin) => {
    if (isSuperAdmin) {
      setSuperAdmin(true);
    }
    setUser(true);
    navigate("/dashboard");
  };

  const adminDashboard = SuperAdminState ? (
    <SuperAdmin setUser={setUser} />
  ) : (
    <AdminDashboard setUser={setUser} />
  );

  return (
    <div className="mx-auto container">
      {/* <AdminDashboard /> */}
      {user ? adminDashboard : <Login handleLogin={handleLogin} />}
    </div>
  );
}

export default App;
