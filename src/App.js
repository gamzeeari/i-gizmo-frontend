import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MaterialsPage from './pages/MaterialsPage';
import StudyPage from './pages/StudyPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/materials" element={<MaterialsPage />} /> {/* MainLayout dışında */}
        <Route path="/study" element={<StudyPage />} /> {/* MainLayout dışında */}
        <Route path="/profile" element={<ProfilePage />} /> {/* MainLayout dışında */}

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="study" element={<StudyPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
