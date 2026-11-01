import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cakes from './components/shop/cakes.jsx'
import Home from './components/hero/hero.jsx'
import Cartitems from './components/cart/cartitem.jsx'
import Info from './components/moreinfo/info.jsx'
import Payinf from './components/paymentinterface/payinf.jsx'
import Registered from './components/registrationstatus/registered.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path: "/cakes",
        element:<Cakes></Cakes>
      },
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/cart",
        element:<Cartitems></Cartitems>
      },
      {
        path: "/:id",
        element:<Info></Info>
      },
      {
        path: "/paymentdetails",
        element:<Payinf></Payinf>,
        
      },
      {
        path: "/regstatus",
        element:<Registered></Registered> 
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>,
)
