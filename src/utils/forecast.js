const request = require('request');

const forecast = (place, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=210c312406822668d4deda1c3ea1fd5f&query=${encodeURIComponent(
    place,
  )}`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback('Unable to ge weather data', undefined);
    } else {
      callback(
        undefined,
        `${res.body.current.weather_descriptions}, It is currently ${res.body.current.temperature} degrees out, but feels like ${res.body.current.feelslike} degree`,
      );
    }
  });
};

module.exports = forecast;
