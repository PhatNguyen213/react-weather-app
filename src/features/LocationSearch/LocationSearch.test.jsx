import { getByText } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import snapshotDiff from 'snapshot-diff';
import '@testing-library/jest-dom';

import LocationSearch from './LocationSearch';

describe('LocationSearch', () => {
  describe('renders correctly', () => {
    it('compare snapshots', () => {
      const { asFragment } = render(
        <LocationSearch
          suggestions={[
            { name: 'Test Suggestion' },
            { name: 'Test Suggestion1' },
          ]}
          searchTerm="test"
          onChange={jest.fn()}
        />
      );
      const firstRender = asFragment();
      userEvent.type(screen.getByRole('textbox'), 'test');
      expect(snapshotDiff(firstRender, asFragment())).toMatchSnapshot();
    });
  });
  describe('searchTerm prop', () => {
    it('shows default placeholder when searchTerm is tempy', () => {
      render(<LocationSearch searchTerm="" />);
      expect(screen.getByPlaceholderText('Enter a city')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveValue('');
    });
    it('shows matching value when searchTerm is non-tempy', () => {
      render(<LocationSearch searchTerm="search something" />);
      expect(screen.getByRole('textbox')).toHaveValue('search something');
    });
  });
  describe('onChange prop', () => {
    it('onChange is called with user input', () => {
      const mockFn = jest.fn();
      render(<LocationSearch onChange={mockFn} searchTerm="" />);
      const input = screen.getByRole('textbox');
      userEvent.type(input, 'a');
      expect(mockFn).toBeCalledWith('a');
    });
  });
  describe('suggestions prop', () => {
    it('suggestions are shown when prop is non-tempy', () => {
      render(
        <LocationSearch
          suggestions={[
            { name: 'Test Suggestion' },
            { name: 'Test Suggestion1' },
          ]}
          searchTerm="test"
          onChange={jest.fn()}
        />
      );
      const input = screen.getByRole('textbox');
      userEvent.type(input, 'test');
      expect(screen.getByText('Test Suggestion')).toBeInTheDocument();
    });
  });
  describe('onSelect prop', () => {
    it('onSelect is called when user selects a suggestion', () => {
      const mockFn = jest.fn();
      render(
        <LocationSearch
          suggestions={[
            { name: 'Test Suggestion' },
            { name: 'Test Suggestion1' },
          ]}
          searchTerm="test"
          onChange={jest.fn()}
          onSelect={mockFn}
        />
      );
      const input = screen.getByRole('textbox');
      userEvent.type(input, 'test');
      userEvent.click(screen.getByText('Test Suggestion'));
      expect(mockFn).toBeCalledTimes(1);
    });
  });
});
