import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-page">
      
      <aside className="sidebar">
        <div>
          <h1 className="logo">
  <span className="brain-icon">🧠</span> Tutor AI
</h1>

          <p className="tagline">Akıllı Özetleme Platformu</p>
          <nav>
            <ul>
              <li className="active">🏠 Ana Sayfa</li>
              <li>📁 Materyal Yükle</li>
              <li>📚 Çalışma</li>
            </ul>
          </nav>
        </div>

        <div className="profile">
          <div className="avatar">👤</div>
          <div>
            <p className="username">Ahmet Yılmaz</p>
            <p className="userrole">Öğrenci</p>
          </div>
        </div>
      </aside>

      
      <main className="main-content">
        <h2 className="headline">
          Hangi materyali özetlemek <br /> istiyorsunuz?
        </h2>
        <p className="subtext">AI ile saniyeler içinde akıllı özetler oluşturun</p>

        <div className="cards">
          <div className="card">
            <div className="emoji">📄</div>
            <h3>PDF Özetleme</h3>
            <p>PDF dosyalarınızı yükleyin, AI ile özetini çıkarın</p>
          </div>
          <div className="card">
            <div className="emoji">🎥</div>
            <h3>Video Özetleme</h3>
            <p>YouTube videolarından ders notları oluşturun</p>
          </div>
          <div className="card">
            <div className="emoji">📝</div>
            <h3>Ders Notu Analizi</h3>
            <p>El yazısı notlarınızı dijitalleştirin ve özetleyin</p>
          </div>
        </div>

        <button className="start-button">Özetlemeye Başla</button>
      </main>
    </div>
  );
};

export default Home;
