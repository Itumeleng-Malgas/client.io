import { Redirect, useModel, Helmet } from 'umi';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const authWrapper: React.FC = ({ children }) => {
  const { auth } = useModel('auth');

  // show loader when user in check authorization process
  if (auth.loading) {
    return <div className="initial__loading"></div>;
  }

  // redirect to login page if user is not authorized
  if (!auth.data) {
    return <Redirect to="/auth/login" />;
  }

  return (
    <MainLayout>
      <Helmet titleTemplate="Authenticated | %s" />
      {children}
    </MainLayout>
  );
};
export default authWrapper;
