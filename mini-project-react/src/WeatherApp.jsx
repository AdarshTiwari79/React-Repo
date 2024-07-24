import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchBox";

export default function WeatherApp() {
  let [weatherInfo, setWetherInfo] = useState({
    city: "delhi",
    temp: 25.05,
    tempMin: 25,
    tempMax: 26,
    humidity: 68,
    feelsLike: 31,
    weather: "cloudy",
  });

  let updateInfo = (result) => {
    setWetherInfo(result);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <SearchBox data={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
