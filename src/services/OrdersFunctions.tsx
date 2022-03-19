import { auth } from './Firebase';
import request from 'umi-request';

export interface Orders {
  id?: number;
  name: string;
  status: boolean;
  price: number;
  created_at: Date;
  items: any;
  total: any;
}

export const getOrders = async () => {
  return request
    .get(`http://localhost:1337/api/orders/${auth.currentUser?.uid}`)
    .then((response: Orders[]) => {
      let data: any = [];
      response.map((res) => {
        data.push({
          order_no: res.id,
          key: res.id,
          customer: 'Mice',
          status: res.status ? 'processing' : 'pending',
          total: 'R ' + res.total,
          items: res.name,
          createdAt: res.created_at,
        });
      });
      return data;
    })
    .catch((err) => console.log(err));
};

export const columns: any = [
  {
    title: '#ORDER',
    dataIndex: 'order_no',
    key: 'order_no',
    render: (text: string) => (
      <a
        className="btn btn-sm btn-light"
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        {text}
      </a>
    ),
    sorter: (a: any, b: any) => a.order_no - b.order_no,
  },
  {
    title: 'ORDERED ITEMS',
    dataIndex: 'items',
    key: 'items',
    responsive: ['lg'],
    render: (items: string) => <div className="text-dark lead">{items}</div>,
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    responsive: ['md'],
    render: (text: string) => (
      <span
        className={
          text === 'Processing' ? 'badge bg-primary' : ' badge bg-warning'
        }
      >
        {text}
      </span>
    ),
    sorter: (a: any, b: any) => a.status.length - b.status.length,
  },
  {
    title: 'ACTIONS',
    key: 'actions',
    render: () => (
      <span className="actions">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="action accept"
        >
          <i className="px-1 fa fa-check" aria-hidden="true" />
          <span>Accept</span>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="action cancel"
        >
          <i className="px-1 fa fa-trash" aria-hidden="true" />
          <span>Cancel</span>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="action complete bg-success"
        >
          <i className="px-1 fa fa-paper-plane" aria-hidden="true" />
          <span>Ready</span>
        </a>
      </span>
    ),
  },
];
