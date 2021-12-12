const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const app = express();
const port = 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup view engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Rakesh',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Rakesh',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    res.send({ error: 'You must provide an address' });
  } else {
    geoCode(
      req.query.address,
      (error, { latitude, longitude, location } = {}) => {
        if (error) {
          res.send({ error });
        } else {
          forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
              res.send({ error });
            } else {
              res.send({
                forecast: forecastData,
                location,
                address: req.query.address,
              });
            }
          });
        }
      },
    );
  }
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Rakesh',
    errorMessage: 'Page not found.',
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
