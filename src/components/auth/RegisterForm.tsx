import { Input, Button, Form } from 'antd';
import {
  LockOutlined,
  MailOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Link, useModel } from 'umi';

export default function RegisterForm() {
  const { register } = useModel('auth');

  const formItemLayout = {
    labelCol: {
      sm: { span: 8 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      sm: {
        span: 24,
        offset: 8,
      },
    },
  };

  return (
    <div>
      <Form
        layout="vertical"
        onFinish={(values: any) => {
          register.run(values);
        }}
      >
        <Form.Item>
          <span className="h2 font-weight-600 text-blue-dark">Register</span>
        </Form.Item>
        <Form.Item
          label="Business ID"
          name="businessName"
          rules={[
            {
              required: true,
              message: 'Please enter your business id!',
            },
          ]}
        >
          <Input
            prefix={<UsergroupAddOutlined className="site-form-item-icon" />}
            placeholder="Business ID"
            onBlur={() => console.log('left input')}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid email address!',
            },
            {
              required: true,
              message: 'Please enter email address!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email address"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please enter password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="Confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!'),
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            icon={<i className="fa fa-sign-in me-1" aria-hidden="true" />}
            type="primary"
            size="large"
            className="w-50"
            htmlType="submit"
            loading={register.loading}
          >
            Register
          </Button>
          <span className="ms-2 lead">
            <Link className="bg-gray-4 ms-1" to="/auth/login">
              <i className="fa fa-arrow-circle-left" /> Login
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
}
