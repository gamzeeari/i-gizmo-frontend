import React from "react";

const StudyPage = () => {
  return (
    <div className="flex h-screen bg-stone-950 text-white font-nunito py-6">
      
      <aside className="w-64 bg-zinc-900 p-6 flex flex-col justify-between shadow-md min-h-full">
        <div>
          <nav className="space-y-6 text-lg">
            <div className="text-gray-400 hover:text-white transition cursor-pointer text-left pl-0 ml-0 opacity-80">🏠 Ana Sayfa</div>
            <div className="text-gray-400 hover:text-white transition cursor-pointer text-left pl-0 ml-0 opacity-80">📁 Materyal Yükle</div>
            <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow text-lg text-left pl-0 ml-0 opacity-80">
              📖 Çalışma
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-3 mt-10 bg-zinc-800 p-4 rounded-lg text-base">
          <div className="bg-gradient-to-r from-[#7bbfdc] via-[#65b896] to-[#2f97c3] p-3 rounded-full text-black text-xl">👤</div>
          <div>
            <p className="font-medium">Ahmet Yılmaz</p>
            <p className="text-sm text-gray-400">Öğrenci</p>
          </div>
        </div>
      </aside>

      
      <main className="flex-1 flex flex-col p-6 gap-6 max-h-[600px] overflow-y-auto mt-10">
        
        <div className="flex flex-col flex-grow bg-zinc-900 p-8 rounded-2xl shadow-inner overflow-y-auto text-lg gap-5 max-w-3xl mx-auto w-full">
          
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-gradient-to-r from-[#7bbfdc] via-[#65b896] to-[#2f97c3] p-3 rounded-full text-black text-2xl">🤖</div>
            <div>
              <h2 className="text-2xl font-bold">AI Öğretmen</h2>
              <p className="text-gray-400 text-sm mt-1">Sorularını yanıtlıyorum</p>
            </div>
          </div>

          
          <div className="space-y-6 mt-4 flex-1">
            <div className="bg-zinc-800 p-4 rounded-xl max-w-lg w-fit text-sm self-start opacity-80">
              Merhaba! Ben senin AI öğretmenin. Hangi konuda yardıma ihtiyacın var?
            </div>
            <div className="bg-gradient-to-r from-[#7bbfdc] via-[#65b896] to-[#2f97c3] text-white p-4 rounded-xl max-w-md w-fit text-sm self-end ml-auto opacity-80">
              Matematik integral konusunu anlat
            </div>
            <div className="bg-zinc-800 p-4 rounded-xl max-w-lg w-fit text-sm self-start opacity-80">
              İntegral, matematikte türevin tersi işlemdir. Bir fonksiyonun altında kalan alanı hesaplamamızı sağlar.
            </div>
          </div>

          
          <div className="flex text-lg gap-4 pt-4 border-t border-zinc-700">
            <input
              type="text"
              placeholder="Sorunuzu yazın..."
              className="flex-grow px-4 py-3 bg-zinc-800 text-white rounded-xl outline-none opacity-80"
            />
            <button className="bg-gradient-to-r from-[#7bbfdc] via-[#65b896] to-[#2f97c3] text-white px-6 py-3 rounded-xl font-semibold">
              Gönder
            </button>
          </div>
        </div>
      </main>

      
      <aside className="w-96 bg-stone-950 p-6 shadow-md text-lg max-h-[600px] overflow-y-auto mt-10">
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-inner h-full">
          <h3 className="text-2xl font-bold mb-6 text-white">Araçlar</h3>
          <div className="space-y-6">
            <button className="bg-zinc-800 w-full h-24 rounded-xl shadow hover:bg-gray-700 transition flex flex-col items-center justify-center text-white">
              <div className="text-3xl mb-2">📝</div>
              <span className="text-base font-bold">Quiz Oluştur</span>
            </button>
            <button className="bg-zinc-800 w-full h-24 rounded-xl shadow hover:bg-gray-700 transition flex flex-col items-center justify-center text-white">
              <div className="text-3xl mb-2">📚</div>
              <span className="text-base font-bold">Flash Kartlar</span>
            </button>
            <button className="bg-zinc-800 w-full h-24 rounded-xl shadow hover:bg-gray-700 transition flex flex-col items-center justify-center text-white">
              <div className="text-3xl mb-2">📊</div>
              <span className="text-base font-bold">Özet Görüntüle</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StudyPage;
