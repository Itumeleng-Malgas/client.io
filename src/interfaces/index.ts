import { Effect, Reducer, Subscription, ordersState } from 'umi';

// socket.io types
export interface ClientToServerEvents {
  newUser: (userId: string) => void;
}

export interface ServerToClientEvents {
  getOrders: (d: any) => void;
}

// orders model types
export interface useOrders {
  namespace: 'orders';
  state: ordersState;
  effects: {
    LOAD_ORDERS_DATA: Effect;
  };
  reducers: {
    SET_STATE: Reducer<ordersState>;
  };
  subscriptions: { setup: Subscription };
}
