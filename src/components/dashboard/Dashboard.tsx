import { columns } from '@/services/OrdersFunctions';
import { connect, OrdersModelState } from 'umi';
import { Table } from 'antd';

interface DashboardProps {
  orders: OrdersModelState;
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
        className="border-start ms-1 px-2 d-none d-md-block"
        style={{ width: '250px' }}
      >
        <span
          style={{
            minWidth: 200,
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: '#032b64' }} className="fw-bold text-nowrap">
            Ready Orders
          </h3>
          <div
            style={{
              width: '95%',
              height: 40,
              border: 'solid 1px blue',
              margin: '5px',
              borderRadius: 5,
              color: 'green',
            }}
          >
            <span className="h2 myLink">OD0012</span>
          </div>
          <div
            style={{
              width: '95%',
              height: 40,
              border: 'solid 1px blue',
              margin: '5px',
              borderRadius: 5,
              color: 'green',
            }}
          >
            <span className="h2">OD0012</span>
          </div>

          <div
            style={{
              width: '95%',
              height: 40,
              border: 'solid 1px blue',
              margin: '5px',
              borderRadius: 5,
              color: 'green',
            }}
          >
            <span className="h2">OD0012</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default connect(({ orders }: { orders: OrdersModelState }) => ({
  orders,
}))(Dashboard);
