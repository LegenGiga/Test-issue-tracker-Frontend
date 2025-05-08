import AuthContext from '@/context/auth/AuthContext';
import { User } from '@/lib/openapi/types';
import { issueTrackerClient, } from '@/lib/openapi_fetch/client';
import { useContext, useEffect, useState } from 'react';

export type ProfileProps = {
    id: number;
};

export default function ({ id }: ProfileProps) {
    const [user, setUser] = useState<User | undefined>(undefined);
    const currentUser = useContext(AuthContext);

    useEffect(() => {
        if (currentUser === undefined) return;

        issueTrackerClient
            .GET('/api/profiles/{id}/', {
                params: {
                    path: { id },
                },
            })
            .then(({ data, error }) => {
                if (error) {
                    console.log(error);
                } else {
                    setUser(data);
                }
            });
    }, [id, currentUser]);

    return { user };
}
