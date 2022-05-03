import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Notes from './Notes';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
