import React from 'react';
import { Modal, Tabs } from 'antd';

import ChangePassword from './Password';
import DeleteAccount from './DeleteAccount';

const Settings = () => {
  const [visible, showSettings] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const handleCancel = () => {
    showSettings(false);
  };

  const SettingsContainer = () => {
    return (
      <Modal
        title="ACCOUNT SETTINGS"
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        width={'80%'}
        bodyStyle={{ height: 460 }}
      >
        <Tabs style={{ height: '100%' }} defaultActiveKey="delete_account">
          <Tabs.TabPane tab="General" key="general"></Tabs.TabPane>
          <Tabs.TabPane tab="Password" key="change_password">
            <ChangePassword />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Delete Account" key="delete_account">
            <DeleteAccount />
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    );
  };

  return { SettingsContainer, showSettings };
};

export default Settings;
