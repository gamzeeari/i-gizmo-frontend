import React from "react";
import "./StudyPage.css";

const StudyPage = () => {
  return (
    <div className="study-container">
      
      <aside className="sidebar">
        <div>
          <nav className="sidebar-nav">
            <div className="nav-item">🏠 Ana Sayfa</div>
            <div className="nav-item">📁 Materyal Yükle</div>
            <div className="nav-item active">
              📖 Çalışma
            </div>
          </nav>
        </div>
        <div className="user-profile">
          <div className="user-avatar">👤</div>
          <div className="user-info">
            <p>Ahmet Yılmaz</p>
            <p className="user-role">Öğrenci</p>
          </div>
        </div>
      </aside>

      
      <main className="main-content">
        
        <div className="chat-container">
          
          <div className="ai-header">
            <div className="ai-avatar">🤖</div>
            <div>
              <h2 className="ai-title">AI Öğretmen</h2>
              <p className="ai-subtitle">Sorularını yanıtlıyorum</p>
            </div>
          </div>

          
          <div className="chat-messages">
            <div className="message ai">
              Merhaba! Ben senin AI öğretmenin. Hangi konuda yardıma ihtiyacın var?
            </div>
            <div className="message user">
              Matematik integral konusunu anlat
            </div>
            <div className="message ai">
              İntegral, matematikte türevin tersi işlemdir. Bir fonksiyonun altında kalan alanı hesaplamamızı sağlar.
            </div>
          </div>

          
          <div className="chat-input-container">
            <input
              type="text"
              placeholder="Sorunuzu yazın..."
              className="chat-input"
            />
            <button className="send-button">
              Gönder
            </button>
          </div>
        </div>
      </main>

      
      <aside className="tools-sidebar">
        <div className="tools-container">
          <h3 className="tools-title">Araçlar</h3>
          <div className="tools-grid">
            <button className="tool-button">
              <div className="tool-icon">📝</div>
              <span className="tool-label">Quiz Oluştur</span>
            </button>
            <button className="tool-button">
              <div className="tool-icon">📚</div>
              <span className="tool-label">Flash Kartlar</span>
            </button>
            <button className="tool-button">
              <div className="tool-icon">📊</div>
              <span className="tool-label">Özet Görüntüle</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StudyPage;
