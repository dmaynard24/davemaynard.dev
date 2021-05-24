import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile section', () => {
  render(<App />);
  const nameElement = screen.getByText(/Dave Maynard/i);
  expect(nameElement).toBeInTheDocument();
});
