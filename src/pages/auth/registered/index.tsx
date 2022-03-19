import AuthLayout from '@/layouts/AuthLayout';
import { Link } from 'umi';
import React from 'react';

const Registered = () => {
  return (
    <AuthLayout>
      <div>
        Registered if not redirected in 3 seconds{' '}
        <Link to="/auth/login">goto login</Link>
      </div>
    </AuthLayout>
  );
};

export default Registered;
