import RouterAnimation from './routerAnimation';
import MainLayout from './MainLayout';
import AuthLayout from './AuthLayout';

import { useModel } from 'umi';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  const { auth } = useModel('auth');

  // show loader when user in check authorization process
  if (auth.loading) {
    return <div className="initial__loading"></div>;
  }

  if (!auth.data) {
    return (
      <AuthLayout>
        <RouterAnimation>{children}</RouterAnimation>
      </AuthLayout>
    );
  }
  return (
    <MainLayout>
      <RouterAnimation>{children}</RouterAnimation>
    </MainLayout>
  );
};

export default Layout;
