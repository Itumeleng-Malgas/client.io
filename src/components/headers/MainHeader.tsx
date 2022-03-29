import { Dropdown, message, Badge, Input, Menu } from 'antd';
import {
  BellOutlined,
  MenuOutlined,
  PlusOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useModel } from 'umi';

import { Settings } from '@/components';
import React from 'react';

import { auth } from '@/services/Firebase';

interface MainHeaderProps {
  toggle: (value?: boolean | undefined) => void;
}

const MainHeader = ({ toggle }: MainHeaderProps) => {
  const { showSettings, SettingsContainer } = Settings();
  const { logout } = useModel('auth');

  function handleMenuClick(e: any) {
    if (e.key == 'logout') {
      logout.run();
    }
    console.log('click', e);
  }

  function handleButtonClick(e: any) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="add_product" icon={<PlusOutlined />}>
        Add Product
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="hstack justify-content-between">
      <SettingsContainer />
      <div className="hstack">
        {React.createElement(MenuOutlined, {
          style: { fontSize: '18px', margin: '0 10px' },
          onClick: () => toggle(),
        })}
        <Badge className="mx-3" count={10} showZero offset={[10, 1]}>
          <BellOutlined style={{}} />
        </Badge>

        <Input.Search
          addonBefore="OD"
          placeholder="Order no."
          allowClear
          onSearch={(e) => message.info(e)}
          style={{ width: 200 }}
          onChange={(e) => console.log(e.target.value)}
          className="ms-3 d-none d-sm-inline"
        />
      </div>
      <div>
        <span className="me-2"> {auth.currentUser?.displayName}</span>

        <Dropdown.Button
          onClick={() => showSettings(true)}
          type="text"
          overlay={menu}
        >
          Settings
        </Dropdown.Button>
      </div>
    </div>
  );
};

export default MainHeader;
