import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email,
        password
      });
  
      if (response.status === 200) {
        // ✅ Save userId to localStorage
        localStorage.setItem('userId', response.data.userId);
  
        // Optional: also save token or name if returned
        // localStorage.setItem('token', response.data.token);
  
        navigate('/dashboard'); // Redirect to dashboard after login
      }
    } catch (err) {
      alert('Login failed. Please check your credentials.');
      console.error(err);
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
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
        width: '350px',
        color: '#fff',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px',color:'black' }}>Login</h2>
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px',color:'blue' }}>
          Not registered? <Link to="/signup" style={{ color: 'black', fontWeight: 'bold' }}>Sign up</Link>
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
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Login;
