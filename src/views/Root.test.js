import React from 'react';
import { screen, render, fireEvent, waitFor } from 'test-utils';
import Root from 'views/Root';

describe('Root component', () => {
  it('Renders the root component as unauthorized user', () => {
    render(<Root />);
    screen.getByText('login');
  });

  it('Displays error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Ello' } });
    fireEvent.change(password, { target: { value: 'Makrello' } });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Displays authenticated app', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: '1234' } });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Lonnie/));
  });
});
