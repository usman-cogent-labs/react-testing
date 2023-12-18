import { render, screen } from '@testing-library/react';
import App from './App';

describe('Renders', () => {
  test('form on the screen', () => {
    render(<App />);
    const form = screen.getByRole('form', { name: '' });
    expect(form).toBeInTheDocument();
  });

  test('email field on the screen', () => {
    render(<App />);
    const inputField = screen.queryByRole('textbox', {
      name: 'Email address',
    });
    expect(inputField).toBeInTheDocument();
  });

  test('password on the screen', () => {
    render(<App />);
    const inputField = screen.queryByLabelText('Password');
    expect(inputField).toBeInTheDocument();
  });

  test('confirm password on the screen', () => {
    render(<App />);
    const inputField = screen.queryByLabelText('Confirm Password');
    expect(inputField).toBeInTheDocument();
  });
});

describe('Form has', () => {
  test('empty email field', () => {
    render(<App />);
    const inputField = screen.queryByRole('textbox', { name: 'Email address' });
    expect(inputField.value).toBe('');
  });

  test('empty password field', () => {
    render(<App />);
    const field = screen.queryByLabelText('Password');
    expect(field.value).toBe('');
  });

  test('empty confirm password field', () => {
    render(<App />);
    const field = screen.queryByLabelText('Confirm Password');
    expect(field.value).toBe('');
  });
});
