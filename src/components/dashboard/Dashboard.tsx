import { columns } from '@/services/OrdersFunctions';
import { connect, ordersState } from 'umi';
import { Table } from 'antd';

interface DashboardProps {
  orders: ordersState;
}

const Dashboard: React.FC<DashboardProps> = ({ orders }) => {
  return (
    <div className="d-flex">
      <Table
        columns={columns}
        dataSource={orders.data}
        className="w-100"
        pagination={{
          defaultPageSize: 6,
          showSizeChanger: true,
          pageSizeOptions: ['6', '8', '12', '20'],
        }}
      />
      <div
        className="border-start ms-1 px-2 d-none d-sm-block"
        style={{ width: '250px' }}
      >
        <div>Completed Orders</div>
      </div>
    </div>
  );
};

export default connect(({ orders }: { orders: ordersState }) => ({
  orders,
}))(Dashboard);
