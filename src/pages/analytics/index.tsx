import { Helmet } from 'umi';

const Analytics = () => {
  return (
    <div>
      <Helmet title="Analytics" />
      Protected Analytics Page
    </div>
  );
};

Analytics.wrappers = ['@/wrappers/auth'];
export default Analytics;
