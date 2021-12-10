const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

forecast('Tumkur', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

geoCode('Los angeles', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
