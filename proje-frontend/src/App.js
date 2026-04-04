import React, { useState, useEffect } from 'react';

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // KENDİ EC2 IP ADRESİNİ BURAYA YAZ
    fetch('http://51.21.255.3:5056/weatherforecast')
      .then((response) => {
        if (!response.ok) throw new Error('CORS veya Bağlantı Hatası!');
        return response.json();
      })
      .then((data) => {
        setForecasts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      {/* Tailwind CDN - Hızlı kurulum için */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Bulut Bilişim Hava Durumu Paneli</h1>
          <p className="text-gray-600">AWS S3 (Frontend) & AWS EC2 (Backend) Entegrasyonu</p>
        </header>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8" role="alert">
            <p className="font-bold">Hata!</p>
            <p>{error} - Lütfen Backend portunu ve CORS ayarlarını kontrol et.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {forecasts.map((f, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
                <div className="bg-blue-500 p-4 text-white text-center">
                  <p className="text-lg font-semibold">{new Date(f.date).toLocaleDateString('tr-TR', { weekday: 'long' })}</p>
                  <p className="text-sm opacity-80">{f.date}</p>
                </div>
                <div className="p-6 text-center">
                  <span className="text-5xl mb-4 block">
                    {f.temperatureC > 25 ? '☀️' : f.temperatureC > 15 ? '🌤️' : '☁️'}
                  </span>
                  <p className="text-4xl font-bold text-gray-800">{f.temperatureC}°C</p>
                  <p className="text-gray-500 mt-2 italic capitalize">{f.summary}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>© 2026 - Bulut Bilişim Projesi | AWS Deployment Tamamlandı</p>
        </footer>
      </div>
    </div>
  );
}

export default App;