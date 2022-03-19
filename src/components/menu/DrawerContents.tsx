import { Menu } from 'antd';
import { history, useLocation } from 'umi';

import {
  WindowsOutlined,
  BarChartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

interface SiderContentProps {
  toggle: (value?: boolean | undefined) => void;
}

const DrawerContents = ({ toggle }: SiderContentProps) => {
  const navigate = (path: string) => {
    history.push(path);
    toggle();
  };

  return (
    <div className="text-center">
      <i className="border border-4 rounded fa fa-circle h4 bg-danger py-1 w-100">
        <span className="ms-2">NobleDevs</span>
      </i>
      <Menu
        className="vstack  justify-content-between"
        mode="inline"
        defaultSelectedKeys={[useLocation().pathname]}
      >
        <Menu.Item
          key="/dashboard"
          icon={<WindowsOutlined />}
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="/products"
          icon={<ShoppingCartOutlined />}
          onClick={() => navigate('/products')}
        >
          Products
        </Menu.Item>

        <Menu.Item
          key="/analytics"
          icon={<BarChartOutlined />}
          onClick={() => navigate('/analytics')}
        >
          Analytics
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default DrawerContents;
