import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../components/Contact';
import { LanguageProvider } from '../contexts/LanguageContext';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('Contact Component', () => {
  it('renders contact form', () => {
    render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    );
    
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service interested/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    );
    
    const submitButton = screen.getByRole('button', { name: /send/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/name.*required/i)).toBeInTheDocument();
      expect(screen.getByText(/email.*required/i)).toBeInTheDocument();
      expect(screen.getByText(/please select.*service/i)).toBeInTheDocument();
      expect(screen.getByText(/message.*required/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    );
    
    const emailInput = screen.getByLabelText(/email address/i);
    await user.type(emailInput, 'invalid-email');
    
    const submitButton = screen.getByRole('button', { name: /send/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    );
    
    // Fill in the form
    await user.type(screen.getByLabelText(/full name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '+1234567890');
    await user.selectOptions(screen.getByLabelText(/service interested/i), 'web-development');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message');
    
    const submitButton = screen.getByRole('button', { name: /send/i });
    await user.click(submitButton);
    
    // Wait for the loading state to complete and success message to appear
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});
