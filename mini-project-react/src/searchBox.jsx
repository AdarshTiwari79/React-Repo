import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./searchBox.css";
import { getWeatherInfo } from "../helper/helper";

export default function SearchBox({ data }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  let updateText = (event) => {
    return setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // console.log(city);

      // calling api data containing function

      let info = await getWeatherInfo(city);
      // sending data to infoBox as function prop variable
      data(info);
      setCity("");
      setErr(false);
    } catch (error) {
      setErr(true);
      setCity("");
    }
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
        <br></br>
        <br></br>
        {err && <p style={{ color: "red" }}>No such place in our API</p>}
      </form>
    </div>
  );
}
