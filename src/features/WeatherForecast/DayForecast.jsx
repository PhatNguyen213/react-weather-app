import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const isForecastAvailable = forecast => !!forecast?.day;

const ForecastCard = ({ children }) => (
  <Card className="grow" sx={{ maxWidth: 345 }}>
    {children}
  </Card>
);

const UnavailableForecast = () => (
  <ForecastCard>
    <CardActionArea>
      <CardContent classes={{ root: 'flex flex-col items-center' }}>
        <Typography gutterBottom variant="h5" component="div">
          Unavailable
        </Typography>
      </CardContent>
    </CardActionArea>
  </ForecastCard>
);

const DayForecast = ({ forecast }) => {
  if (!isForecastAvailable(forecast)) return <UnavailableForecast />;
  const { date, day } = forecast;
  const { mintemp_c, maxtemp_c, daily_will_it_rain, condition } = day;
  const { text: summary } = condition;
  return (
    <ForecastCard>
      <CardActionArea>
        <CardContent classes={{ root: 'flex justify-center' }}>
          {daily_will_it_rain ? (
            <ThunderstormIcon fontSize="large" />
          ) : (
            <WbSunnyIcon fontSize="large" />
          )}
        </CardContent>
        <CardContent classes={{ root: 'flex flex-col items-center' }}>
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
    </ForecastCard>
  );
};

export default DayForecast;
