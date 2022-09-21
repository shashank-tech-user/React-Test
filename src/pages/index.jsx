import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutingComponent from '../auth_routes/route-component';
import Layout from '../components/layout';
import { AuthProvide } from "../context";

const WebPages = () => {
  return (
    <AuthProvide>
      <BrowserRouter>
        <Layout>
          <RoutingComponent />
        </Layout>
      </BrowserRouter>
    </AuthProvide>
  )
}

export default WebPages