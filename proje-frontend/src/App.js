import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Backend adresini buraya yazıyoruz
    fetch('http://localhost:5056/weatherforecast')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bulut Bilişim Projesi - Hava Durumu</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.date}: {item.temperatureC}°C - {item.summary}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;