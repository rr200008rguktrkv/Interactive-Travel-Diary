// pages/ExperienceGallery.js
/*import React, { useEffect, useState } from 'react';
import './ExperienceGallery.css';
import axios from 'axios';

const ExperienceGallery = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/experience/all')
      .then(res => setExperiences(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="experience-gallery">
      <h2 className="gallery-title">🌍 Travel Experiences</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-title">{exp.title}</h3>
            <p className="username">Shared by: {exp.userId?.username || 'Anonymous'}</p>
            <p className="experience-description">{exp.description}</p>

            {exp.imageUrl && (
              <img
                src={`http://localhost:5000${exp.imageUrl}`}
                alt="experience"
                className="experience-img"
              />
            )}

            {exp.videoUrl && (
              <video controls className="experience-video">
                <source src={`http://localhost:5000${exp.videoUrl}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceGallery;

// pages/ExperienceGallery.js
import React, { useEffect, useState } from 'react';
import './ExperienceGallery.css';
import axios from 'axios';

const ExperienceGallery = () => {
  const [experiences, setExperiences] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/experience/all')
      .then(res => setExperiences(res.data))
      .catch(err => console.error('Error fetching experiences:', err));
  }, []);

  return (
    <div className="experience-gallery-container">
      <h2 className="gallery-title">🌍 Wanderer's Diary</h2>
    
      <div className="experience-scrollable">
      <input
  type="text"
  placeholder="Search by username..."
  className="search-input"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

        <div className="experience-grid">
          {experiences.length === 0 ? (
            <p className="no-experiences">No experiences uploaded yet!</p>
          ) : (
            experiences.map((exp, index) => (
              <div className="experience-card" key={index}>
                {exp.imageUrl && (
                  <img
                    src={`http://localhost:5000${exp.imageUrl}`}
                    alt="Travel Experience"
                    className="experience-img"
                  />
                )}
                {exp.videoUrl && (
                  <video controls className="experience-video">
                    <source src={`http://localhost:5000${exp.videoUrl}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <h3 className="experience-title">{exp.title}</h3>
                <p className="username">Shared by: {exp.userId?.username || 'Traveler'}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceGallery;
*/
// pages/ExperienceGallery.js
/*
import React, { useEffect, useState } from 'react';
import './ExperienceGallery.css';
import axios from 'axios';

const ExperienceGallery = () => {
  const [experiences, setExperiences] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/experience/all')
      .then(res => setExperiences(res.data))
      .catch(err => console.error('Error fetching experiences:', err));
  }, []);

  // Filter experiences based on searchTerm
  const filteredExperiences = experiences.filter((exp) =>
    exp.userId?.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="experience-gallery-container">
      <h2 className="gallery-title">🌍 Wanderer's Diary</h2>

      <input
        type="text"
        placeholder="Search by username..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="experience-scrollable">
        <div className="experience-grid">
          {filteredExperiences.length === 0 ? (
            <p className="no-experiences">No experiences found!</p>
          ) : (
            filteredExperiences.map((exp, index) => (
              <div className="experience-card" key={index}>
                {exp.imageUrl && (
                  <img
                    src={`http://localhost:5000${exp.imageUrl}`}
                    alt="Travel Experience"
                    className="experience-img"
                  />
                )}
                {exp.videoUrl && (
                  <video controls className="experience-video">
                    <source src={`http://localhost:5000${exp.videoUrl}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <h3 className="experience-title">{exp.title}</h3>
                <p className="username">Shared by: {exp.userId?.username || 'Traveler'}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
 export default ExperienceGallery;
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExperienceGallery.css';

function ExperienceGallery() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/experiences');
        setExperiences(res.data);
      } catch (err) {
        console.error('Error fetching experiences:', err);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h2>Travel Experiences</h2>
      </div>

      <div className="experience-scrollable">
  <div className="experience-grid">
    {experiences.map((exp) => (
      <div className="experience-card" key={exp._id}>
        <h3>{exp.title}</h3>
        <p><strong>Uploaded by:</strong> {exp.username}</p>
        <p>{exp.description}</p>

        {exp.image && (
          <img
            src={`http://localhost:5000/uploads/${exp.image}`}
            alt="Uploaded"
            className="experience-img"
          />
        )}

        {exp.video && (
          <video controls className="experience-video">
            <source src={`http://localhost:5000/uploads/${exp.video}`} type="video/mp4" />
          </video>
        )}
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default ExperienceGallery;




