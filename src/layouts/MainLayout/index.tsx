import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import RouterAnimation from '../routerAnimation';
import { useModel } from 'umi';
import { useToggle } from '@umijs/hooks';
import { Drawer, Layout, Button } from 'antd';
import React from 'react';
import { auth } from '@/services/Firebase';

import DrawerContents from '@/components/menu/DrawerContents';

const { Header, Content } = Layout;

const MainLayout: React.FC = ({ children }) => {
  const { state, toggle } = useToggle();
  const { logout } = useModel('auth');

  return (
    <Layout className="min-vh-100">
      <Drawer
        closable={false}
        visible={state}
        placement="left"
        onClose={() => toggle()}
        width="200px"
      >
        <DrawerContents toggle={toggle} />
      </Drawer>

      <Layout>
        <Header className="p-0 pe-3 bg-white justify-content-between hstack">
          {React.createElement(state ? MenuUnfoldOutlined : MenuFoldOutlined, {
            style: { fontSize: '20px', margin: '0 10px' },
            onClick: () => toggle(),
          })}

          <div>
            <span className="me-2"> {auth.currentUser?.displayName}</span>

            <Button
              icon={<i className="fa fa-power-off me-1" />}
              className=""
              onClick={() => logout.run()}
              type="text"
            >
              Logout
            </Button>
          </div>
        </Header>

        <Content className="bg-white my-1 p-2">
          <RouterAnimation>{children}</RouterAnimation>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
