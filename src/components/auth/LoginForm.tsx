import { Button, Form, Input, Checkbox } from 'antd';
import { Link, useModel } from 'umi';

export default function LoginForm() {
  const { login } = useModel('auth');

  const formItemLayout = {
    labelCol: {
      sm: { span: 5 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      sm: {
        span: 24,
        offset: 5,
      },
    },
  };
  return (
    <Form
      //{...formItemLayout}
      scrollToFirstError
      layout="vertical"
      initialValues={{
        email: 'other@company.com',
        password: '@Itumeleng12',
        remember: false,
      }}
      onFinish={(values: any) => {
        login.run(values);
      }}
    >
      {' '}
      <Form.Item>
        <h2>Login</h2>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { type: 'email', message: 'Invalid email address' },
          { required: true, message: 'Please enter email address' },
        ]}
      >
        <Input size="large" placeholder="Email address" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter password' }]}
      >
        <Input.Password size="large" type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          icon={<i className="fa fa-sign-in me-1" aria-hidden="true" />}
          type="primary"
          size="large"
          className="w-25 me-2"
          htmlType="submit"
          loading={login.loading}
        >
          Login
        </Button>
        <Link className="lead" to="/auth/forgot-password">
          <i className="fa fa-lock me-2"></i>forgot password?
        </Link>
      </Form.Item>
    </Form>
  );
}
