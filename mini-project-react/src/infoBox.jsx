import "./infoBox.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function InfoBox() {
  const INIT_IMG = "/dustyImage.jpg";

  let info = {
    city: "delhi",
    temp: 25.05,
    tempMin: 25,
    tempMax: 26,
    humidity: 68,
    feelsLike: 31,
    weather: "cloudy",
  };

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INIT_IMG}
          title="dusty weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather Report : <b>{info.city.toUpperCase()}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>Weather = {info.weather}</p>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>Weather Feels Like = {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
