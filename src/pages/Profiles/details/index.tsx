import { useParams } from 'react-router';

import '@/main.css';
import './style.css';

import CommentList from '@/components/comment/CommentList';

export default function () {
    const { id } = useParams();

    return (
        <>
            <div className="profile-container">
                <div className="profile-view">
                    <img className="profile-img" src="{{user.get_current_avatar_url}}" />
                    <div className="profile-data">
                        <h2>name</h2>
                        <h5>username</h5>
                    </div>

                    <hr />
                    <div className="profile-stats">
                        <div className="stat">
                            <span className="stat-number">5</span>
                            <span className="stat-name">Open Assigned Issues</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">5</span>
                            <span className="stat-name">Watched Issues</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">5</span>
                            <span className="stat-name">Comments</span>
                        </div>
                    </div>
                    <hr />
                    <div className="bio">
                        <p>bio</p>
                    </div>
                </div>
            </div>
            <div className="issues-view">
                <CommentList />
            </div>
        </>
    );
}
