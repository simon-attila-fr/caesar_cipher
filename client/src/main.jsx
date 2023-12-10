import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import TechnicalDetails from './pages/TechnicalDetails.jsx/TechnicalDetails.jsx';
import CaesarPage from './pages/CaesarPage.jsx/CaesarPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'caesar',
        element: <CaesarPage/>
      },
      {
        path: 'tech_details',
        element: <TechnicalDetails/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
