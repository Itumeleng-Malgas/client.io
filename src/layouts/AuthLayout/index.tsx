import React from 'react';
import { Row, Col } from 'antd';
import { Link, Helmet } from 'umi';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <Row className="container vstack min-vh-100">
      <Helmet titleTemplate="NobleQ | %s" />
      <div className="d-flex justify-content-between lead  my-2">
        <span className="d-none d-md-block text-primary fw-bold">
          Nobledevs | <span className="text-danger">NobleQ</span>
        </span>

        <span>
          Don't have an account?{' '}
          <Link className="text-info" to="/auth/register">
            Register
          </Link>
        </span>
      </div>
      <Row
        style={{ flex: 1, margin: '50px 10px' }}
        align="middle"
        justify="center"
      >
        <Col xs={24} sm={20} md={18} lg={14} xl={12}>
          {children}
        </Col>
      </Row>
      <div style={{ fontSize: '11px' }} className="text-center my-2">
        <p>
          Copyright &copy; {new Date().getFullYear()} Itumeleng Malgas All
          Rights Reserved
        </p>
      </div>
    </Row>
  );
};

export default AuthLayout;
