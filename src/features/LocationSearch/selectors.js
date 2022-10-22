import sortBy from 'lodash/sortBy';

export const selectCityWithHighestRank = result => {
  const sorted = sortBy(result, ({ Rank }) => Rank);
  return sorted[sorted.length - 1];
};
