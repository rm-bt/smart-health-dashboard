fetch('http://localhost:5000/api/data')
  .then(response => response.json())
  .then(data => {
    document.getElementById('data-container').innerHTML = `
      <p>❤️ Heart Rate: ${data.heartRate} bpm</p>
      <p>🌡️ Temperature: ${data.temperature} °C</p>
      <p>🩸 Blood Pressure: ${data.bloodPressure}</p>
    `;
  })
  .catch(error => console.error('Error fetching data:', error));
