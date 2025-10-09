import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import { Component } from 'react';
import AppDetails from '../Pages/AppDetails';
import Error from '../Pages/Error';
import Loading from '../Components/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'apps',
        Component: Apps,
      },
      {
        path: 'installation',
        Component: Installation,
      },
      {
        path: '/app/:id',
        Component: AppDetails,
      },
      {
        path: '*',
        Component: Error,
      }
    ],
  },
]);

export default router;
