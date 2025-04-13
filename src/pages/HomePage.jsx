import { useSelector } from 'react-redux';

import './HomePage.css';

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.posts);

  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">Welcome to SocialNetwork</h1>
        <p className="home-subtitle">
          A social network is an online platform designed for communication,<br />
           information exchange,interaction, and building connections <br />
           between people, groups, or organizations.

        </p>
      </div>
      

        
      
    </div>
  );
};

export default HomePage;