import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders the color grid', () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<App />);
  });
  const gridElement = screen.getByRole('main');
  expect(gridElement).toBeInTheDocument();
});
