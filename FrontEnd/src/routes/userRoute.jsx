
import Home from '../components/productContainer'
import Cart from '../components/cart/cartContainer'
import Myorder from '../components/myorder/myorderContainer'
import Signin from '../components/loginSignup/signin'
import Signup from '../components/loginSignup/signup'
import Signout from '../components/loginSignup/signout'
import ChangePassword from '../components/changePassword'
import ForgetPassword from '../components/forgetPassword'
import SellerSignup from "../components/loginSignup/sellerSignup"

import SellerDashboard from "../components/sellerEnd/dashboard"
import SellerAddProducts from "../components/sellerEnd/addProducts"
import SellerOrders from "../components/sellerEnd/orders"
import { Navigate } from 'react-router-dom'


const user = JSON.parse(sessionStorage.getItem('user'))

const Moveto = () => {
  return <Navigate to={user?.fallback} replace={true} /> ;
}

const AllRoutes = [
  {
    path: "/",
    element:  (user?.userRole === 'guest' || user?.userRole === 'user')? <Home /> : <Moveto/>,
  },
  {
    path: "signin",
    element:(user?.userRole === 'guest')? <Signin /> : ,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "forgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "becomeSeller",
    element: <SellerSignup />,
  },
  {
    path: 'seller',
    element:  <SellerDashboard />
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "myOrder",
    element: <Myorder />,
  },
  {
    path: "signout",
    element: <Signout />,
  },
  {
    path: "changePassword",
    element: <ChangePassword />,
  },
  {
    path: 'addProducts',
    element: <SellerAddProducts />
  },
  {
    path: 'orders',
    element: <SellerOrders />
  }
]

export { AllRoutes }