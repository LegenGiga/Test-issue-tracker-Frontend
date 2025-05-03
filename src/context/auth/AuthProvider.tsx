import React, { PropsWithChildren } from 'react';
import useUser from '@/hooks/useUser';
import AuthContext from './AuthContext';

type AuthProviderProps = {
    apiKey: string;
} & PropsWithChildren;

export const AuthProvider: React.FC<AuthProviderProps> = function ({ apiKey, children }) {
    const { user } = useUser(apiKey);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
