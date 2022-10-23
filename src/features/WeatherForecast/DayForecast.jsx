import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const UnavailableForecast = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Unavailable
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
const DayForecast = ({ forecast }) => {
  if (!forecast) return <UnavailableForecast />;
  const { date, day } = forecast;
  const { mintemp_c, maxtemp_c, daily_will_it_rain, condition } = day;
  const { text: summary } = condition;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia>
          {daily_will_it_rain ? <ThunderstormIcon /> : <WbSunnyIcon />}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {date}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {summary}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min Temperature: {mintemp_c}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Max Temperature: {maxtemp_c}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DayForecast;
