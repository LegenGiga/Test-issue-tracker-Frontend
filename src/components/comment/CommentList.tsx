import '@/main.css';
import './styles.css';

import CommentView, { DisplayMode } from './CommentView';
import { MetaComment } from '@/lib/openapi/types';

interface CommentListProps {
    comments?: MetaComment[];
    displayMode: DisplayMode;
}

export const CommentList = function ({ comments, displayMode }: CommentListProps) {
    return (
        <div className="comments-wrapper">
            {comments ? (
                comments.map((comment) => <CommentView displayMode={displayMode} key={comment.id} comment={comment} />)
            ) : (
                <></>
            )}
        </div>
    );
};

export default CommentList;
