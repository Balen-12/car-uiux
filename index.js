const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/index.html'));
});

// Cars
app.get('/cars', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/carfilter.html'));
});

app.get('/cars/get-car', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/viewCar.html'));
});

// Company
app.get('/company', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/brandfilter.html'));
});

app.get('/company/get-company', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/viewBrand.html'));
});

// Product
app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/element.html'));
});

app.get('/product/get-product', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/index.html'));
});

// Login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/register.html'));
});

app.listen(3434, () => {
  console.log('I listening in port 3434');
});
