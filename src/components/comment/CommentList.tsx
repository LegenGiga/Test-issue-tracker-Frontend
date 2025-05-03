import '@/main.css';
import './styles.css';

import CommentView from './CommentView';
import { Comment } from '@/lib/openapi/types';

interface CommentListProps {
    comments?: Comment[];
}

export const CommentList = function ({ comments }: CommentListProps) {
    return (
        <div className="comments-wrapper">
            {comments ? comments.map((comment) => <CommentView key={comment.id} comment={comment} />) : <></>}
        </div>
    );
};

export default CommentList;
