/*import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Signup successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div
      className="signup-page"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        padding: '40px',
        width: '370px',
        color: '#fff',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>

        {message && <p style={{ color: 'lightgreen', fontSize: '14px' }}>{message}</p>}
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Already have an account? <Link to="/" style={{ color: '#fff', fontWeight: 'bold' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  margin: '10px 0',
  borderRadius: '10px',
  border: 'none',
  outline: 'none',
  fontSize: '16px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  marginTop: '10px',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: '#28a745',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Signup;
*/
// pages/Signup.js
import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert('Signup successful! You can now login.');
      navigate('/');
    } catch (error) {
      alert('Signup failed: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="signup-page">
  <div className="signup-glass-card">
    <h2 style={{color:'black'}}>Create Your Travel Diary Account</h2>
    <form onSubmit={handleSubmit}>
        <input
      type="text"
      name="username"
      placeholder="Username"
      value={formData.username}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      required
    />
    <div className="terms">
      <input
        type="checkbox"
        name="agreeToTerms"
        checked={formData.agreeToTerms}
        onChange={handleChange}
        required
      />
      <span style={{color:'red'}}>I agree to the <a href="#" style={{color:'red'}}>Terms & Conditions</a></span>
    </div>

          <button type="submit">Sign Up</button>
          <p style={{color:'black'}}>Already have an account? <a href="/login" style={{color:'navy'}}>Login</a></p>
    </form>
  </div>
</div>

  );
};

export default Signup;


