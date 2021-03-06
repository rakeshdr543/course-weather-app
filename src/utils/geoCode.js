const request = require('request');

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicmFrZXNoZHIiLCJhIjoiY2t4MGVrMW1uMTVzMDJvdXJhOWR0Y3EybyJ9.LJLbDfTH20icNgtSEtiGtQ&limit=1`;

  request({ url: url, json: true }, (err, res) => {
    if (err || res.body.features.length === 0 || !res.body) {
      callback('Unable to get coordinates', undefined);
    } else {
      const { body } = res;
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
