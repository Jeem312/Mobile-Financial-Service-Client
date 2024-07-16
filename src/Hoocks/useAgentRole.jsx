import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvide/AuthProvide';
import useUserInfo from './useUserInfo';

const useAgentRole = () => {
  const { user } = useContext(AuthContext);
  const [users, refetch] = useUserInfo();
  const agentInfo = users.find(u => u.email === user?.email && u.role === 'agent');

  const isAgent = agentInfo ? agentInfo : null;

  return [isAgent, refetch];
};

export default useAgentRole;
