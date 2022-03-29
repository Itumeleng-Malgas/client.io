import { Redirect } from 'umi';

const IndexPage = () => {
  return <Redirect to="/dashboard" />;
};

IndexPage.wrappers = ['@/wrappers/auth'];
export default IndexPage;
