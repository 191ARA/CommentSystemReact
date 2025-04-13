import PostList from '../components/posts/PostList';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="page-title">Recent Posts</h1>
      <PostList />
    </div>
  );
};

export default HomePage;