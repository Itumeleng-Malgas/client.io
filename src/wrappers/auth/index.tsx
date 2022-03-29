import { Redirect, useModel } from 'umi';
import React from 'react';

const authWrapper: React.FC = ({ children }) => {
  const { auth } = useModel('auth');

  // redirect to login page if user is not authorized
  if (!auth.data) {
    return <Redirect to="/auth/login" />;
  }

  return <div>{children}</div>;
};
export default authWrapper;
