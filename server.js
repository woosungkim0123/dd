const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});


const port = 3001
app.listen(port, () => console.log(`${port} 포트로 서버 실행`));