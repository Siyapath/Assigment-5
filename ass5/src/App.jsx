import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import GenreView from './views/GenreView';
import MovieDetailView from './views/MovieDetailView'; 
import ErrorView from './views/ErrorView'; // 
import { AuthContext } from './context/LoginRegContext';

function App() {
  const [username, setUsername] = useState('');

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/genre/:id" element={<GenreView />} />
          <Route path="/movie/:movieId" element={<MovieDetailView />} /> 
          <Route path="*" element={<ErrorView />} /> 
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
