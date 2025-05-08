import { issueTrackerClient } from '@/lib/openapi_fetch/client';
import { OneOf } from '@/utils/type';
import { useContext, useEffect, useState } from 'react';
import { CommentIncludeQueryType, MetaComment } from '@/lib/openapi/types';
import AuthContext from '@/context/auth/AuthContext';

type UseCommentProps = OneOf<{
    all?: boolean;
    userId?: number;
}> & {
    detail?: CommentIncludeQueryType[];
};

export default function (fetchType: UseCommentProps) {
    const [comments, setComments] = useState<MetaComment[] | undefined>(undefined);
    const currentUser = useContext(AuthContext);

    useEffect(() => {
        if (currentUser === undefined) return;
        if (fetchType === undefined) return;

        if (fetchType.all) {
            issueTrackerClient.GET('/api/comments/', {
                params: {
                    query: {
                        include: fetchType.detail
                    }
                }
            }).then(({ data, error }) => {
                if (error) {
                    console.log(error);
                } else {
                    setComments(data);
                }
            });
        } else if (fetchType.userId) {
            issueTrackerClient
                .GET('/api/profiles/{id}/comments/', {
                    params: {
                        path: { id: fetchType.userId },
                        query: { include: fetchType.detail }
                    },
                })
                .then(({ data, error }) => {
                    if (error) {
                        console.log(error);
                    } else {
                        setComments(data);
                    }
                });
        }
    }, [fetchType?.all, fetchType?.userId, currentUser]);

    return {
        loaded: comments !== undefined,
        comments,
    };
}
