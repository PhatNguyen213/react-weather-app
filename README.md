# Features:

## Services

Note: the Weather Forecast API only returns 3 results event if I send `days=5` to get 5-day forecasts (according to their documentation). So the missing forecasts are shown as "Unavailable" placeholder.

#### API Client

- Encapsulate details in using third-party library (`axios`). If we ever change lib in the future, only need to make changes in this client.
- Expose an interface which services can use to make REST calls.

#### Adapters

- Insulate components from changes in Rest APIs.

## Component Design

#### Clear separation between Smart & Dumb components

- Smart: connected to Redux, running side-effects.
- Dumb: renders UI based on received props, with as few side-effects as possible.

#### Composition

- Add new features by extending components (hooks, HOC), not modifying existing components.

#### Dependency Injection

- Receives behavior from props and children.

#### Handling input

- It is wasteful to trigger REST APIs (to get location suggestions) every time user enters a character.
- Use `debounce` operator and model user's input as a stream of data which can be processed using RxJS operators.

## Error Handling

#### Centralized Error Handling For Async Requests

- Use custom middleware to intercept "rejected" async action and propagate corresponding custom error message.
- Use default error message if no custom message is provided.
- To specify custom error message for an async action, use the exported HOF `createAsyncActionCreator`

```js
const createAsyncAction = createAsyncActionCreator(
  'Something is wrong with Weather services'
);

export const fetchWeatherForecastForLocation = createAsyncAction(
  'weather/fetchWeatherForecastForLocation',
  async locationKey => {
    const { data } = await getWeatherForecastForLocation(locationKey);
    return data;
  }
);
```

#### Error Bounndary

- Wrap around the whole application tree, or specific subtrees which you want to specify fallback UI when an uncaught error happens.
- In this app, `LocationSearch` is wrapped inside ErrorBoundary so the rest of the UI still functions normally when an error is catched.

## Testing

#### Unit Testing

- React components should be a Function of State, meaning we can make assertions on the component from the provided props.
- Unit testing dumb components by providing different sets of props.

#### Snapshot Testing

- Helps to detect unwanted/expected UI changes on components.
- Snapshots should be small and focused.

#### Integration Testing

- Render specific trees of components fully without mocking Redux store.
- Tests should simulate how users interact with the application.

# How to run

- Run `npm install` to install dependencies before running any scripts below.
- To start the application, run `npm start`
- To unit-test the application, run `npm test`
