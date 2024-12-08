import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders movie', () => {
  render(<App />);
  const linkElement = screen.getByText(/Movie/i);
  expect(linkElement).toBeInTheDocument();
});
