import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage';
import AdminPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import CartPage from '../pages/CartPage';
import ContactUsPage from '../pages/ContactUsPage';
import EditProductPage from '../pages/EditProductPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductsPage from '../pages/ProductsPage';
import EditProductPage from '../pages/EditProductPage';
import { useAuth } from '../contexts/AuthContextProvider';
import { ADMIN } from '../helpers/consts';

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <HomePage />,
      id: 1,
    },
    {
      link: '/auth',
      element: <AuthPage />,
      id: 2,
    },
    {
      link: '/about',
      element: <AboutUsPage />,
      id: 3,
    },
    {
      link: '/products',
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: '/products/:id',
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: '/cart',
      element: <CartPage />,
      id: 6,
    },
    {
      link: '/contacts',
      element: <ContactUsPage />,
      id: 7,
    },
    {
      link: '*',
      element: <NotFoundPage />,
      id: 8,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: '/admin',
      element: <AdminPage />,
      id: 1,
    },
    {
      link: '/edit/:id',
      element: <EditProductPage />,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
