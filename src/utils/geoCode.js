const request = require('request');

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address,
  )}.json?access_token=pk.eyJ1IjoicmFrZXNoZHIiLCJhIjoiY2t4MGVrMW1uMTVzMDJvdXJhOWR0Y3EybyJ9.LJLbDfTH20icNgtSEtiGtQ&limit=1`;

  request({ url: url, json: true }, (err, res) => {
    if (err || res.body.features.length === 0) {
      callback('Unable to get coordinates', undefined);
    } else {
      callback(
        undefined,
        `${res.body.features[0].place_name} - Latitute: ${res.body.features[0].center[1]}, Longitude:${res.body.features[0].center[0]}`,
      );
    }
  });
};

module.exports = geoCode;
