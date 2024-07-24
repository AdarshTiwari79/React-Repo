import "./infoBox.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import FlareIcon from "@mui/icons-material/Flare";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ info }) {
  const INIT_IMG = "/dustyImage.jpg";
  const ColdImg = "/cold.jpg";
  const HotImg = "/hotweather.jpg";
  const RainImg = "/rain.jpg";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RainImg : info.temp > 15 ? HotImg : ColdImg
          }
          title="dusty weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather Report : <b>{info.city}</b>
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <FlareIcon />
            ) : (
              <AcUnitIcon />
            )}
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
