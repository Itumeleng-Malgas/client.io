import RegisterForm from '@/components/auth/RegisterForm';
import AuthLayout from '@/layouts/AuthLayout';
import { Helmet } from 'umi';

export default function Register() {
  return (
    <div>
      <Helmet title="Register" />
      <RegisterForm />
    </div>
  );
}
