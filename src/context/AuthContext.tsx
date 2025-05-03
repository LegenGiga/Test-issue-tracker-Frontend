import React, { useContext, createContext, PropsWithChildren } from "react";

import useUser, { UserProps } from "@/hooks/useUser";

export const AuthContext = createContext<UserProps | null>(null);

type AuthProviderProps = {
    apiKey: string;
} & PropsWithChildren; 

export const AuthProvider: React.FC<AuthProviderProps> = function ({ apiKey, children }) {
    const { loaded, user } = useUser(apiKey);

    return <AuthContext.Provider value={loaded ? user : null}>
    {children}
    </AuthContext.Provider>
}

export default AuthContext;