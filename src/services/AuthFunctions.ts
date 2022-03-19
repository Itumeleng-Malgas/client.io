import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  Auth,
  setPersistence,
  browserSessionPersistence,
  updateProfile,
} from 'firebase/auth';
import { auth } from './Firebase';
import { message } from 'antd';
import { history } from 'umi';

export interface LoginInputProps {
  remember: boolean;
  password: string;
  email: string;
}

export interface RegisterInputProps extends LoginInputProps {
  businessName: string;
}

export const register = async ({
  email,
  password,
  businessName,
}: RegisterInputProps) => {
  return setPersistence(auth, browserSessionPersistence)
    .then(async () => {
      return await createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          updateProfile(res.user, { displayName: businessName });
          await logout();
          message.success('Registration success');
          history.push('/auth/registered');
        })
        .catch((error) => {
          throw error;
        });
    })
    .catch((error) => {
      throw error;
    });
};

export const login = async ({ email, password, remember }: LoginInputProps) => {
  if (!remember) {
    await setPersistence(auth, browserSessionPersistence).catch(
      (error: Error) => {
        throw error.message;
      },
    );
  }

  return await signInWithEmailAndPassword(auth, email, password).catch(
    (error: Error) => {
      throw error.message;
    },
  );
};

export const logout = async () => {
  await signOut(auth).catch((error: Error) => {
    throw error.message;
  });
};

export const currentAccount = () => {
  let userLoaded = false;
  function getCurrentUser(auth: Auth) {
    return new Promise((resolve, reject) => {
      if (userLoaded) {
        resolve(auth.currentUser);
      }
      const unsubscribe = auth.onAuthStateChanged((user) => {
        userLoaded = true;
        unsubscribe();

        resolve(user);
      }, reject);
    });
  }

  return getCurrentUser(auth);
};
