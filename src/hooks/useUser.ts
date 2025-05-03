import { User } from '@/lib/openapi/types';
import { issueTrackerClient, setClientApiKey } from '@/lib/openapi_fetch/client';
import { useEffect, useState } from 'react';

export type UserProps = User & {
    apiKey: string;
};

export default function (rawApiKey?: string) {
    const [userProps, setUserProps] = useState<UserProps | undefined>(undefined);

    useEffect(() => {
        if (rawApiKey === undefined) return;

        const apiKey = setClientApiKey(rawApiKey);

        issueTrackerClient.GET('/api/profiles/me/').then(({ data, error }) => {
            if (error) throw new Error("Profile couldn't be fetched with API key");
            else setUserProps({ ...data, apiKey });
        });
    }, [rawApiKey]);

    return {
        loaded: userProps !== undefined,
        user: userProps,
    };
}
