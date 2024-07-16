import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvide/AuthProvide';
import useUserInfo from './useUserInfo';

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [users, refetch] = useUserInfo();
  const adminInfo = users.find(u => u.email === user?.email && u.role === 'admin');

  const isAdmin = adminInfo ? adminInfo : null;

  return [isAdmin, refetch];
};

export default useAdmin;
