import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders spotify login', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Authorize with Spotify/i);
  expect(linkElement).toBeInTheDocument();
});
