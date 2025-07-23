const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/data', (req, res) => {
  const data = {
    heartRate: 72,
    temperature: 36.8,
    bloodPressure: '120/80'
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
