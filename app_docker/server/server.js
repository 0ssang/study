'use strict';

const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/list', (req, res) => {
  res.json([
    {id: 'test1', name: '테스트1'},
    {id: 'test2', name: '테스트2'},
    {id: 'test3', name: '테스트3'},
    {id: 'test4', name: '테스트4'},
  ]);
});

app.listen(PORT, HOST, (err) => {
  if(err){
    console.log('err 발생');
  }
  console.log(`Running on http://${HOST}:${PORT}`);
});