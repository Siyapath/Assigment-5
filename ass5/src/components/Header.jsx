import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../context/LoginRegContext'; 

const Header = () => {
  const navigate = useNavigate();
  const { username } = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/012/627/815/non_2x/3d-popcorn-striped-bucket-cinema-snack-movie-entertainment-concept-high-quality-isolated-3d-render-free-png.png" alt="Logo" />
      </Link>

      {username && <h1>Welcome, {username}!</h1>}

      <div className="header-buttons">
        {username ? (
          <p className="welcome"></p>
        ) : (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
