import { OrdersModelType } from '@/interfaces/typings';
import { socket } from '@/services/ServerFunctions';

export interface Orders {
  id?: number;
  name: string;
  status: boolean;
  price: number;
  created_at: Date;
  items: any;
  total: any;
}

export interface OrdersModelState {
  data: {}[];
}

const ordersModel: OrdersModelType = {
  namespace: 'orders',
  state: { data: [] },
  reducers: { SET_STATE: (state, { payload }) => ({ ...state, ...payload }) },
  effects: {
    *LOAD_ORDERS_DATA({ payload }, { put, call }) {
      yield put({
        type: 'SET_STATE',
        payload: {
          data: payload,
        },
      });
    },
  },

  subscriptions: {
    setup({ dispatch }) {
      socket.on('getOrders', (d) => {
        let data: any = [];
        d.map((res: Orders) => {
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

        dispatch({
          type: 'LOAD_ORDERS_DATA',
          payload: data,
        });
      });
    },
  },
};

export default ordersModel;
