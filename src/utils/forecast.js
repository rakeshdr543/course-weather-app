const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=210c312406822668d4deda1c3ea1fd5f&query=${latitude},${longitude}&unit=f`;

  request({ url, json: true }, (err, res) => {
    if (err || !res.body) {
      callback('Unable to get weather data', undefined);
    } else {
      const { body } = res;
      console.log(body)
      callback(
        undefined,
        `${body.current.weather_descriptions}, It is currently ${body.current.temperature} degrees out, but feels like ${body.current.feelslike} degree`,
      );
    }
  });
};

module.exports = forecast;
