import React from "react";

// step one create user context
const UserContext = React.createContext("Rapidops")

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserConsumer, UserProvider}