import React, { useState, useEffect } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Form from 'components/organisms/Form/Form';
import { users as usersData } from 'data/users';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'error' });
      }
    }, 2000);
  });
};

const Root = () => {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  useEffect(() => {
    mockAPI()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Switch>
            <Route path="/" exact>
              <UsersList deleteUser={deleteUser} users={users} />
            </Route>
            <Route path="/add-user">
              <Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
