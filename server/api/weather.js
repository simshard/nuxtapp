 
  

// # https://api.openweathermap.org/data/2.5/weather?lat=53.41&lon=-2.9779&appid=4b158dbf293518f609001a35207b61bc
//https://api.openweathermap.org/data/2.5/weather?q=Liverpool&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`)

// ## 


export default async(req, res) => {
    const weather  = await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=Liverpool&units=metric&appid=4b158dbf293518f609001a35207b61bc`)
  
    return weather
  }


 