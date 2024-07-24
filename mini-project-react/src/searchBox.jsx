import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./searchBox.css";
import { getWeatherInfo } from "../helper/helper";

export default function SearchBox() {
  let [city, setCity] = useState("");

  let updateText = (event) => {
    return setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    // calling api function
    getWeatherInfo(city);
    setCity("");
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="city"
          value={city}
          onChange={updateText}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
