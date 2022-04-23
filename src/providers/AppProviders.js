import { AuthProvider } from 'hooks/useAuth';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProviders = ({ children }) => (
  <Router>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        {children}
      </AuthProvider>
    </ThemeProvider>
  </Router>
);

export default AppProviders;
