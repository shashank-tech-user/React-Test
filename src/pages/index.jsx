import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from '../components/layout';
import Home from "./home";
import Favorite from "./favorites";
import Mybook from "./mybooks";

const WebPages = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/my-books" element={<Mybook />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default WebPages