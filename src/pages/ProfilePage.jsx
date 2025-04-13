import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ProfilePage.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2023',
    friendsCount: 342,
    postsCount: 56,
    bio: 'Frontend developer | React enthusiast | Photography lover',
  });

  // posts data
  const [posts, setPosts] = useState([
    { id: 1, content: 'Just finished my new React project!', date: '2 hours ago' },
    { id: 2, content: 'Beautiful day for hiking!', date: '1 day ago' },
  ]);

  // friends data
  const [friends, setFriends] = useState([
    { id: 1, name: 'Jane Smith', mutual: 12 },
    { id: 2, name: 'Mike Johnson', mutual: 8 },
  ]);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="cover-photo"></div>
        <div className="profile-info">
          <div className="profile-picture"></div>
          <div className="profile-details">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-bio">{user.bio}</p>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">{user.postsCount}</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat">
                <span className="stat-number">{user.friendsCount}</span>
                <span className="stat-label">Friends</span>
              </div>
              <div className="stat">
                <span className="stat-number">{user.joinDate}</span>
                <span className="stat-label">Joined</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </button>
        <button 
          className={`tab ${activeTab === 'friends' ? 'active' : ''}`}
          onClick={() => setActiveTab('friends')}
        >
          Friends
        </button>
        <button 
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'posts' && (
          <div className="posts-section">
            {posts.map(post => (
              <div key={post.id} className="post">
                <p className="post-content">{post.content}</p>
                <p className="post-date">{post.date}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'friends' && (
          <div className="friends-section">
            {friends.map(friend => (
              <div key={friend.id} className="friend">
                <div className="friend-avatar"></div>
                <div className="friend-info">
                  <p className="friend-name">{friend.name}</p>
                  <p className="mutual-friends">{friend.mutual} mutual friends</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="about-section">
            <div className="about-item">
              <h3>Contact Information</h3>
              <p>Email: {user.email}</p>
            </div>
            <div className="about-item">
              <h3>Basic Information</h3>
              <p>Joined: {user.joinDate}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;