import React, {
  createContext,
  useState,
} from 'react';

export const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  // LOGIN
  const login = (
    name,
    email
  ) => {

    setUser({
      name,
      email,
    });

  };

  // LOGOUT
  const logout = () => {

    setUser(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );
};