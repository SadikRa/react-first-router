import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import First from './Components/First/First';
import Friends from './Components/Friends/Friends';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path:"/about",
//     element: <About></About>
//   },
//   {
//     path:"/contact",
//     element: <Contact></Contact>
//   }
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/first",
        element: <First />,
      },

      {
        path: "/Friends",
        element: <Friends />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
