import React, { useEffect, useState, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './Apps/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AllRoutes } from "./routes/userRoute.jsx"
import UserAuthContext from './context/userAuthContext.jsx'
import UserAuthState from './states/userAuthState.jsx'
import './index.css'


const MainComp = () => {
  const { user, setUser } = React.useContext(UserAuthContext);
  sessionStorage.setItem('user',JSON.stringify(user))
  
  useEffect(() => {
    console.log('User Updated from main', user);
    console.log(user);
  }, [user]);
  
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [ ...AllRoutes ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <UserAuthState>
      <MainComp />
    </UserAuthState>
  </>
)