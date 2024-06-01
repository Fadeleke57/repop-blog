import React, { createContext, useState, ReactNode } from 'react';

export const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};