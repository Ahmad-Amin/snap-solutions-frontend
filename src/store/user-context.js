import React from "react";

const UserContext = React.createContext({
  user: {},
  logoutUser: () => {},
  saveUserData: () => {},
  superAdmin: Boolean,
});

export default UserContext;
