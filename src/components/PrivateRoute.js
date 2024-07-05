import React from 'react';
import { navigate } from 'gatsby';

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const tandemRole = typeof window !== 'undefined' ? localStorage.getItem('tandem_role') : null;

  if (tandemRole !== role) {
    navigate('/login');
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
