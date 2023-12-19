import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

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

test('email field is typeable', () => {
  render(<App />);
  const inputField = screen.queryByRole('textbox', { name: 'Email address' });
  userEvent.type(inputField, 'usman@example.com');
  expect(inputField.value).toBe('usman@example.com');
});

test('password field is typeable', () => {
  render(<App />);
  const inputField = screen.queryByLabelText('Password');
  userEvent.type(inputField, '1234');
  expect(inputField.value).toBe('1234');
});

test('confirm password field is typeable', () => {
  render(<App />);
  const inputField = screen.queryByLabelText('Confirm Password');
  userEvent.type(inputField, '1234');
  expect(inputField.value).toBe('1234');
});

describe('Verifies errors fields of ', () => {
  test('email', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    const emailErrorElement = screen.getByText(/Invalid email/i, {
      name: 'email',
    });
    expect(emailErrorElement).toBeInTheDocument();
  });

  test('password', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    const emailErrorElement = screen.getByText(
      /^password is a required field$/i
    );
    expect(emailErrorElement).toBeInTheDocument();
  });

  test('confirm password', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    const emailErrorElement = screen.getByText(
      /confirm password is a required field/i
    );
    expect(emailErrorElement).toBeInTheDocument();
  });
});
