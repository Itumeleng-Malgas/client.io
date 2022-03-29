import LoginForm from '@/components/auth/LoginForm';
import AuthLayout from '@/layouts/AuthLayout';
import { Helmet } from 'umi';

export default function Login() {
  return (
    <div>
      <Helmet title="Login" />
      <LoginForm />
    </div>
  );
}
