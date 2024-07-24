const API_KEY = "c361d2d56bc416a08da991b63a20bbcc";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherInfo(city) {
  try {
    let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonRes = await res.json();
    // console.log(jsonRes);

    // storing api fetched data as we want, basically customizing data to display
    let result = {
      city: city,
      temp: jsonRes.main.temp,
      tempMin: jsonRes.main.temp_min,
      tempMax: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      feelsLike: jsonRes.main.feels_like,
      weather: jsonRes.weather[0].description,
    };
    // console.log("__________________________________________");
    // console.log(result);
    return result;
  } catch (err) {
    throw error;
  }
}

export { getWeatherInfo };
