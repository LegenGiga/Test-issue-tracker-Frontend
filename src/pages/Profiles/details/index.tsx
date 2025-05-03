import { useParams } from 'react-router';

import '@/main.css';
import './style.css';

import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import useComment from '@/hooks/useComment';
import CommentList from '@/components/comment/CommentList';

export default function () {
    const { id } = useParams();
    const userProps = useContext(AuthContext);
    const userComments = useComment({ userId: userProps?.id })

    return (
        <>
            <div className="profile-container">
                <div className="profile-view">
                    <img className="profile-img" src="{{user.get_current_avatar_url}}" />
                    <div className="profile-data">
                        <h2>{userProps?.name}</h2>
                        <h5>{userProps?.username}</h5>
                    </div>

                    <hr />
                    <div className="profile-stats">
                        <div className="stat">
                            <span className="stat-number">{ userComments.loaded ? userComments.comments?.length : 0 }</span>
                            <span className="stat-name">Open Assigned Issues</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">0</span>
                            <span className="stat-name">Watched Issues</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">0</span>
                            <span className="stat-name">Comments</span>
                        </div>
                    </div>
                    <hr />
                    <div className="bio">
                        <p>{userProps?.bio}</p>
                    </div>
                </div>
                <div className="issues-view">
                    <CommentList comments={userComments.comments} />
                </div>
            </div>
        </>
    );
}
