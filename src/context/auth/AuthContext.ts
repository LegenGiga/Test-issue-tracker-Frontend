import { UserProps } from '@/hooks/useUser';
import { createContext } from 'react';

export const AuthContext = createContext<UserProps | undefined>(undefined);

export default AuthContext;
