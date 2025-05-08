import '@/main.css';
import './style.css';

import useComment from '@/hooks/useComment';
import CommentList from '@/components/comment/CommentList';
import { useParams } from 'react-router';
import useProfile from '@/hooks/useProfile';

export const ProfilePage = function () {
    const { id } = useParams();
    const user_id = parseInt(id ?? '1');

    const { user } = useProfile({ id: user_id });
    const userComments = useComment({ userId: user_id, detail: ['issue'] });

    return (
        <>
            <div className="profile-container">
                <div className="profile-view">
                    <img className="profile-img" src="{{user.get_current_avatar_url}}" />
                    <div className="profile-data">
                        <h2>{user?.name}</h2>
                        <h5>{user?.username}</h5>
                    </div>

                    <hr />
                    <div className="profile-stats">
                        <div className="stat">
                            <span className="stat-number">{user?.watched_issues_count}</span>
                            <span className="stat-name">Open Assigned Issues</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">{user?.watched_issues_count}</span>
                            <span className="stat-name">Watched Issues</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">{user?.comments_count}</span>
                            <span className="stat-name">Comments</span>
                        </div>
                    </div>
                    <hr />
                    <div className="bio">
                        <p>{user?.bio}</p>
                    </div>
                </div>
                <div className="issues-view">
                    <CommentList comments={userComments.comments} displayMode="profileView" />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
