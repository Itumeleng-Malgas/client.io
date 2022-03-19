import RegisterForm from '@/components/auth/RegisterForm';
import AuthLayout from '@/layouts/AuthLayout';
import { Helmet } from 'umi';

export default function Register() {
  return (
    <AuthLayout>
      <Helmet title="Register" />
      <RegisterForm />
    </AuthLayout>
  );
}
