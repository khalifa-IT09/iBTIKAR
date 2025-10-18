import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelector from '../components/LanguageSelector';
import { LanguageProvider } from '../contexts/LanguageContext';

// Mock the translation loading
vi.mock('../locales/en.json', () => ({
  default: {
    language: {
      en: 'US English',
      fr: 'FR Français',
      ar: 'MR العربية'
    }
  }
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('LanguageSelector', () => {
  it('renders language selector', () => {
    render(
      <TestWrapper>
        <LanguageSelector />
      </TestWrapper>
    );
    
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', () => {
    render(
      <TestWrapper>
        <LanguageSelector />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    // Should show language options (excluding currently selected language)
    expect(screen.getAllByText('US English')).toHaveLength(1);
  });
});
