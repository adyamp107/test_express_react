// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware untuk menangani permintaan JSON
app.use(cors());
app.use(express.json());

// Route sederhana
// Contoh endpoint untuk mendapatkan data
// app.get('/', (req, res) => {

// });
app.get('/', (req, res) => {
    const data = { message: 'Data dari backend' };
    res.json(data);
});
  

// Atur server untuk mendengarkan port tertentu
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
