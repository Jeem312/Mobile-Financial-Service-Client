import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvide/AuthProvide';
import useUserInfo from './useUserInfo';

const useUserRole = () => {
   const {user} = useContext(AuthContext);
   const [users,refetch]=useUserInfo();
   const userinfo = users.find(u=>u.email===user?.email);
   const isUser = userinfo && userinfo.role === 'user' ? userinfo : null;
   return [isUser,refetch];
};

export default useUserRole;