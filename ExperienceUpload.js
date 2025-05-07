import React, { useState } from 'react';
import axios from 'axios';
import './ExperienceUpload.css';

const ExperienceUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);
    if (video) formData.append('video', video);

    try {
      await axios.post('http://localhost:5000/api/experience', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Experience uploaded successfully!');
      setTitle('');
      setDescription('');
      setImage(null);
      setVideo(null);
    } catch (err) {
      alert('Upload failed!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-form-container">
      <h2 className="form-title">Share Your Travel Experience</h2>
      <form onSubmit={handleSubmit} className="experience-upload-form">
        <input
          type="text"
          placeholder="Experience Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-input"
        />
        <textarea
          placeholder="Describe your experience..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="form-textarea"
        />
        <div className="file-upload">
          <label className="file-input-label">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="file-input"
            />
          </label>
          <label className="file-input-label">
            Upload Video
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
              className="file-input"
            />
          </label>
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Experience'}
        </button>
      </form>
    </div>
  );
};

export default ExperienceUpload;
