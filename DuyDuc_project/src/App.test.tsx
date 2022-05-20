import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/login/login';
import Login from './components/login/login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
