import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,  createBrowserRouter,  RouterProvider,} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
// import ProductListPage from './routes/ProductListPage';
import SharedLayout from '../components/SharedLayout';
import Protected from '../components/Protected';
import ErrorPage from '../components/ErrorPage';
// import BigSpinner from '../components/BigSpinner';
import { createTheme } from '@mui/material/styles';
import '../src/index.css';
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
        errorElement : <ErrorPage/ >,
        element : (
          <Protected isSignedIn={isSignedIn}>
          <SharedLayout />
          </Protected>
        ),
        children: [
          {
            path : "login",
            // element: <LoginPage onLogin={handleLogin} />,
            element: <div>This is the dummy login page</div>,
          },
          // {
          //   path: "product",
          //   errorElement : <ErrorPage/ >,
          //   element: <ProductListPage />,
          
          // },
          // {
          //   path: "/products/:id",
          //   errorElement : <ErrorPage/ >,
          //   element: <ProductDescriptionPage/>,
          // },
          
        ],
      },
    ]);
  
 return(
  <RouterProvider
    router={router}
  />
);
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
