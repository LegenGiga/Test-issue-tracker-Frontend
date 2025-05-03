import { issueTrackerClient } from "@/lib/openapi_fetch/client";
import { OneOf } from "@/utils/type";
import { useEffect, useState } from "react";
import { Comment } from "@/lib/openapi/types";

type UseCommentProps = OneOf<{
    all?: boolean;
    userId?: number;
}>;

export default function (fetchType: UseCommentProps) {
    const [comments, setComments] = useState<Comment[] | undefined>(undefined);

    useEffect(() => {
        if (fetchType === undefined) return;

        if (fetchType.all) {
            issueTrackerClient.GET('/api/comments/')
            .then(({ data, error }) => {
                if (error) {

                } else {
                    setComments(data);
                }
            });
        } else if (fetchType.userId) {
            issueTrackerClient.GET('/api/profiles/{id}/comments/', {
                params: {
                    path: { id: fetchType.userId }
                }
            }).then(({ data, error }) => {
                if (error) {
                    
                } else {
                    setComments(data);
                }
            });
        }

    }, [fetchType?.all, fetchType?.userId]);

    return {
        loaded: comments !== undefined,
        comments,
    }
}