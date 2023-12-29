import './App.css'
import {Outlet, useNavigate} from "react-router-dom"

import Header from "../components/header"
import UserAuthState from '../states/userAuthState'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <UserAuthState>
        <Header></Header>
        <Outlet></Outlet>
      </UserAuthState>
    </>
  )
}

export default App
