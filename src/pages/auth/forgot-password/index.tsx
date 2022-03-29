import PasswordResetForm from '@/components/auth/PasswordResetForm';
import AuthLayout from '@/layouts/AuthLayout';
import { Helmet } from 'umi';

export default function PasswordReset() {
  return (
    <div>
      <Helmet title="Reset Password" />
      <PasswordResetForm />
    </div>
  );
}
