import { AuthProvider } from 'hooks/useAuth';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorProvider } from 'hooks/useError';

const AppProviders = ({ children }) => (
  <Router>
    <ThemeProvider theme={theme}>
      <ErrorProvider>
        <AuthProvider>
          <GlobalStyle />
          {children}
        </AuthProvider>
      </ErrorProvider>
    </ThemeProvider>
  </Router>
);

export default AppProviders;
