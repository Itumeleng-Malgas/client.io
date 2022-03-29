import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'umi';

export default function PasswordResetForm() {
  return (
    <Form layout="vertical" scrollToFirstError name="passwordreset">
      <div className="h2 font-weight-600 mb-3  text-blue-dark">
        Password Reset
      </div>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { type: 'email', message: 'The input is not valid E-mail' },
          { required: true, message: 'Please enter your email address' },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-ico" />}
          size="large"
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item>
        {' '}
        <Button
          type="primary"
          size="large"
          className="mt-3 text-center w-50 me-2"
          htmlType="submit"
          loading={false}
          icon={<i className="fa fa-unlock-alt me-2" aria-hidden="true" />}
        >
          Reset Password
        </Button>
        <Link className="lead" to="/auth/login">
          <i className="fa fa-arrow-circle-left" /> Login
        </Link>
      </Form.Item>
    </Form>
  );
}
