import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getAllByText('iBTIKAR IT SOLUTIONS')).toHaveLength(3);
  });

  it('renders all main sections', () => {
    render(<App />);
    
    // Check for main navigation elements
    expect(screen.getAllByText('Home')).toHaveLength(2);
    expect(screen.getAllByText('Services')).toHaveLength(2);
    expect(screen.getAllByText('About')).toHaveLength(2);
    expect(screen.getAllByText('Contact')).toHaveLength(2);
  });

  it('renders hero section', () => {
    render(<App />);
    expect(screen.getByText('Welcome to')).toBeInTheDocument();
    expect(screen.getAllByText('iBTIKAR IT SOLUTIONS')).toHaveLength(3);
  });
});
