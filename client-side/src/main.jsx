import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Route/Root';
import Error from './assets/pages/ErrorPage/Error';
import Home from './assets/pages/Home/Home';
import AuthProvider from './assets/AuthProvider/AuthProvider';
import Login from './assets/pages/Login/Login';
import SignUp from './assets/pages/SignUp/SignUp';
import AddSpot from './assets/pages/AddSpot/AddSpot';
import Spotlist from './assets/components/Spotlist/Spotlist';
import TouristSpot from './assets/components/TouristSpot/TouristSpot';
import SpotDetails from './assets/pages/SpotDetails/SpotDetails';
import UpdateSpot from './assets/pages/UpdateSpot/UpdateSpot';
import Country from './assets/pages/Country/Country';
import PrivateRoute from './Route/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://roamify-server.vercel.app/touristSpot')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      },
      {
        path: '/addTouristSpot',
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: '/mySpot',
        element: <PrivateRoute><Spotlist></Spotlist></PrivateRoute>
      },
      {
        path: '/touristSpot',
        element: <TouristSpot />,
        loader: () => fetch('https://roamify-server.vercel.app/touristSpot')
      },
      {
        path: '/spotdetails/:id',
        element: <SpotDetails></SpotDetails>,
        loader: () => fetch('https://roamify-server.vercel.app/touristSpot')
      },
      {
        path: '/updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({ params }) => fetch(`https://roamify-server.vercel.app/mySpot-data/${params.id}`)
      },
      {
        path: '/countryList',
        element: <Country></Country>,
        loader: () => fetch('https://roamify-server.vercel.app/countryList')
      }
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
