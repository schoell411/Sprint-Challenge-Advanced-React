import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
render(<App />);
});

test('Get h1 title', () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup Players/i);
  });