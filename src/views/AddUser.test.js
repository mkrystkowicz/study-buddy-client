import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Add user', () => {
  it('Adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));

    screen.getByText('Grażyna');
  });

  it('Prevents adding new user if consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Grażyna');
    expect(newUser).not.toBeInTheDocument();
  });
});
