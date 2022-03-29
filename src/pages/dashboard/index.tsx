import { Dashboard } from '@/components';
import { Helmet } from 'umi';

const SystemDashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <Dashboard />
    </>
  );
};

SystemDashboard.wrappers = ['@/wrappers/auth'];
export default SystemDashboard;
