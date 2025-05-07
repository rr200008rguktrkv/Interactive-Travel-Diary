import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import './Dashboard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      navigate('/');
    } else {
      axios.get(`http://localhost:5000/api/profile/${userId}`)
        .then(res => setProfile(res.data))
        .catch(() => console.log('No profile found'));
    }
  }, [navigate, userId]);

  const handleNavigation = (path) => navigate(path);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <div className="dashboard-container">
      <nav className="top-nav">
        <div className="logo" style={{color:'white'}}>TRAVEL</div>
        <div className="nav-links">
          <button onClick={() => handleNavigation('/profile')}>Profile</button>
          <button onClick={() => handleNavigation('/contact')}>Contact Us</button>
          <button onClick={() => handleNavigation('/about')}>About Us</button>
          <button onClick={() => { localStorage.clear(); navigate('/'); }}>Logout</button>
        </div>
      </nav>

      <div className="dashboard-hero">
        <Slider {...carouselSettings}>
          <div>
            <img src="/images/image1.png" alt="Beach Adventure" />
          </div>
          <div>
            <img src="/images/image2.png" alt="Mountain Journey" />
          </div>
          <div>
            <img src="/images/image3.png" alt="Wilderness Escape" />
          </div>
        </Slider>

        <div className="carousel-overlay">
          <h1 className="main-heading">DISCOVER THRILLING ADVENTURES</h1>
          <div className="cta-buttons">
            <button onClick={() => handleNavigation('/share-experience')}>Share Experience</button>
            <button onClick={() => handleNavigation('/view-experience')}>View Experience</button>
          </div>

          <div className="profile-status">
            {profile ? (
              <div className="profile-badge">
                <img src="/profile-icon.png" alt="Profile" className="profile-icon" />
                <span>Welcome, <strong>{profile.username}</strong>!</span>
              </div>
            ) : (
              <div className="create-profile-message">
                🎒 Please complete your profile to personalize your journey!
              </div>
            )}
          </div>
        </div>

        {/* 🚫 Removed ProfileCard from here */}
      </div>
    </div>
  );
};

export default Dashboard;
