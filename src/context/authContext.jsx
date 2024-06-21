import React, { createContext, useContext, useState } from 'react';
/* import { useMutation } from 'react-query';
import { sendLogin } from '../Api/axios';
import { Navigate, useNavigate } from 'react-router-dom'; */

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 /*  const [isAuthenticated, setIsAuthenticated] = useState(false);*/
  const [userData, setUserData] = useState({})
  const [auth, setAuth] = useState({})
  /* const loginMutation = useMutation({
    mutationFn:sendLogin,
    onSuccess: (data) => {
      setIsAuthenticated(true);
    },
    onError: () => {
      setIsAuthenticated(false);       
    }
    });

   const login = (credentials) => {
      loginMutation.mutate(credentials);
    };
  
    const logout = () => {
      setIsAuthenticated(false);
    }; */
  return (
    <AuthContext.Provider value = { {auth, setAuth, userData, setUserData} }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;