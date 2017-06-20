const express = require('express');
const app = express();

app.get('/add/:op1/:op2', function (req, res) {
  res.send("Answer = " + (Number(req.params.op1) + Number(req.params.op2)));
});

app.get('/subtract/:op1/:op2', function (req, res) {
  res.send("Answer = " + (Number(req.params.op1) - Number(req.params.op2)));
});

app.get('/multiply/:op1/:op2', function (req, res) {
  res.send("Answer = " + (Number(req.params.op1) * Number(req.params.op2)));
});

app.get('/divide/:op1/:op2', function (req, res) {
  res.send("Answer = " + String((Number(req.params.op1) / Number(req.params.op2))));
});

app.listen(3000, function () {
  console.log('Math Time!')
});
