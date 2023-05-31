import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, } from 'react-router-dom';
import LoginPage from '../components/LoginPage/index';
// import ProductListPage from './routes/ProductListPage';
import SharedLayout from '../components/SharedLayout/index';
import Protected from '../components/Protected/index';
import ErrorPage from '../components/ErrorPage/index';
// import BigSpinner from '../components/BigSpinner';
import { createTheme } from '@mui/material/styles';
import '../src/index.css';
import CreateAccount from '../components/CreateAccount/index';
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
          element: <h1>hello world</h1>,
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
  ]);

  return (
    <RouterProvider
      router={router}
    />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
