import React from "react";

const UserContext = React.createContext({
  user: {},
  allUsers: [],
  saveToGlobalStore: () => {},
  logoutUser: () => {},
  saveUserData: () => {},
  superAdmin: Boolean,
});

export default UserContext;
