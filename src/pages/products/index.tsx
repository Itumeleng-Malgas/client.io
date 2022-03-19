import { Helmet } from 'umi';

const MyProducts = () => {
  return (
    <div>
      <Helmet title="Products" />
      Protected Products page
    </div>
  );
};

MyProducts.wrappers = ['@/wrappers/auth'];
export default MyProducts;
