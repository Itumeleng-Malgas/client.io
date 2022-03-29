import React from 'react';
import { Button, Divider, Form, Input } from 'antd';

const formItemLayout = {
  labelCol: {
    sm: { span: 24 },
    md: { span: 6, offset: 0 },
  },
  wrapperCol: {
    sm: { span: 24 },
    md: { span: 14 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    sm: {
      span: 24,
      offset: 0,
    },
    md: {
      span: 14,
      offset: 6,
    },
  },
};

const ChangePassword = () => {
  return (
    <div className="d-flex pt-4 flex-column justify-content-between">
      <Form {...formItemLayout}>
        <Form.Item
          label="Current Password"
          name="currentpassword"
          rules={[{ required: true, message: 'Please input current password' }]}
        >
          <Input type="password" placeholder="Current Password" />
        </Form.Item>
        <Form.Item
          label="New Password"
          name="newpassword"
          rules={[{ required: true, message: 'Please input new password' }]}
        >
          <Input type="password" placeholder="New Password" />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmpassword"
          rules={[
            { required: true, message: 'Please input confirmation password' },
          ]}
        >
          <Input type="password" placeholder=" Confirm New Password" />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" loading={false}>
            Change Password
          </Button>
        </Form.Item>
      </Form>
      <Divider />
    </div>
  );
};

export default ChangePassword;
