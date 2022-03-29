import { NavMenu, MainHeader } from '@/components';
import { useToggle } from '@umijs/hooks';
import { Drawer, Layout } from 'antd';
const { Header, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { state, toggle } = useToggle();

  return (
    <Layout className="min-vh-100">
      <NavMenu state={state} toggle={toggle} />

      <Layout>
        <Header className="p-0 pe-3 bg-white">
          <MainHeader toggle={toggle} />
        </Header>

        <Content className="bg-white my-1 p-2">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
