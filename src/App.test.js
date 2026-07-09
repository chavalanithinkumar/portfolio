import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: /nithin kumar/i })).toBeInTheDocument();
  expect(screen.getByText(/i create polished frontend experiences/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /hire me/i })).toBeInTheDocument();
});
