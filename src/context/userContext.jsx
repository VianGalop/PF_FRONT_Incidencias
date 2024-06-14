import React, { createContext, useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { sendLogin } from '../Api/axios';
import { Navigate, useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({})
 
  /* const loginMutation = useMutation({
    mutationFn:sendLogin,
    onSuccess: (data) => {
      setIsAuthenticated(true);
    },
    onError: () => {
      setIsAuthenticated(false);       
    }
    }); */ 

    const login = (credentials) => {
      /* loginMutation.mutate(credentials); */
    };
  
    const logout = () => {
      setIsAuthenticated(false);
    };
  return (
    <UserContext.Provider value={{isAuthenticated,setIsAuthenticated, userData, setUserData, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext}