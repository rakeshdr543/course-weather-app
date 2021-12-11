const http=require('http')

const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/tumkur,
  )}.json?access_token=pk.eyJ1IjoicmFrZXNoZHIiLCJhIjoiY2t4MGVrMW1uMTVzMDJvdXJhOWR0Y3EybyJ9.LJLbDfTH20icNgtSEtiGtQ&limit=1`;

  const request=http.request(url, (response)=>{
      let data=''

      response.on('data',(chunk)=>{
          data=data+chunk.toString()
      })

      response.on('end',()=>{
          const body=JSON.parse(data)
          console.log(body)
      })
  })

  request.on('error',(err)=>{
      console.log('error',err)
  })

  request.end()



