import { MetaComment } from '@/lib/openapi/types';
import './styles.css';

export type DisplayMode = 'profileView' | 'issueView';

interface CommentViewProps {
    comment?: MetaComment;
    displayMode: DisplayMode;
}

export const CommentView = function ({ comment, displayMode }: CommentViewProps) {
    const created_at = new Date(comment?.created_at ?? '');
    const formatter = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return (
        <div className="comment-wrapper">
            <img src="{{ comment.user.get_current_avatar_url }}" />
            <div className="comment-content">
                <div className="comment-header">
                    <span className="comment-name">
                        {displayMode === 'profileView' && typeof comment?.issue !== 'number' ? (
                            <a>#IssueID {comment?.issue?.subject}</a>
                        ) : typeof comment?.user !== 'number' ? (
                            <>{comment?.user}</>
                        ) : (
                            <>MISSING COMMENT HEADER</>
                        )}
                    </span>
                    <span className="comment-date">{formatter.format(created_at)}</span>
                </div>
                <div className="comment-text">
                    <p>{comment?.text}</p>
                </div>
            </div>
        </div>
    );
};

export default CommentView;
