import * as AuthFunc from '@/services/AuthFunctions';
import { socket } from '@/services/ServerFunctions';
import { useRequest } from '@umijs/hooks';
import { history } from 'umi';
import React from 'react';
import { User } from 'firebase/auth';

export default () => {
  const auth = useRequest(React.useCallback(AuthFunc.currentAccount, []), {
    onSuccess: (user: User) => {
      history.push('/');
      socket.connect();
      user ? socket.emit('newUser', user.uid) : socket.disconnect();
    },
  });

  const register = useRequest(AuthFunc.register, {
    manual: true,
    onSuccess: () => auth.run(),
  });

  const login = useRequest(AuthFunc.login, {
    manual: true,
    onSuccess: () => auth.run(),
  });

  const logout = useRequest(AuthFunc.logout, {
    manual: true,
    onSuccess: () => auth.run(),
  });
  return { auth, register, login, logout };
};
