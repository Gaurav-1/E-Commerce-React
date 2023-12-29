import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import UserAuthContext from '../context/userAuthContext';

const AuthRoute = ({ element, isAuthenticated, fallbackPath = sessionStorage.getItem('user')?.fallback || '/signin' }) => {
  console.log(fallbackPath);
  const navigate = useNavigate();
  return isAuthenticated ? (element) : (<><Navigate to={fallbackPath}/></>)
  
};

export default AuthRoute;
