import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const isForecastAvailable = forecast => !!forecast?.conditionSummary;

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
  const { date, maxTemp, minTemp, conditionSummary, willItRain } = forecast;
  return (
    <ForecastCard>
      <CardActionArea>
        <CardContent classes={{ root: 'flex justify-center' }}>
          {willItRain ? (
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
            {conditionSummary}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min Temperature: {minTemp}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Max Temperature: {maxTemp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ForecastCard>
  );
};

export default DayForecast;
