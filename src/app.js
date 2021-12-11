const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

if(!process.argv[2]){
  console.log('Provide valid place name')
}
else{
  geoCode(process.argv[2], (err,data ) => {
    if (err) {
      console.log(err);
    } else {
      const {latitude,longitude,location}=data
      forecast(latitude,longitude, (err, forecastData) => {
        if (err) {
          console.log(err);
        } else {
          console.log(forecastData,location);
        }
      });
    }
  })
}
