import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchBox";

export default function WeatherApp() {
  let [weatherInfo, setWetherInfo] = useState({});

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
