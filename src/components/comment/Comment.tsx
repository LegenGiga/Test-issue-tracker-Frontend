import './styles.css';

export default function () {
    return (
        <div className="comment-wrapper">
            <img src="{{ comment.user.get_current_avatar_url }}" />
            <div className="comment-content">
                <div className="comment-header">
                    <span className="comment-name">
                        <a href="{% url 'issue_detail' issue_id=comment.issue.id %}">
                            comment.issue.id comment.issue.subject
                        </a>
                        comment.user.name
                    </span>
                    <span className="comment-date">comment.created_at</span>
                </div>
                <div className="comment-text">
                    <p>comment.text</p>
                </div>
            </div>
        </div>
    );
}
