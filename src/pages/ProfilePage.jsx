import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  // Define progress data
  const subjects = [
    { name: 'Matematik', progress: 75, completed: 18, total: 24, color: '#00cc99' },
    { name: 'Fizik', progress: 60, completed: 12, total: 20, color: '#0099cc' },
    { name: 'Kimya', progress: 45, completed: 8, total: 18, color: '#9966cc' }
  ];

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-icon">👤</div>
        <h1>Ahmet Yılmaz</h1>
        <p>Öğrenci</p>
      </div>

      {/* Progress Section */}
      <h3 className="section-title">📊 Özetleme İlerlemen</h3>

      <div className="progress-cards">
        {subjects.map((subject, index) => (
          <div key={index} className="progress-card">
            <h4>{subject.name} <span className="percentage">{subject.progress}%</span></h4>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{width: `${subject.progress}%`, backgroundColor: subject.color}}
              ></div>
            </div>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">{subject.completed}</div>
                <div className="stat-label">Özetlenen</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{subject.total}</div>
                <div className="stat-label">Toplam</div>
              </div>
            </div>
            <button className="continue-btn">Devam Et</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
