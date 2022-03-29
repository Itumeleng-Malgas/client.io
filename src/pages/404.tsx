import { useHistory, Helmet } from 'umi';
import { Button } from 'antd';

const Error404 = () => {
  const history = useHistory();
  return (
    <>
      <Helmet title="Page 404" />
      <div className="container p-5 mb-auto text-dark fs-1">
        <div className="fw-bold mb-3">Page not found</div>
        <div style={{ color: 'gray' }} className="fs-2">
          This page is deprecated, deleted, or does not exist at all
        </div>
        <div className="fw-bold fs-1 mb-1">404 —</div>
        <Button type="primary" onClick={() => history.push('/')}>
          Go Back
        </Button>
      </div>
    </>
  );
};

export default Error404;
