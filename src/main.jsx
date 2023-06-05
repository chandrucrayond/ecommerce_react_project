import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, } from 'react-router-dom';
import LoginPage from '../components/LoginPage/index';
import ProductListingPage from '../components/ProductListingPage/index';
import SharedLayout from '../components/SharedLayout/index';
import Protected from '../components/Protected/index';
import ErrorPage from '../components/ErrorPage/index';
// import BigSpinner from '../components/BigSpinner';
import { createTheme } from '@mui/material/styles';
import '../src/index.css';
import CreateAccount from '../components/CreateAccount/index';
import ExampleComponent from '../components/ExampleComponent';
// import ProductDescriptionPage from './routes/ProductDescriptionPage';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogin = () => {
    setIsSignedIn(true);
    console.log("Log in successful in main.jsx");
  };

  const handleLogout = () => {
    setIsSignedIn(false);
  };


  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: (
        <Protected isSignedIn={isSignedIn}>
          <SharedLayout />
        </Protected>
      ),
      children: [
        {
          path: "/products",
          element: <ProductListingPage />,
        },     
      ],
    },
    {
      path: "/login",
      errorElement: <ErrorPage />,
      element: (
        <Protected isSignedIn={isSignedIn}>
          <CreateAccount onLogin={handleLogin} />
        </Protected>
      ),
    },
    {
      path: "/example",
      errorElement: <ErrorPage />,
      element: (       
          <ExampleComponent />
      ),
    },
  ]);

  return (
    <RouterProvider
      router={router}
    />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
