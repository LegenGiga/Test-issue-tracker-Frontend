import { User } from "@/lib/openapi/types"
import { issueTrackerClient, setClientApiKey } from "@/lib/openapi_fetch/client"
import { useEffect, useState } from "react";
  
export type UserProps = User & {
    apiKey: string;
}

export default function (rawApiKey?: string) {
    const [user, setUser] = useState<User | undefined>(undefined);

    let apiKey: string | undefined;

    useEffect(() => {
        if (rawApiKey === undefined) return; 
            
        apiKey = setClientApiKey(rawApiKey);

        issueTrackerClient.GET('/api/profiles/me/')
        .then(({ data, error }) => {
            if (error)
                throw new Error("Profile couldn't be fetched with API key")
            else
                setUser(data);
        });

    }, [rawApiKey])

    return {
        loaded: user !== undefined,
        user: {
            ...user,
            apiKey,
        } as UserProps,   
    }
}