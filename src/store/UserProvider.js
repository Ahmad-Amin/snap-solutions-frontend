import { useState } from "react";
import UserContext from "./user-context";

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [superAdmin, setSuperAdmin] = useState(false);

  const removeUserDataHandler = () => {
    setSuperAdmin(false)
    setUser({})
    localStorage.removeItem("user");
  };

  const saveUserData = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    if (user?.role == "superadmin") {
      setSuperAdmin(true);
    }
  };

  const userContext = {
    user: user,
    logoutUser: removeUserDataHandler,
    saveUserData: saveUserData,
    superAdmin: superAdmin,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
