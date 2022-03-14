import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gnb from './components/gnb';

import Main from './pages/main';
import Product from './pages/product';
import About from './pages/about';
import Login from './pages/login';
import NotFound from './pages/notFound';
import Admin from './pages/admin/admin';
import Admin1 from './pages/admin/admin1';
import Admin2 from './pages/admin/admin2';
import { AuthProvider } from './components/authContext';
import AuthRoute from './components/authroute';
import AdminMain from './pages/admin/index';
import theme from './pages/theme';
import { ThemeProvider } from 'styled-components';
import { GridProvider } from './components/gridContext';
import MainTest from './pages/main-test';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <GridProvider>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Gnb />}>
                <Route index element={<Main />} />
                <Route path="test" element={<MainTest />} />
                <Route path="product" element={<Product />} />
                <Route path="product/:item" element={<Product />} />
                <Route path="about" element={<About />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <AuthRoute>
                    <Admin />
                  </AuthRoute>
                }
              >
                <Route index element={<AdminMain />} />
                <Route path="1" element={<Admin1 />} />
                <Route path="2" element={<Admin2 />} />
                <Route path="3" />
                <Route path="4" />
                <Route path="5" />
              </Route>
              <Route path="/auth" element={<AuthRoute element={<Admin />} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </GridProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
