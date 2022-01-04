import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gnb from './components/gnb';
import Main from './pages/main';
import Product from './pages/product';
import About from './pages/about';
import Login from './pages/login';
import Admin from './pages/admin';
import NotFound from './pages/notFound';
import Admin1 from './pages/admin1';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Gnb />}>
          <Route index element={<Main />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="1" element={<Admin1 />} />
          <Route path="2" />
          <Route path="3" />
          <Route path="4" />
          <Route path="5" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
