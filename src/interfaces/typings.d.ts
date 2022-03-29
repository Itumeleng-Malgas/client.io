import { Effect, Reducer, Subscription, OrdersModelState } from 'umi';

// socket.io types
export interface ClientToServerEvents {
  newUser: (userId: string) => void;
}

export interface ServerToClientEvents {
  getOrders: (d: any) => void;
}

// orders model types
export interface OrdersModelType {
  namespace: 'orders';
  state: OrdersModelState;
  effects: {
    LOAD_ORDERS_DATA: Effect;
  };
  reducers: {
    SET_STATE: Reducer<OrdersModelState>;
  };
  subscriptions: { setup: Subscription };
}
