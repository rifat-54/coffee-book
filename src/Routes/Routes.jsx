import { createBrowserRouter } from "react-router-dom";

// import App from './App.jsx'
import App from '../../src/App'
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";
import Coffee from "../Pages/Coffee";
import CoffeCard from "../Components/CoffeCard";
import CoffeeDetails from "../Pages/CoffeeDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('../categories.json'),
            children:[
              {
                path:'/category/:category',
                element:<CoffeCard></CoffeCard>,
                loader:()=>fetch('../coffees.json')
              },
              {
                path:'/',
                element:<CoffeCard></CoffeCard>,
                loader:()=>fetch('../coffees.json')
              },
            ]
        },
        {
            path:'/dashbord',
            element:<Dashbord></Dashbord>
        },
        {
            path:'/coffee',
            element:<Coffee></Coffee>,
            loader:()=>fetch('../coffees.json')
        },
        {
          path:'/coffee/:id',
          element:<CoffeeDetails></CoffeeDetails>,
          loader:()=>fetch('../coffees.json')
        },
      ]
    },
  ]);




  export default router;