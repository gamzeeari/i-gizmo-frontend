
import React from "react";
import "./MaterialsPage.css";
import { FaLink, FaMicrophone, FaCamera } from "react-icons/fa";
import { Paperclip } from "lucide-react";
const MaterialsPage = () => {
  return (
    <div className="materials-container">
      
      <div className="dropzone-box">
        <div className="paperclip">
            <Paperclip size= {24} color ="#ccc"/>
        </div>    
        <h2>Dosyalarınızı buraya sürükleyin</h2>
        <p>
          <span className="or-text">
          veya      </span>< span className="link">göz atmak için tıklayın</span>
        </p>
        <div className="file-types">
          <span>PDF</span>
          <span>MP4</span>
          <span>JPG</span>
          <span>DOCX</span>
        </div>
      </div>

      
      <h3 className="alt-baslik">Diğer Yöntemler</h3>

      
      <div className="other-methods">
        <div className="card">
          <FaLink size={32} />
          <h4>URL İçe Aktar</h4>
          <p>Web sayfası veya video linkini yapıştırın</p>
        </div>
        <div className="card">
          <FaMicrophone size={32} />
          <h4>Ses Kaydı</h4>
          <p>Sesli notlarınızı kaydedin</p>
        </div>
        <div className="card">
          <FaCamera size={32} />
          <h4>Fotoğraf</h4>
          <p>Ders notlarını fotoğraflayın</p>
        </div>
      </div>
    </div>
  );
};

export default MaterialsPage;
