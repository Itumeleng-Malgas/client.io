import {
  ServerToClientEvents,
  ClientToServerEvents,
} from '@/interfaces/typings';
import { io, Socket } from 'socket.io-client';

// please note that the types are reversed
export const socket: Socket<
  ServerToClientEvents,
  ClientToServerEvents
> = io('localhost:1337', { autoConnect: false });
