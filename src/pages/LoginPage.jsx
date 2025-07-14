import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAndRegisterPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h1 className="logo">
          <span role="img" aria-label="brain" className="emoji-brain">🧠</span>
          Tutor AI
        </h1>

        <p className="subtitle">Yapay Zeka ile Öğrenme Deneyimi</p>
        <div className="ai-face">😊</div>
        <p className="welcome-text">
          "Merhaba! Ben senin kişisel AI öğretmenin. <br />
          Birlikte öğrenmeye hazır mısın?"
        </p>

        <div className="features">
          <button>✨ Kişiselleştirilmiş Öğrenme</button>
          <button>🎯 Akıllı İçerik Analizi</button>
          <button>📊 İlerleme Takibi</button>
        </div>
      </div>

      
      <div className="right-section">
        <h2 className="giris-title">Giriş Yap</h2>
        <p className="giris-sub">Öğrenme yolculuğuna devam et</p>
        <form className="form">
          <input type="email" placeholder="Email adresiniz" />
          <input type="password" placeholder="Şifreniz" />
          <button type="submit" className="giris-button">Giriş Yap</button>
        </form>
        <p className="register">Hesabın yok mu? <span className="kayit" onClick={handleRegisterClick}>Kayıt Ol</span></p>
      </div>
    </div>
  );
};

export default LoginPage;
