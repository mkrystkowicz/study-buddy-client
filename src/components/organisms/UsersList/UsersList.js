import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UserListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

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

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(false);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setUsers(data);
        setLoadingState(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log('loading changed');
  }, [isLoading]);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : null}</h1>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} index={i} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
