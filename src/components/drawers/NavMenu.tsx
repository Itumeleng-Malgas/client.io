import { Menu, Drawer } from 'antd';
import { history, useLocation } from 'umi';

import {
  WindowsOutlined,
  BarChartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

interface NavProps {
  toggle: (value?: boolean | undefined) => void;
  state: boolean;
}

const NavMenu = ({ toggle, state }: NavProps) => {
  const navigate = (e: any) => {
    history.push(e.key);
    toggle();
  };

  return (
    <Drawer
      closable={false}
      visible={state}
      placement="left"
      onClose={() => toggle()}
      width="200px"
    >
      <div className="text-center">
        <i className="border border-4 rounded fa fa-circle h4  bg-danger py-1 w-100">
          <span className="ms-1">
            Noble<span className="text-primary">Devs</span>
          </span>
        </i>
        <Menu
          className="vstack  justify-content-between"
          mode="inline"
          defaultSelectedKeys={[useLocation().pathname]}
          onClick={navigate}
        >
          <Menu.Item key="/dashboard" icon={<WindowsOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/products" icon={<ShoppingCartOutlined />}>
            Products
          </Menu.Item>

          <Menu.Item key="/analytics" icon={<BarChartOutlined />}>
            Analytics
          </Menu.Item>
        </Menu>
      </div>
    </Drawer>
  );
};

export default NavMenu;
