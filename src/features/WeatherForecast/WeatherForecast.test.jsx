import { getAllByText, getByText } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { selectDaysForecasts } from './selectors';
import WeatherForecast from './WeatherForecast';
import { isForecastAvailable } from './DayForecast';

const not = fn => args => !fn(args);

describe('WeatherForecast', () => {
  describe('renders correctly', () => {
    it('compare snapshots', () => {
      const { container } = render(
        <WeatherForecast
          forecasts={[
            {
              date: '2022-10-24',
              maxTemp: 17.4,
              minTemp: 12.1,
              avgTemp: 14.5,
              conditionSummary: 'Moderate rain',
              willItRain: 1,
            },
            {
              date: '2022-10-25',
              maxTemp: 12.4,
              minTemp: 12.1,
              avgTemp: 24.5,
              conditionSummary: 'Moderate rain',
              willItRain: 0,
            },
          ]}
          location={{
            name: 'London',
            region: 'City of London, Greater London',
            country: 'United Kingdom',
            tz_id: 'Europe/London',
            localTime: '2022-10-24 8:47',
          }}
          isFetching={false}
        />
      );
      expect(container).toMatchSnapshot();
    });
    it('shows loading status', () => {
      render(<WeatherForecast isFetching={true} />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    it('shows missing forecasts data as Unavailable', () => {
      const mockState = {
        forecast: {
          data: {
            forecasts: [
              {
                date: '2022-10-24',
                maxTemp: 17.4,
                minTemp: 12.1,
                avgTemp: 14.5,
                conditionSummary: 'Moderate rain',
                willItRain: 1,
              },
              {
                date: '2022-10-25',
                maxTemp: 12.4,
                minTemp: 12.1,
                avgTemp: 24.5,
                conditionSummary: 'Moderate rain',
                willItRain: 0,
              },
            ],
          },
        },
      };
      const select5DayForecasts = selectDaysForecasts(5);
      const forecasts = select5DayForecasts(mockState);
      render(<WeatherForecast forecasts={forecasts} isFetching={false} />);
      const unavailableForecasts = screen.getAllByText('Unavailable');
      expect(unavailableForecasts).toHaveLength(3);
    });
  });
  describe('selectors function correctly', () => {
    it('fill missing forecasts with unavailable data', () => {
      const mockState = {
        forecast: {
          data: {
            forecasts: [
              {
                date: '2022-10-24',
                maxTemp: 17.4,
                minTemp: 12.1,
                avgTemp: 14.5,
                conditionSummary: 'Moderate rain',
                willItRain: 1,
              },
              {
                date: '2022-10-25',
                maxTemp: 12.4,
                minTemp: 12.1,
                avgTemp: 24.5,
                conditionSummary: 'Moderate rain',
                willItRain: 0,
              },
            ],
          },
        },
      };
      const select5DayForecasts = selectDaysForecasts(5);
      const data = select5DayForecasts(mockState).filter(
        not(isForecastAvailable)
      );
      expect(data).toHaveLength(3);
    });
  });
});
